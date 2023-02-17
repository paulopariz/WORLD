/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "public/index.html",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    container: {
      center: true
    },
    
    extend: {

      screens: {
        mn: '374px',
        sm: '642px',
        md: '770px' ,
        lg: '1026px' ,
        xl: '1300px' ,
        '2xl': '1538px'
    },

    width: {
      '68': '17rem',
      '84': '21rem'
    },
    height:{
      '42': '10.5rem'
    }

    },
  },
  plugins: [
    require("daisyui")
  ],
}
