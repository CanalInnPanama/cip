import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BvdJ5s_1.mjs';
import { $ as $$Nosotros } from '../chunks/nosotros_DHgOky4h.mjs';
import { $ as $$Habitaciones } from '../chunks/habitaciones_bz2IOJ2n.mjs';
import { $ as $$Galera } from '../chunks/galería_CQ8BCiOC.mjs';
import { $ as $$Blog } from '../chunks/blog_ZcJpnN2q.mjs';
import { $ as $$Contctanos } from '../chunks/contáctanos_4J4vtwXa.mjs';
import { $ as $$Faq } from '../chunks/faq_CRQYbt7V.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return [
    { params: { page: "nosotros" } },
    { params: { page: "habitaciones" } },
    { params: { page: "galer\xEDa" } },
    { params: { page: "blog" } },
    { params: { page: "cont\xE1ctanos" } },
    { params: { page: "faq" } }
  ];
}
const $$page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.params;
  if (page === "inicio" || page === "index") {
    return Astro2.redirect("/", 302);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": page }, { "default": ($$result2) => renderTemplate`${page === "nosotros" && renderTemplate`${renderComponent($$result2, "Nosotros", $$Nosotros, {})}`}${page === "habitaciones" && renderTemplate`${renderComponent($$result2, "Habitaciones", $$Habitaciones, {})}`}${page === "galer\xEDa" && renderTemplate`${renderComponent($$result2, "Galer\xEDa", $$Galera, {})}`}${page === "blog" && renderTemplate`${renderComponent($$result2, "Blog", $$Blog, {})}`}${page === "cont\xE1ctanos" && renderTemplate`${renderComponent($$result2, "Cont\xE1ctanos", $$Contctanos, {})}`}${page === "faq" && renderTemplate`${renderComponent($$result2, "Faq", $$Faq, {})}`}${!["nosotros", "habitaciones", "blog", "cont\xE1ctanos", "faq"].includes(page) && renderTemplate`${maybeRenderHead()}<section class="flex w-full items-center justify-center mt-16"> <article class="flex flex-col items-center justify-center w-4/5 text-center"> <i class="fa-solid fa-exclamation-circle text-primary text-6xl"></i> <h1 class="text-3xl text-primary mt-8">
404 - ¡Página No Encontrada!
</h1> <p class="text-secondary text-2xl mt-4">
Lo sentimos, la página que estás buscando no existe.
</p> <div class="text-secondary text-2xl flex items-center justify-center"> <p class="flex">
Puedes volver a la
</p> <a href="/" class="flex gap-3">
página de
<div class="flex items-center justify-center gap-2 text-primary hover:text-secondary transition-colors duration-300"> <i class="fa-solid fa-house"></i> <span>inicio</span> </div> </a> </div> </article> </section>`}` })}`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/[page].astro", void 0);

const $$file = "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/[page].astro";
const $$url = "/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
