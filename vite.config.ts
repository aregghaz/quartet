import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: 'public',
    plugins: [react()],
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: `@use "@src" as *;`,
                includePaths: [path.resolve(__dirname, 'src')],
                // sassOptions: {
                //     javascriptEnabled: false,
                // },
            },
        },
    },
    server: {
        // proxy : {
        //   '/api': {
        //     target: 'https://dev02-service-getwey.azuremicroservices.io/api',
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/api/, ''),
        //   },
        // },
        // host: true,
        port: 3000,
    },
    optimizeDeps: {
        exclude: ['js-big-decimal'],
    },
    define: {
        global: 'globalThis', // this was added for resolving "sockjs-client" error
    },
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, './src/'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@images': path.resolve(__dirname, './src/images/'),
            '@store': path.resolve(__dirname, './src/store/'),
            '@svg': path.resolve(__dirname, './src/icons/'),
            '@type': path.resolve(__dirname, './src/types/'),
        },
    },
});