import 'soukai-bis/patch-zod';
import { bootCoreModels, bootModelsFromViteGlob } from 'soukai-bis';
import { beforeAll } from 'vite-plus/test';

const models = import.meta.glob(['@/models/*', '!**/*.test.ts'], { eager: true }) as Record<
    string,
    Record<string, unknown>
>;

beforeAll(async () => {
    bootCoreModels({ reset: true });
    bootModelsFromViteGlob(models, { reset: true });
});
