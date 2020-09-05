/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  theme: {
    darkSelector: '.dark-mode',
    screens: {
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxlmin: '1351px',
      xxlmax: { max: '1350px' }
    },
    fontFamily: {
      mono: [
        '"IBM Plex Mono"',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace'
      ]
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    borderWidth: {
      default: '1px',
      0: 0,
      '1/2': '0.5px',
      2: '2px',
      4: '4px'
    },
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#01f1cc',
        success: '#0070f3',
        danger: '#ff0000',
        warning: '#f5a623',
        muted: '#6c757d',
        dark: '#111111',
        light: '#f8f9fa'
      },
      spacing: {
        72: '18rem',
        96: '24rem',
        128: '32rem'
      },
      height: {
        84: '22rem'
      },
      width: {
        '3/2': '150%',
        '4/2': '200%',
        '1/2-screen': '50vw'
      },
      margin: {
        '-fullh': '-100vh'
      }
    },
    inset: {
      0: 0,
      16: '16px',
      32: '32px',
      64: '64px',
      '2rem': '2rem',
      '3rem': '3rem'
    }
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive'
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive'
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [require('tailwindcss-dark-mode')()]
}
