import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  const data = {};
  if (command == "build") data.base = "./";
  return {
    ...data,
    plugins: [react({})]
  };
})
