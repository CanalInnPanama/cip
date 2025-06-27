import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BvdJ5s_1.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const title = "404";
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  Astro2.response.status = 404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex w-full items-center justify-center mt-16"> <article class="flex flex-col items-center justify-center w-4/5 text-center"> <i class="fa-solid fa-exclamation-circle text-primary text-6xl"></i> <h1 class="text-3xl text-primary mt-8">
404 - ¡Página No Encontrada!
</h1> <p class="text-secondary text-2xl mt-4">
Lo sentimos, la página que estás buscando no existe.
</p> <div class="text-secondary text-2xl flex items-center justify-center"> <p class="flex">
Puedes volver a la
</p> <a href="/" class="flex gap-3">
página de
<div class="flex items-center justify-center gap-2 text-primary hover:text-secondary transition-colors duration-300"> <i class="fa-solid fa-house"></i> <span>inicio</span> </div> </a> </div> </article> </section> ` })}`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/404.astro", void 0);

const $$file = "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    title,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
