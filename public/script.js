const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');
const submitButton = form.querySelector('button[type="submit"]');
const container = document.querySelector('.container');

const conversation = [];
let isWaiting = false;
let currentTheme = 'classic';

const themeToggle = document.createElement('button');
themeToggle.type = 'button';
themeToggle.className = 'theme-toggle';
themeToggle.textContent = '✨ Switch to Neon';
themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'classic' ? 'neon' : 'classic';
  applyTheme(currentTheme);
});

container.insertBefore(themeToggle, chatBox);

const quickActions = document.createElement('div');
quickActions.className = 'quick-actions';
quickActions.innerHTML = `
  <button type="button" data-prompt="Buatkan rencana singkat untuk hari ini">⚡ Rencana singkat</button>
  <button type="button" data-prompt="Beri saran yang praktis dan langsung bisa dipakai">💡 Saran praktis</button>
`;
container.insertBefore(quickActions, chatBox);

quickActions.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    input.value = button.dataset.prompt;
    input.focus();
  });
});

applyTheme(currentTheme);

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage || isWaiting) return;

  appendMessage('user', userMessage);
  conversation.push({ role: 'user', text: userMessage });
  input.value = '';

  const thinkingMessage = appendMessage('bot', '');
  const loadingDots = document.createElement('span');
  loadingDots.className = 'loading-dots';
  loadingDots.innerHTML = '<span></span><span></span><span></span>';
  thinkingMessage.appendChild(loadingDots);
  setLoadingState(true);

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ conversation })
    });

    let data = null;
    try {
      data = await response.json();
    } catch (error) {
      data = null;
    }

    if (!response.ok) {
      throw new Error(data?.error || 'Failed to get response from server.');
    }

    const reply = data && typeof data.result === 'string' ? data.result.trim() : '';

    if (reply) {
      conversation.push({ role: 'model', text: reply });
      thinkingMessage.innerHTML = renderMarkdown(reply);
    } else {
      conversation.push({ role: 'model', text: 'Sorry, no response received.' });
      thinkingMessage.textContent = 'Sorry, no response received.';
    }
  } catch (error) {
    thinkingMessage.textContent = error.message || 'Failed to get response from server.';
  } finally {
    setLoadingState(false);
    input.focus();
  }
});

function appendMessage(sender, text, options = {}) {
  const message = document.createElement('div');
  message.className = `message ${sender}`;

  if (options.renderMarkdown) {
    message.innerHTML = renderMarkdown(text);
  } else {
    message.textContent = text;
  }

  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
  return message;
}

function setLoadingState(isLoading) {
  isWaiting = isLoading;
  input.disabled = isLoading;
  submitButton.disabled = isLoading;
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  themeToggle.textContent = theme === 'classic' ? '✨ Switch to Neon' : '🎧 Switch to Classic';
}

function renderMarkdown(text) {
  if (!text) return '';

  const lines = text.split(/\n+/);
  const html = [];
  let inList = false;

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      if (inList) {
        html.push('</ul>');
        inList = false;
      }
      return;
    }

    if (/^#{1,6}\s+/.test(trimmed)) {
      if (inList) {
        html.push('</ul>');
        inList = false;
      }
      const level = trimmed.match(/^#+/)[0].length;
      const headingText = parseInline(trimmed.replace(/^#{1,6}\s+/, ''));
      html.push(`<h${Math.min(level, 6)}>${headingText}</h${Math.min(level, 6)}>`);
      return;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      if (!inList) {
        html.push('<ul class="markdown-list">');
        inList = true;
      }
      html.push(`<li>${parseInline(trimmed.replace(/^[-*]\s+/, ''))}</li>`);
      return;
    }

    if (inList) {
      html.push('</ul>');
      inList = false;
    }

    html.push(`<p>${parseInline(trimmed)}</p>`);
  });

  if (inList) {
    html.push('</ul>');
  }

  return html.join('');
}

function parseInline(text) {
  let result = escapeHtml(text);
  result = result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  result = result.replace(/__(.*?)__/g, '<strong>$1</strong>');
  result = result.replace(/\*(.*?)\*/g, '<em>$1</em>');
  result = result.replace(/`(.*?)`/g, '<code>$1</code>');
  return result.replace(/\n/g, '<br>');
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
