import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from './astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_BvdJ5s_1.mjs';
import { $ as $$HeroPages } from './HeroPages_uAxS9c5l.mjs';
import 'clsx';
/* empty css                               */

const $$CampoContacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="" class="flex flex-col sm:w-[30%] w-full gap-5" data-astro-cid-yaogevqt> <div class="flex flex-col gap-2" data-astro-cid-yaogevqt> <label for="nombre" class="text-secondary font-bold" data-astro-cid-yaogevqt>Nombre</label> <input type="text" name="nombre" id="nombre" placeholder="Juan Perez" class="w-full h-12 border border-primary px-5 rounded-xs outline-none" data-astro-cid-yaogevqt> </div> <div class="flex flex-col gap-2" data-astro-cid-yaogevqt> <label for="email" class="text-secondary font-bold" data-astro-cid-yaogevqt>Email</label> <input type="email" name="email" id="email" placeholder="tucorreo@ejemplo.com" class="w-full h-12 border border-primary px-5 rounded-xs outline-none" data-astro-cid-yaogevqt> </div> <div class="flex flex-col gap-2" data-astro-cid-yaogevqt> <label for="telefono" class="text-secondary font-bold" data-astro-cid-yaogevqt>Teléfono</label> <input type="tel" name="telefono" id="telefono" placeholder="(+507) 0000 0000" class="w-full h-12 border border-primary px-5 rounded-xs outline-none" data-astro-cid-yaogevqt> </div> <div class="flex flex-col gap-2" data-astro-cid-yaogevqt> <label for="mensaje" class="text-secondary font-bold" data-astro-cid-yaogevqt>Mensaje</label> <textarea name="mensaje" id="mensaje" placeholder="Escríbenos tu mensaje" class="w-full h-32 border border-primary px-5 pt-4 rounded-xs outline-none" data-astro-cid-yaogevqt></textarea> </div> <button class="bg-primary text-white sm:flex items-center gap-2.5 btn after:bg-green py-3 px-6 flex justify-center hover:bg-secondary transition-all duration-300 ease-in-out cursor-pointer" data-astro-cid-yaogevqt>
Enviar
<span class="" data-astro-cid-yaogevqt> <i class="fa-solid fa-arrow-right" data-astro-cid-yaogevqt></i> </span> </button> </form> `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/components gegnerales/CampoContacto.astro", void 0);

const $$Contctanos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contactanos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPages", $$HeroPages, { "title": "Cont\xE1ctanos" })} ${maybeRenderHead()}<section class="flex flex-col justify-center items-center w-full"> <article class="flex flex-col justify-center items-center w-4/5 gap-7"> <p class="sm:text-xl text-2xs text-secondary">
Si deseas ponerte en contacto con nosotros, hacernos alguna pregunta o dejarnos un comentario para mejorar nuestro servicio, puedes hacerlo a través de los siguientes medios. También puedes escribirnos directamente a través de este formulario de contacto.
</p> <div class="flex w-full"> <div class="flex gap4 sm:m-12 mb-10 justify-center items-center w-full"> ${renderComponent($$result2, "CampoContacto", $$CampoContacto, {})} </div> </div> </article> <article class="flex flex-col justify-center items-center w-full gap-7"> <h1 class="sm:text-title text-xl font-bold text-secondary pb-7">
Cómo llegar a nosotros
</h1> <iframe class="w-full sm:h-[500px] h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4210.655315223264!2d-75.48718893803519!3d5.050248444008161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e47657786d86a8f%3A0x4a2bd5a37e31f3e6!2splaza%2070!5e0!3m2!1ses-419!2sco!4v1748440102040!5m2!1ses-419!2sco" width="600" height="600" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade">
      </iframe> </article> </section> ` })}`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/cont\xE1ctanos.astro", void 0);

const $$file = "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/contáctanos.astro";
const $$url = "/contáctanos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contctanos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Contctanos as $, _page as _ };
