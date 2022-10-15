module.exports = {
  content: ['./src/**/*.{js,jsx,tsx,ts}', './dist/*.html'],
  theme: {
    extend: {
      colors: {
        title: '#0c374d',
        label: '#666',
        placeholder: '#eee',
        back: '#FFFFFF',
        back2: '#F4F6FC',
        backForm: '#E8EDF5',
        hover: '#F7F9FB',
        border: '#eee',
        logo: '#436DFF',
        titleDark: '#DEDFE1',
        labelDark: '#BBBDC1',
        placeholderDark: '#687184',
        backDark: '#343B4A',
        back2Dark: '#2C313E',
        backFormDark: '#272c38',
        hoverDark: '#3C4556',
        borderDark: '#444'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px'
    }
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
  variants: {
    scrollbar: ['rounded']
  }
};
