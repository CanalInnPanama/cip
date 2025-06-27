import { c as createComponent, m as maybeRenderHead, a as renderTemplate } from '../chunks/astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Entradas = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class=" bg-yellow-500"> <article class=" bg-blue-500"> <h1 class="uppercase text-title text-secondary font-bold">
Titulo
</h1> <div>
Imagen
</div> <span>
La cita
</span> <p>
Parrafo de la entrada
</p> </article> </section>`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/entradas.astro", void 0);

const $$file = "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/entradas.astro";
const $$url = "/entradas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Entradas,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
