import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        // proxy: {      '/*': {        
        //     target: 'http://localhost:8080', // Spring 서버 주소        
        //     changeOrigin: true,        
        //     }   
        // }
    },
    plugins: [react(), svgr()],

    resolve: {
        alias: [
            { find: '@components', replacement: '/src/components' },
            { find: '@', replacement: '/src' },
            { find: '@assets', replacement: '/src/assets' },
            { find: '@styles', replacement: '/src/styles' },
            { find: '@pages', replacement: '/src/pages' },
            { find: '@utils', replacement: '/src/utils' },
            { find: '@hooks', replacement: '/src/hooks' },
            { find: '@context', replacement: '/src/context' },
        ],
    },
});
