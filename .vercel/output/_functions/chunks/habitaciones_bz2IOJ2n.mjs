import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_BvdJ5s_1.mjs';
import { $ as $$HeroPages } from './HeroPages_uAxS9c5l.mjs';
import { $ as $$CheckInOut } from './CheckInOut_VPo_ECq8.mjs';
import { $ as $$BotomAction } from './BotomAction_CWvkBlvJ.mjs';
/* empty css                                */
import 'clsx';

const $$Astro$2 = createAstro();
const $$HabitacionCardL = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HabitacionCardL;
  const { title, description, imageUrl, bg, border, textColor, urlBotom, actionBotom, bgBotom } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`flex sm:flex-row flex-col justify-center items-center w-full ${bg}`, "class")} data-astro-cid-4wb3qrru> <article class="flex sm:flex-row flex-col justify-center items-center text-center sm:w-1/2 w-full" data-astro-cid-4wb3qrru> <div class="flex justify-center items-center sm:w-1/2 w-full sm:h-full sm:p-10" data-astro-cid-4wb3qrru> <div${addAttribute(`border-6 w-full sm:h-85 h-50 bg-cover bg-center ${border}`, "class")} data-astro-cid-4wb3qrru> <div${addAttribute(`${imageUrl} w-full h-full object-cover bg-center`, "class")} data-astro-cid-4wb3qrru></div> </div> </div> <div class="flex flex-col justify-center items-center sm:w-1/2 w-full h-full p-10" data-astro-cid-4wb3qrru> <h1${addAttribute(`sm:text-title text-mtitle font-bold mb-6 sm:w-4/5 w-full ${textColor}`, "class")} data-astro-cid-4wb3qrru> ${title} </h1> <p${addAttribute(`sm:text-parrafo text-mparrafo mb-6 ${textColor}`, "class")} data-astro-cid-4wb3qrru> ${description} </p> <div class="w-1/2" data-astro-cid-4wb3qrru> ${renderComponent($$result, "BotomAction", $$BotomAction, { "urlDestino": urlBotom, "value": actionBotom, "bg": bgBotom, "data-astro-cid-4wb3qrru": true })} </div> </div> </article> </section> `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/HabitacionCardL.astro", void 0);

const $$Astro$1 = createAstro();
const $$HabitacionCardR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HabitacionCardR;
  const { title, description, imageUrl, bg, border, textColor, urlBotom, actionBotom, bgBotom } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`flex sm:flex-row flex-col justify-center items-center w-full ${bg}`, "class")} data-astro-cid-shlrg3dw> <article class="flex sm:flex-row flex-col justify-center items-center text-center sm:w-1/2 w-full" data-astro-cid-shlrg3dw> <div class="flex flex-col justify-center items-center sm:w-1/2 w-full h-full p-10" data-astro-cid-shlrg3dw> <h1${addAttribute(`sm:text-title text-xl font-bold mb-6 sm:w-4/5 w-full ${textColor}`, "class")} data-astro-cid-shlrg3dw> ${title} </h1> <p${addAttribute(`sm:text-xl text-2xs mb-6 ${textColor}`, "class")} data-astro-cid-shlrg3dw> ${description} </p> <div class="w-1/2" data-astro-cid-shlrg3dw> ${renderComponent($$result, "BotomAction", $$BotomAction, { "urlDestino": urlBotom, "value": actionBotom, "bg": bgBotom, "data-astro-cid-shlrg3dw": true })} </div> </div> <div class="flex justify-center items-center sm:w-1/2 w-full sm:h-full sm:p-10" data-astro-cid-shlrg3dw> <div${addAttribute(`border-6 w-full sm:h-85 h-50 bg-cover bg-center ${border}`, "class")} data-astro-cid-shlrg3dw> <div${addAttribute(`${imageUrl} w-full h-full object-cover bg-center`, "class")} data-astro-cid-shlrg3dw></div> </div> </div> </article> </section> `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/HabitacionCardR.astro", void 0);

const $$Astro = createAstro();
const $$AmenidadesCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AmenidadesCard;
  const { imageUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex ms:flex-row flex-col justify-center items-center w-screen habitacionAmenidades" data-astro-cid-eiqptsnx> <article class="flex sm:flex-row flex-col justify-center items-center w-full h-full bg-secondary/80" data-astro-cid-eiqptsnx> <div class="flex sm:flex-row flex-col justify-center items-center mx-auto my-12 sm:w-1/2 w-4/5 h-full py-5" data-astro-cid-eiqptsnx> <div class="flex flex-col justify-center text-white text-center sm:w-1/2 w-full" data-astro-cid-eiqptsnx> <h1 class="sm:text-title text-mtitle font-bold mb-8 sm:w-full w-full m-auto sm:mb-0" data-astro-cid-eiqptsnx>
Comodidades que marcan la diferencia
</h1> <ul class="flex flex-col sm:text-parrafo text-mparrafo sm:w-full w-full m-auto text-start ml-5 sm:mb-0 mb-12" data-astro-cid-eiqptsnx> <li data-astro-cid-eiqptsnx>Piscina al aire libre para refrescarte en cualquier momento</li> <li data-astro-cid-eiqptsnx>Jardín y terraza donde puedes relajarte o leer un buen libro</li> <li data-astro-cid-eiqptsnx>Sala común para compartir o descansar</li> <li data-astro-cid-eiqptsnx>Estacionamiento privado sin costo adicional</li> <li data-astro-cid-eiqptsnx>Pet friendly and gay friendly </li> <li data-astro-cid-eiqptsnx>Libre de humo (prohibido fumar)</li> <li data-astro-cid-eiqptsnx>Instalaciones con excelente limpieza</li> <li data-astro-cid-eiqptsnx>Transporte al aeropuerto disponible por $30 USD (requiere solicitud previa)</li> </ul> </div> <div class="flex flex-col gap-12 sm:w-1/2 w-full items-center" data-astro-cid-eiqptsnx> <div class="border-6 border-primary w-90 h-48 bg-cover bg-center" data-astro-cid-eiqptsnx> <div class="amenidadUno w-full h-full object-cover bg-center" data-astro-cid-eiqptsnx></div> </div> <div class="border-6 border-primary w-90 h-48 bg-cover bg-center" data-astro-cid-eiqptsnx> <div class="amenidadDos w-full h-full object-cover bg-center" data-astro-cid-eiqptsnx></div> </div> <!-- <div class="border-6 border-primary w-80 h-48 bg-cover bg-center">
                    <div class="amenidadTres w-full h-full object-cover bg-center"></div>
                </div> --> </div> </div> </article> </section> `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/AmenidadesCard.astro", void 0);

const $$Habitaciones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Habitaciones" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPages", $$HeroPages, { "title": "Habitaciones" })} ${maybeRenderHead()}<div class="mb-22"> ${renderComponent($$result2, "CheckInOut", $$CheckInOut, {})} </div> <div class="hidden md:block"> ${renderComponent($$result2, "HabitacionCardL", $$HabitacionCardL, { "title": "Habitaci\xF3n Sencilla", "description": "Las habitaciones, sencillas y con una decoraci\xF3n sobria, ofrecen wifi gratis, aire acondicionado y ba\xF1os privados con ducha.", "imageUrl": "habitacionSencilla", "bg": "bg-primary", "border": "border-secondary", "textColor": "text-white", "urlBotom": "cont\xE1ctanos", "actionBotom": "Reservar", "bgBotom": "secondary" })} ${renderComponent($$result2, "HabitacionCardR", $$HabitacionCardR, { "title": "Habitaci\xF3n Doble", "description": "Las habitaciones, sencillas y con una decoraci\xF3n sobria, ofrecen wifi gratis, aire acondicionado y ba\xF1os privados con ducha.", "imageUrl": "habitacionDoble", "bg": "bg-secondary", "border": "border-primary", "textColor": "text-white", "urlBotom": "cont\xE1ctanos", "actionBotom": "Reservar", "bgBotom": "primary" })} ${renderComponent($$result2, "HabitacionCardL", $$HabitacionCardL, { "title": "Habitaci\xF3n Triple", "description": "Las habitaciones, sencillas y con una decoraci\xF3n sobria, ofrecen wifi gratis, aire acondicionado y ba\xF1os privados con ducha.", "imageUrl": "habitacionTriple", "bg": "#e5dfcb", "border": "border-primary", "textColor": "text-secondary", "urlBotom": "cont\xE1ctanos", "actionBotom": "Reservar", "bgBotom": "secondary" })} </div> <div class="md:hidden"> ${renderComponent($$result2, "HabitacionCardL", $$HabitacionCardL, { "title": "Habitaci\xF3n Sencilla", "description": "Las habitaciones, sencillas y con una decoraci\xF3n sobria, ofrecen wifi gratis, aire acondicionado y ba\xF1os privados con ducha.", "imageUrl": "habitacionSencilla", "bg": "bg-primary", "border": "border-secondary", "textColor": "text-white", "urlBotom": "/cont\xE1ctanos", "actionBotom": "Reservar", "bgBotom": "secondary" })} ${renderComponent($$result2, "HabitacionCardL", $$HabitacionCardL, { "title": "Habitaci\xF3n Doble", "description": "Las habitaciones, sencillas y con una decoraci\xF3n sobria, ofrecen wifi gratis, aire acondicionado y ba\xF1os privados con ducha.", "imageUrl": "habitacionDoble", "bg": "bg-secondary", "border": "border-primary", "textColor": "text-white", "urlBotom": "/cont\xE1ctanos", "actionBotom": "Reservar", "bgBotom": "primary" })} ${renderComponent($$result2, "HabitacionCardL", $$HabitacionCardL, { "title": "Habitaci\xF3n Triple", "description": "Las habitaciones, sencillas y con una decoraci\xF3n sobria, ofrecen wifi gratis, aire acondicionado y ba\xF1os privados con ducha.", "imageUrl": "habitacionTriple", "bg": "#e5dfcb", "border": "border-primary", "textColor": "text-secondary", "urlBotom": "/cont\xE1ctanos", "actionBotom": "Reservar", "bgBotom": "secondary" })} </div> ${renderComponent($$result2, "AmenidadesCard", $$AmenidadesCard, { "imageUrl": "habitacionAmenidades" })} ` })}`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/habitaciones.astro", void 0);

const $$file = "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/habitaciones.astro";
const $$url = "/habitaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Habitaciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Habitaciones as $, _page as _ };
