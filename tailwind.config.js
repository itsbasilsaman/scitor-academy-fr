module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { color: '#22d3ee' },
          '50%': { color: '#c4b5fd' },
        },
        highlightCyan: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '50%': { opacity: '1', color: '#22d3ee', transform: 'translateY(0)' },
          '100%': { opacity: '1', color: '#22d3ee', transform: 'translateY(0)' },
        },
        highlightPurple: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '50%': { opacity: '1', color: '#c4b5fd', transform: 'translateY(0)' },
          '100%': { opacity: '1', color: '#c4b5fd', transform: 'translateY(0)' },
        },
        highlightPink: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '50%': { opacity: '1', color: '#f472b6', transform: 'translateY(0)' },
          '100%': { opacity: '1', color: '#f472b6', transform: 'translateY(0)' },
        },
        highlightYellow: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '50%': { opacity: '1', color: '#fde68a', transform: 'translateY(0)' },
          '100%': { opacity: '1', color: '#fde68a', transform: 'translateY(0)' },
        },
      },
      animation: {
        colorChange: 'colorChange 2s ease-in-out forwards',
        'highlight-cyan': 'highlightCyan 1s cubic-bezier(0.4,0,0.2,1)',
        'highlight-purple': 'highlightPurple 1s cubic-bezier(0.4,0,0.2,1)',
        'highlight-pink': 'highlightPink 1s cubic-bezier(0.4,0,0.2,1)',
        'highlight-yellow': 'highlightYellow 1s cubic-bezier(0.4,0,0.2,1)',
      },
    },
  },
} 