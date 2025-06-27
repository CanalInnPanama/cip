import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BvdJ5s_1.mjs';
import { $ as $$HeroPages } from '../../chunks/HeroPages_uAxS9c5l.mjs';
import { $ as $$EntradasCard } from '../../chunks/EntradasCard_C6Sazli4.mjs';
import { g as getLatestposts } from '../../chunks/wp_B_wWg3De.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
  const allPosts = await getLatestposts({ perPage: 100 });
  return paginate(allPosts, { pageSize: 2 });
}
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  const postsDeEstaPagina = page.data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Blog - P\xE1gina ${page.currentPage}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPages", $$HeroPages, { "title": "Blog" })} ${maybeRenderHead()}<section class="flex sm:flex-row flex-col justify-center items-start mt-16 w-full h-auto"> <article class="flex flex-col sm:gap-16 gap-6 items-center sm:justify-start justify-center m-auto w-4/5 h-full min-h-[50vh]"> <!-- Iteramos solo sobre los posts de la página actual --> ${postsDeEstaPagina.map((post) => renderTemplate`${renderComponent($$result2, "EntradasCard", $$EntradasCard, { ...post })}`)} </article> </section>  <section class="flex justify-center items-center gap-4 mt-12 mb-16"> <!-- Botón "Anterior": Solo se muestra si hay una página previa --> ${page.url.prev && renderTemplate`<a${addAttribute(page.url.prev, "href")} class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
« Anterior
</a>`} <!-- Indicador de página actual --> <span class="text-gray-600">
Página ${page.currentPage} de ${page.totalPages} </span> <!-- Botón "Siguiente": Solo se muestra si hay una página siguiente --> ${page.url.next && renderTemplate`<a${addAttribute(page.url.next, "href")} class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
Siguiente »
</a>`} </section> ` })}`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/blog/[page].astro", void 0);

const $$file = "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/blog/[page].astro";
const $$url = "/blog/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
