import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_BvdJ5s_1.mjs';
import { $ as $$HeroPages } from './HeroPages_uAxS9c5l.mjs';
import { $ as $$EntradasCard } from './EntradasCard_C6Sazli4.mjs';
import { g as getLatestposts } from './wp_B_wWg3De.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getLatestposts({ perPage: 50 });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPages", $$HeroPages, { "title": "Blog" })} ${maybeRenderHead()}<section class="flex sm:flex-row flex-col justify-center items-start mt-16 w-full h-auto"> <article class="flex flex-col sm:gap-16 gap-6 items-center sm:justify-start justify-center m-auto w-4/5 h-full"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "EntradasCard", $$EntradasCard, { ...post })}`)} </article> </section> ` })}`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/blog.astro", void 0);

const $$file = "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Blog as $, _page as _ };
