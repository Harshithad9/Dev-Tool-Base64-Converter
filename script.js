// DOM Elements
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encodeBtn = document.getElementById('encodeBtn');
const decodeBtn = document.getElementById('decodeBtn');
const clearBtn = document.getElementById('clearBtn');
const themeToggle = document.getElementById('themeToggle');
const errorDisplay = document.getElementById('errorDisplay');

// Load saved data and theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedInput = localStorage.getItem('base64Input');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedInput) {
        inputText.value = savedInput;
    }
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '🌞';
    }
});

// Theme toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '🌞' : '🌓';
});

// Encode to Base64
encodeBtn.addEventListener('click', encodeToBase64);

function encodeToBase64() {
    errorDisplay.textContent = '';
    const text = inputText.value;
    if (!text) {
        errorDisplay.textContent = 'Please enter text to encode';
        return;
    }
    
    try {
        const encoded = btoa(unescape(encodeURIComponent(text)));
        outputText.value = encoded;
        localStorage.setItem('base64Input', text);
    } catch (e) {
        errorDisplay.textContent = 'Error encoding text';
    }
}

// Decode from Base64
decodeBtn.addEventListener('click', decodeFromBase64);

function decodeFromBase64() {
    errorDisplay.textContent = '';
    const text = inputText.value;
    if (!text) {
        errorDisplay.textContent = 'Please enter Base64 to decode';
        return;
    }
    
    try {
        const decoded = decodeURIComponent(escape(atob(text)));
        outputText.value = decoded;
        localStorage.setItem('base64Input', text);
    } catch (e) {
        errorDisplay.textContent = 'Invalid Base64 input';
    }
}

// Clear all
clearBtn.addEventListener('click', () => {
    inputText.value = '';
    outputText.value = '';
    errorDisplay.textContent = '';
    localStorage.removeItem('base64Input');
    inputText.focus();
});

// Copy to clipboard
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    element.select();
    document.execCommand('copy');
    // DOM Elements
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encodeBtn = document.getElementById('encodeBtn');
const decodeBtn = document.getElementById('decodeBtn');
const clearBtn = document.getElementById('clearBtn');
const themeToggle = document.getElementById('themeToggle');
const errorDisplay = document.getElementById('errorDisplay');

// Load saved data and theme preference
document.addEventListener('DOMContentLoaded', () => {
    const savedInput = localStorage.getItem('base64Input');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedInput) {
        inputText.value = savedInput;
    }
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '🌞';
    }
});

// Theme toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '🌞' : '🌓';
});

// Encode to Base64
encodeBtn.addEventListener('click', encodeToBase64);

function encodeToBase64() {
    errorDisplay.textContent = '';
    const text = inputText.value;
    if (!text) {
        errorDisplay.textContent = 'Please enter text to encode';
        return;
    }
    
    try {
        const encoded = btoa(unescape(encodeURIComponent(text)));
        outputText.value = encoded;
        localStorage.setItem('base64Input', text);
    } catch (e) {
        errorDisplay.textContent = 'Error encoding text';
    }
}

// Decode from Base64
decodeBtn.addEventListener('click', decodeFromBase64);

function decodeFromBase64() {
    errorDisplay.textContent = '';
    const text = inputText.value;
    if (!text) {
        errorDisplay.textContent = 'Please enter Base64 to decode';
        return;
    }
    
    try {
        const decoded = decodeURIComponent(escape(atob(text)));
        outputText.value = decoded;
        localStorage.setItem('base64Input', text);
    } catch (e) {
        errorDisplay.textContent = 'Invalid Base64 input';
    }
}

// Clear all
clearBtn.addEventListener('click', () => {
    inputText.value = '';
    outputText.value = '';
    errorDisplay.textContent = '';
    localStorage.removeItem('base64Input');
    inputText.focus();
});

// Copy to clipboard
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    element.select();
    document.execCommand('copy');
    
    // Show temporary feedback
    const copyBtn = element.nextElementSibling;
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
        copyBtn.textContent = originalText;
    }, 2000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey) {
        switch (e.key.toLowerCase()) {
            case 'e':
                e.preventDefault();
                encodeToBase64();
                break;
            case 'd':
                e.preventDefault();
                decodeFromBase64();
                break;
            case 'c':
                if (e.shiftKey) {
                    e.preventDefault();
                    clearBtn.click();
                }
                break;
        }
    }
});
    // Show temporary feedback
    const copyBtn = element.nextElementSibling;
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => {
        copyBtn.textContent = originalText;
    }, 2000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey) {
        switch (e.key.toLowerCase()) {
            case 'e':
                e.preventDefault();
                encodeToBase64();
                break;
            case 'd':
                e.preventDefault();
                decodeFromBase64();
                break;
            case 'c':
                if (e.shiftKey) {
                    e.preventDefault();
                    clearBtn.click();
                }
                break;
        }
    }
});