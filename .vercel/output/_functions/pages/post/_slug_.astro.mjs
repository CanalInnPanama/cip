import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BvdJ5s_1.mjs';
import { $ as $$HeroPages } from '../../chunks/HeroPages_uAxS9c5l.mjs';
import { a as getPostInfo } from '../../chunks/wp_B_wWg3De.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const slug = Astro2.params.slug;
  if (!slug) return Astro2.redirect("/404");
  const { title, content } = await getPostInfo(slug);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "blog" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPages", $$HeroPages, { "title": "Blog" })} ${maybeRenderHead()}<section class="flex flex-col w-full h-auto justify-center items-center"> <article class="flex flex-col gap-7 w-4/5 h-auto justify-center items-center"> <h1 class="text-secondary sm:text-title text-mtitle font-bold text-center sm:my-12 mb-10"> ${title} </h1> <div class="text-secondary sm:text-parrafo text-mparrafo flex flex-col justify-center items-center gap-5 sm:w-1/2 w-full">${unescapeHTML(content)}</div> <div class="flex sm:w-1/2 hover:text-primary transition-all duration-500"> <a class="flex flex-row gap-5 text-mtitle justify-start items-center mt-7 sm:w-1/2 cursor-pointer" href="/blog"> <i class="fa-solid fa-arrow-left"></i> <p>
Regresar
</p> </a> </div> </article> </section> ` })}`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/post/[slug].astro", void 0);

const $$file = "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
