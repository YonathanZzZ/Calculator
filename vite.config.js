import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
        const config = {
            plugins: [react()],
            build: {
                outDir: './dist',
                emptyOutDir: true,
            },
            base: '/',
        }

        if (command !== 'server') {
            config.base = '/Calculator'
        }

        return config;
    }
)
