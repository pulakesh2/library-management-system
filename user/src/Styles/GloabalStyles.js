// GlobalStyle.js - CSS Variables for Dark and Light Mode Themes

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  /* Light Mode Colors */
  --color-light-bg-primary: #fafafa;
  --color-light-bg-secondary: #ffffff;
  --color-light-bg-tertiary: #f8fafc;
  --color-light-bg-elevated: #ffffff;
  --color-light-bg-hover: #f9fafb;
  --color-light-bg-active: #f0f9ff;
  
  --color-light-text-primary: #1a1a1a;
  --color-light-text-secondary: #374151;
  --color-light-text-tertiary: #6b7280;
  --color-light-text-muted: #9ca3af;
  --color-light-text-inverse: #ffffff;
  
  --color-light-border-primary: #e5e5e5;
  --color-light-border-secondary: #e5e7eb;
  --color-light-border-tertiary: #d1d5db;
  --color-light-border-hover: #9ca3af;
  --color-light-border-focus: #3b82f6;
  
  --color-light-shadow-sm: rgba(0, 0, 0, 0.1);
  --color-light-shadow-md: rgba(0, 0, 0, 0.15);
  --color-light-shadow-lg: rgba(0, 0, 0, 0.2);
  
  /* Dark Mode Colors */
  --color-dark-bg-primary: #0a0a0a;
  --color-dark-bg-secondary: #0f0f0f;
  --color-dark-bg-tertiary: #1a1a1a;
  --color-dark-bg-elevated: #0f0f0f;
  --color-dark-bg-hover: #1a1a1a;
  --color-dark-bg-active: #1e3a8a;
  
  --color-dark-text-primary: #ffffff;
  --color-dark-text-secondary: #e5e7eb;
  --color-dark-text-tertiary: #d1d5db;
  --color-dark-text-muted: #9ca3af;
  --color-dark-text-inverse: #0f0f0f;
  
  --color-dark-border-primary: #2a2a2a;
  --color-dark-border-secondary: #374151;
  --color-dark-border-tertiary: #4b5563;
  --color-dark-border-hover: #6b7280;
  --color-dark-border-focus: #60a5fa;
  
  --color-dark-shadow-sm: rgba(0, 0, 0, 0.3);
  --color-dark-shadow-md: rgba(0, 0, 0, 0.4);
  --color-dark-shadow-lg: rgba(0, 0, 0, 0.5);
  
  /* Brand Colors (Theme Independent) */
  --color-brand-blue: #60a5fa;
  --color-brand-blue-hover: #3b82f6;
  --color-brand-blue-light: #dbeafe;
  --color-brand-blue-dark: #1e40af;
  --color-brand-blue-focus: rgba(96, 165, 250, 0.1);
  --color-brand-blue-shadow: rgba(96, 165, 250, 0.3);
  
  --color-brand-gradient-start: #667eea;
  --color-brand-gradient-end: #764ba2;
  
  /* Status Colors */
  --color-success-light: #dcfce7;
  --color-success-light-text: #166534;
  --color-success-dark: #064e3b;
  --color-success-dark-text: #6ee7b7;
  
  --color-error-light: #fee2e2;
  --color-error-light-text: #991b1b;
  --color-error-dark: #7f1d1d;
  --color-error-dark-text: #fca5a5;
  
  --color-warning-light: #fef3c7;
  --color-warning-light-text: #92400e;
  --color-warning-dark: #78350f;
  --color-warning-dark-text: #fcd34d;
  
  --color-info-light: #dbeafe;
  --color-info-light-text: #1e40af;
  --color-info-dark: #1e3a8a;
  --color-info-dark-text: #93c5fd;
  
  /* Semantic Colors for Light Mode */
  --color-bg-primary: var(--color-light-bg-primary);
  --color-bg-secondary: var(--color-light-bg-secondary);
  --color-bg-tertiary: var(--color-light-bg-tertiary);
  --color-bg-elevated: var(--color-light-bg-elevated);
  --color-bg-hover: var(--color-light-bg-hover);
  --color-bg-active: var(--color-light-bg-active);
  
  --color-text-primary: var(--color-light-text-primary);
  --color-text-secondary: var(--color-light-text-secondary);
  --color-text-tertiary: var(--color-light-text-tertiary);
  --color-text-muted: var(--color-light-text-muted);
  --color-text-inverse: var(--color-light-text-inverse);
  
  --color-border-primary: var(--color-light-border-primary);
  --color-border-secondary: var(--color-light-border-secondary);
  --color-border-tertiary: var(--color-light-border-tertiary);
  --color-border-hover: var(--color-light-border-hover);
  --color-border-focus: var(--color-light-border-focus);
  
  --color-shadow-sm: var(--color-light-shadow-sm);
  --color-shadow-md: var(--color-light-shadow-md);
  --color-shadow-lg: var(--color-light-shadow-lg);
  
  --color-status-success-bg: var(--color-success-light);
  --color-status-success-text: var(--color-success-light-text);
  --color-status-error-bg: var(--color-error-light);
  --color-status-error-text: var(--color-error-light-text);
  --color-status-warning-bg: var(--color-warning-light);
  --color-status-warning-text: var(--color-warning-light-text);
  --color-status-info-bg: var(--color-info-light);
  --color-status-info-text: var(--color-info-light-text);
}

/* Dark Mode Override */
[data-theme="dark"] {
  --color-bg-primary: var(--color-dark-bg-primary);
  --color-bg-secondary: var(--color-dark-bg-secondary);
  --color-bg-tertiary: var(--color-dark-bg-tertiary);
  --color-bg-elevated: var(--color-dark-bg-elevated);
  --color-bg-hover: var(--color-dark-bg-hover);
  --color-bg-active: var(--color-dark-bg-active);
  
  --color-text-primary: var(--color-dark-text-primary);
  --color-text-secondary: var(--color-dark-text-secondary);
  --color-text-tertiary: var(--color-dark-text-tertiary);
  --color-text-muted: var(--color-dark-text-muted);
  --color-text-inverse: var(--color-dark-text-inverse);
  
  --color-border-primary: var(--color-dark-border-primary);
  --color-border-secondary: var(--color-dark-border-secondary);
  --color-border-tertiary: var(--color-dark-border-tertiary);
  --color-border-hover: var(--color-dark-border-hover);
  --color-border-focus: var(--color-dark-border-focus);
  
  --color-shadow-sm: var(--color-dark-shadow-sm);
  --color-shadow-md: var(--color-dark-shadow-md);
  --color-shadow-lg: var(--color-dark-shadow-lg);
  
  --color-status-success-bg: var(--color-success-dark);
  --color-status-success-text: var(--color-success-dark-text);
  --color-status-error-bg: var(--color-error-dark);
  --color-status-error-text: var(--color-error-dark-text);
  --color-status-warning-bg: var(--color-warning-dark);
  --color-status-warning-text: var(--color-warning-dark-text);
  --color-status-info-bg: var(--color-info-dark);
  --color-status-info-text: var(--color-info-dark-text);
}

/* Auto Dark Mode (System Preference) */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-bg-primary: var(--color-dark-bg-primary);
    --color-bg-secondary: var(--color-dark-bg-secondary);
    --color-bg-tertiary: var(--color-dark-bg-tertiary);
    --color-bg-elevated: var(--color-dark-bg-elevated);
    --color-bg-hover: var(--color-dark-bg-hover);
    --color-bg-active: var(--color-dark-bg-active);
    
    --color-text-primary: var(--color-dark-text-primary);
    --color-text-secondary: var(--color-dark-text-secondary);
    --color-text-tertiary: var(--color-dark-text-tertiary);
    --color-text-muted: var(--color-dark-text-muted);
    --color-text-inverse: var(--color-dark-text-inverse);
    
    --color-border-primary: var(--color-dark-border-primary);
    --color-border-secondary: var(--color-dark-border-secondary);
    --color-border-tertiary: var(--color-dark-border-tertiary);
    --color-border-hover: var(--color-dark-border-hover);
    --color-border-focus: var(--color-dark-border-focus);
    
    --color-shadow-sm: var(--color-dark-shadow-sm);
    --color-shadow-md: var(--color-dark-shadow-md);
    --color-shadow-lg: var(--color-dark-shadow-lg);
    
    --color-status-success-bg: var(--color-success-dark);
    --color-status-success-text: var(--color-success-dark-text);
    --color-status-error-bg: var(--color-error-dark);
    --color-status-error-text: var(--color-error-dark-text);
    --color-status-warning-bg: var(--color-warning-dark);
    --color-status-warning-text: var(--color-warning-dark-text);
    --color-status-info-bg: var(--color-info-dark);
    --color-status-info-text: var(--color-info-dark-text);
  }
}

/* Additional Utility Variables */
:root {
  /* Typography Scale */
  --font-size-xs: 0.75rem;     /* 12px */
  --font-size-sm: 0.875rem;    /* 14px */
  --font-size-base: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;    /* 18px */
  --font-size-xl: 1.25rem;     /* 20px */
  --font-size-2xl: 1.5rem;     /* 24px */
  --font-size-3xl: 1.875rem;   /* 30px */
  
  /* Font Weights */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Spacing Scale */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 0.75rem;   /* 12px */
  --spacing-lg: 1rem;      /* 16px */
  --spacing-xl: 1.5rem;    /* 24px */
  --spacing-2xl: 2rem;     /* 32px */
  --spacing-3xl: 3rem;     /* 48px */
  --spacing-4xl: 4rem;     /* 64px */
  --spacing-5xl: 5rem;     /* 80px */
  
  /* Border Radius */
  --radius-sm: 0.25rem;    /* 4px */
  --radius-md: 0.375rem;   /* 6px */
  --radius-lg: 0.5rem;     /* 8px */
  --radius-xl: 0.75rem;    /* 12px */
  --radius-2xl: 1rem;      /* 16px */
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.2s ease;
  --transition-slow: 0.3s ease;
  
  /* Z-Index Scale */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
  --z-toast: 1080;


  body{
    /* background-color:var(--color-light-bg-primary); */
    background-color:var(--color-light-bg-tertiary);
      font-family: "Roboto Mono", monospace;
  }

  html, body {
  position: relative;
  z-index: auto;
  overflow: visible;
}
  *{
    margin: 0;
    padding:0 ;
  }
}
`;

// Export for use in JavaScript/React applications
export default GlobalStyle;

// Usage Examples:

// 1. In a React component with styled-components:
/*
import styled from 'styled-components';

const Button = styled.button\`
  background-color: var(--color-brand-blue);
  color: var(--color-text-inverse);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md) var(--spacing-xl);
  font-weight: var(--font-weight-medium);
  transition: var(--transition-base);
  
  &:hover {
    background-color: var(--color-brand-blue-hover);
    box-shadow: 0 4px 12px var(--color-brand-blue-shadow);
  }
\`;
*/

// 2. In regular CSS:
/*
.button {
  background-color: var(--color-brand-blue);
  color: var(--color-text-inverse);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md) var(--spacing-xl);
}
*/

// 3. Theme switching function:
/*
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}
*/

// 4. Initialize theme from system preference or localStorage:
/*
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = savedTheme || systemTheme;
  document.documentElement.setAttribute('data-theme', theme);
}
*/
