/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./public/index.html',
      './src/**/*.{html,js}'
   ],
   theme: {
      colors: {
         'clr-blue-02-000': 'hsl(204, 70%, 95%)',
         'clr-blue-02-100': 'hsl(204, 70%, 91%)',
         'clr-blue-02-200': 'hsl(204, 70%, 81%)',
         'clr-blue-02-300': 'hsl(204, 70%, 72%)',
         'clr-blue-02-400': 'hsl(204, 70%, 63%)',
         'clr-blue-02-500': 'hsl(204, 70%, 53%)',
         'clr-blue-02-600': 'hsl(204, 62%, 47%)',
         'clr-blue-02-700': 'hsl(204, 62%, 40%)',
         'clr-blue-02-800': 'hsl(204, 62%, 34%)',
         'clr-blue-02-900': 'hsl(204, 62%, 28%)',
         'clr-neutral-04-000': 'hsl(184, 6%, 95%)',
         'clr-neutral-04-100': 'hsl(184, 6%, 91%)',
         'clr-neutral-04-200': 'hsl(184, 6%, 81%)',
         'clr-neutral-04-300': 'hsl(184, 6%, 72%)',
         'clr-neutral-04-400': 'hsl(184, 6%, 62%)',
         'clr-neutral-04-500': 'hsl(184, 6%, 53%)',
         'clr-neutral-04-600': 'hsl(184, 5%, 46%)',
         'clr-neutral-04-700': 'hsl(184, 5%, 40%)',
         'clr-neutral-04-800': 'hsl(184, 5%, 34%)',
         'clr-neutral-04-900': 'hsl(184, 5%, 27%)',
         'clr-augmented-01-000': 'hsl(210, 12%, 93%)',
         'clr-augmented-01-100': 'hsl(210, 12%, 86%)',
         'clr-augmented-01-200': 'hsl(210, 12%, 71%)',
         'clr-augmented-01-300': 'hsl(210, 12%, 57%)',
         'clr-augmented-01-400': 'hsl(210, 15%, 43%)',
         'clr-augmented-01-500': 'hsl(210, 29%, 29%)',
         'clr-augmented-01-600': 'hsl(210, 29%, 25%)',
         'clr-augmented-01-700': 'hsl(210, 29%, 22%)',
         'clr-augmented-01-800': 'hsl(210, 29%, 18%)',
         'clr-augmented-01-900': 'hsl(210, 29%, 15%)'
      }, extend: {
         fontFamily: {
            heading: ['PT Serif', 'serif'],
            body: ['PT Sans', 'sans-serif'],
            monospace: ['PT Mono', 'monospace']
         }, fontWeight: {
            'fw-thin': 100,
            'fw-light': 300,
            'fw-normal': 400,
            'fw-medium': 500,
            'fw-bold': 700,
            'fw-bolder': 900
         }, transitionTimingFunction: {
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
   },
   plugins: [],
}