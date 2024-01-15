// src/theme/dark-mode-theme.ts
import { css } from '@emotion/react';

// Define the color variables for dark mode
const colors = {
  bodyBackground: '#121212',
  textColor: '#E0E0E0',
  buttonBackground: '#333333',
  buttonTextColor: '#FFFFFF',
  borderColor: '#424242',
  modalBackground: 'rgba(255, 255, 255, 0.1)',
  toolbarBackground: '#212121',
  chatToggleButtonBackground: '#044e54',
  chatToggleButtonHoverBackground: '#03363d',
};

// Define the dark mode theme object
const darkModeTheme = {
  globalStyles: css`
    body {
      background-color: ${colors.bodyBackground};
      color: ${colors.textColor};
    }
    button {
      background-color: ${colors.buttonBackground};
      color: ${colors.buttonTextColor};
      border-color: ${colors.borderColor};
    }
    .modal {
      background-color: ${colors.modalBackground};
    }
    .toolbar {
      background-color: ${colors.toolbarBackground};
    }
    .chat-toggle-button {
      background-color: ${colors.chatToggleButtonBackground};
      &:hover {
        background-color: ${colors.chatToggleButtonHoverBackground};
      }
    }
  `,
};

export default darkModeTheme;
