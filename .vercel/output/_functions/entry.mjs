import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Btt223G_.mjs';
import { manifest } from './manifest_DIA4tvqs.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/blog/_page_.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/contáctanos.astro.mjs');
const _page5 = () => import('./pages/entradas.astro.mjs');
const _page6 = () => import('./pages/faq.astro.mjs');
const _page7 = () => import('./pages/galería.astro.mjs');
const _page8 = () => import('./pages/habitaciones.astro.mjs');
const _page9 = () => import('./pages/nosotros.astro.mjs');
const _page10 = () => import('./pages/post/_slug_.astro.mjs');
const _page11 = () => import('./pages/_page_.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/[page].astro", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/contáctanos.astro", _page4],
    ["src/pages/entradas.astro", _page5],
    ["src/pages/faq.astro", _page6],
    ["src/pages/galería.astro", _page7],
    ["src/pages/habitaciones.astro", _page8],
    ["src/pages/nosotros.astro", _page9],
    ["src/pages/post/[slug].astro", _page10],
    ["src/pages/[page].astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "18a1b1de-6ff3-470f-a8a0-0f3f1a9614ce",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
