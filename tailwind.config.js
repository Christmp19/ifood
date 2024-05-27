/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export const content = [
  "./src/**/*.{html,js,svelte,ts}",
  './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
];
export const plugins = [require('flowbite/plugin')];
export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      ...colors, // This imports all Tailwind colors
    }
  }
};
