import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                */

const $$Astro = createAstro();
const $$BotomAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BotomAction;
  const { urlDestino, value, bg } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`flex justify-center items-center w-full h-full py-1.5 px-10 rounded-full cursor-pointer transition-all duration-500 ${bg}`, "class")} data-astro-cid-zzk5syza> <a${addAttribute(urlDestino, "href")} data-astro-cid-zzk5syza> <input class="cursor-pointer" type="submit"${addAttribute(value, "value")} data-astro-cid-zzk5syza> </a> </section> `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/components gegnerales/BotomAction.astro", void 0);

export { $$BotomAction as $ };
