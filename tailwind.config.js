module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  media: false, // or 'media' or 'class'

  theme: {
    fontfamily: {
      sans: ['roboto'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
