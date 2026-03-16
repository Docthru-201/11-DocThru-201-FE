import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  /** 전역 기본 폰트: pretendard / 로고·타이틀·칩 타입 등 일부 폰트: quantico */
  fontFamily: {
    pretendard:
      'var(--font-pretendard), Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    quantico:
      'var(--font-quantico), Quantico, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },

  fontSize: {
    '2xs': '12px',
    xs: '13px',
    sm: '14px',
    base: '16px',
    md: '18px',
    lg: '20px',
    xl: '22px',
    '2xl': '24px',
  },

  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  color: {
    gray: {
      900: '#171717',
      800: '#262626',
      700: '#404040',
      600: '#525252',
      500: '#737373',
      400: '#A3A3A3',
      300: '#D4D4D4',
      200: '#E5E5E5',
      100: '#E8EBED',
      50: '#FAFAFA',
    },

    white: '#FFFFFF',

    brand: {
      background: '#262626',
      point: '#FFC117',
      text: '#F1F2F5',
    },

    semantic: {
      error: '#EB3E3E',
    },
  },

  space: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
  },

  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '19px',
    '3xl': '30px',
    full: '9999px',
  },

  shadow: {
    xs: '0 1px 2px 0 rgba(0,0,0,0.05)',
    sm: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)',
    md: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
    xl: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
  },

  zIndex: {
    dropdown: '1000',
    modal: '1100',
    toast: '1200',
    tooltip: '1300',
  },

  transition: {
    duration: {
      fast: '0.15s',
      normal: '0.2s',
    },
    timing: {
      ease: 'ease',
    },
  },

  opacity: {
    hidden: '0',
    inactive: '0.4',
    disabled: '0.5',
    overlay: '0.4',
  },

  lineHeight: {
    tight: '1',
    normal: '1.5',
  },
});
