export const theme = {
  extend: {
    animation: {
      fade: 'fadeInOut 2s ease-in-out infinite',
    },
    keyframes: {
      fadeInOut: {
        '0%, 100%': { opacity: 0 },
        '50%': { opacity: 1 },
      },
    },
  },
};
