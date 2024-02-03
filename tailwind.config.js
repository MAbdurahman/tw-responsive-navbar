/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"], theme: {
         extend: {
             fontFamily: {
                 heading: ['PT Serif', 'serif'],
                 body: ['PT Sans', 'sans-serif'],
                 monospace: ['PT Mono', 'monospace']
             },
            fontWeight: {
              'fw-thin': 100,
              'fw-light': 300,
              'fw-normal': 400,
              'fw-medium': 500,
              'fw-bold': 700,
              'fw-bolder': 900
            },
            transitionTimingFunction: {
              'tf-basic-01': 'cubic-bezier(0.26, 0.1, 0.27, 1.55)',
               'tf-basic-02': 'cubic-bezier(0.17, 0.67, 0.83, 0.67)',
               'tf-ease': 'cubic-bezier(0.19, 0.08, 0.46, 0.99)',
               'tf-ease-in': 'cubic-bezier(0.33, 0.02, 0.84, 0.75)',
               'tf-ease-out': 'cubic-bezier(0.05, 0.21, 0.66, 0.98)',
               'tf-ease-in-out': 'cubic-bezier(0.38, 0, 0.57, 0.99)',
               'tf-linear': 'cubic-bezier(0.19, 0.08, 0.84, 0.75)',
               'tf-smooth': 'cubic-bezier(0.1, 0.7, 0.6, 0.9)',
               'tf-snappy': 'cubic-bezier(0.5, 0, 0.4, 0.98)'
            },
         },
    }, plugins: [],
}