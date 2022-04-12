module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        indy: "url('/public/assets/indy.jpeg')",
        kevin: "url('/public/assets/kevin.jpeg')",
        mira: "url('/public/assets/mira.jpeg')",
        mark: "url('/public/assets/mark.jpeg')",
      },
    },
    colors: {
      pink: '#c591d4',
      purple: '#876cab',
      darkpurple: '#666693',
      darkteal: '#8ebec9',
      teal: '#a3e4e5',
      white: '#fff',
    },
  },
  plugins: [],
};
