import { URL, fileURLToPath } from 'node:url';

import Aerogel, { AerogelResolver } from '@aerogel/vite';
import I18n from '@intlify/unplugin-vue-i18n/vite';
import { fmt, lint } from '@noeldemartin/vite-plus-config';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite-plus';

export default defineConfig({
    build: { sourcemap: true },
    base: process.env.NODE_ENV === 'production' ? '/hello-aerogel/' : '/',
    publicDir: fileURLToPath(new URL('./src/assets/public/', import.meta.url)),
    plugins: [
        Aerogel({ name: 'Aerogel' }),
        Components({
            deep: true,
            dts: 'src/types/components.d.ts',
            dirs: ['src/components', 'src/pages/**/components'],
            resolvers: [AerogelResolver(), IconsResolver()],
        }),
        I18n({ include: fileURLToPath(new URL('./src/lang/**/*.yaml', import.meta.url)) }),
        Icons({
            iconCustomizer(_, __, props) {
                props['aria-hidden'] = 'true';
            },
        }),
    ],
    fmt,
    lint: { extends: [lint] },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
