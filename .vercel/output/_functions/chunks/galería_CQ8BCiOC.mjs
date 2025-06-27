import { c as createComponent, m as maybeRenderHead, e as renderScript, d as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_BvdJ5s_1.mjs';
import { $ as $$HeroPages } from './HeroPages_uAxS9c5l.mjs';
import 'clsx';
/* empty css                           */

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pswp-gallery pswp-gallery--single-column grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto" id="gallery"> ${Array.from({ length: 40 }).map((_, i) => renderTemplate`<a class="rounded-md overflow-hidden hover:scale-105 transition-all duration-500 aspect-square"${addAttribute(`/src/imgs/IMG_${i + 1}.webp`, "href")} target="_blank" data-cropped="true" data-pswp-width="1875" data-pswp-height="2500">  <img class="aspect-square object-cover" loading="lazy"${addAttribute(`/src/imgs/IMG_${i + 1}.webp`, "src")} alt=""> </a>`)} ${renderScript($$result, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/Gallery.astro?astro&type=script&index=0&lang.ts")}</div>`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/Gallery.astro", void 0);

const $$Galera = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galer\xEDa" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPages", $$HeroPages, { "title": "Galer\xEDa" })} ${maybeRenderHead()}<section class="w-full h-auto justify-center items-center"> <article class="flex justify-center w-4/5 mx-auto"> ${renderComponent($$result2, "Gallery", $$Gallery, {})} </article> </section> ` })}`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/galer\xEDa.astro", void 0);

const $$file = "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/galería.astro";
const $$url = "/galería";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Galera,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Galera as $, _page as _ };
