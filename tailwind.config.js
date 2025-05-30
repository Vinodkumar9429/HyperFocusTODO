/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abrilfatface: ['Abril Fatface', 'serif'],
        bodonimoda: ['Bodoni Moda SC', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        cormorantinfant: ['Cormorant Infant', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        notosans: ['Noto Sans', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        ptserif: ['PT Serif', 'serif'],
        playfairdisplay: ['Playfair Display', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        prata: ['Prata', 'serif'],
        signika: ['Signika', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
