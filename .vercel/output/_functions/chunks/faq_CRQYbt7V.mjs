import { c as createComponent, b as createAstro, m as maybeRenderHead, e as renderScript, a as renderTemplate, r as renderComponent } from './astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_BvdJ5s_1.mjs';
import { $ as $$HeroPages } from './HeroPages_uAxS9c5l.mjs';
import 'clsx';
/* empty css                       */

const $$Astro = createAstro();
const $$CardFaq = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardFaq;
  const { question, answer } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container flex justify-center items-center w-full h-auto" data-astro-cid-elx6fcj3> <div class="faqs sm:w-1/2 w-full h-auto border-b-2 border-primary" data-astro-cid-elx6fcj3> <div class="faq flex flex-col gap-7" data-astro-cid-elx6fcj3> <div class="head flex justify-between gap-7 items-center" data-astro-cid-elx6fcj3> <span class="question text-primary text-title hover:text-secondary transition-all duration-500 cursor-pointer" data-astro-cid-elx6fcj3> ${question} </span> <i class="i fa-solid fa-arrow-down text-primary text-parrafo hover:text-secondary transition-all duration-500 cursor-pointer" data-astro-cid-elx6fcj3></i> </div> <div class="content text-secondary overflow-hidden transition-all duration-500" data-astro-cid-elx6fcj3> <p class="answer inactive sm:text-parrafo text-parrafo mb-7" data-astro-cid-elx6fcj3> ${answer} </p> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/components gegnerales/CardFaq.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/components gegnerales/CardFaq.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "faq" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPages", $$HeroPages, { "title": "Preguntas Frecuentes" })} ${maybeRenderHead()}<section class="w-full"> <article class="flex flex-col justify-center items-center w-4/5 m-auto gap-7"> ${renderComponent($$result2, "Cardfaq", $$CardFaq, { "question": "\xBFCu\xE1les son los servicios incluidos en la tarifa de hospedaje?", "answer": "El hostal ofrece wifi gratis, traslado al aeropuerto, parking privado gratuito, habitaciones familiares, habitaciones sin humo y terraza." })} ${renderComponent($$result2, "Cardfaq", $$CardFaq, { "question": "\xBFEl hostal ofrece traslado al aeropuerto?", "answer": "S\xED, Canal Inn Panam\xE1 ofrece servicio de traslado al aeropuerto, aunque puede ser de pago." })} ${renderComponent($$result2, "Cardfaq", $$CardFaq, { "question": "\xBFHay opciones de habitaciones familiares o individuales?", "answer": "S\xED, el hostal cuenta con habitaciones familiares y habitaciones individuales." })} ${renderComponent($$result2, "Cardfaq", $$CardFaq, { "question": "\xBFEl desayuno est\xE1 incluido en la estad\xEDa?", "answer": "Seg\xFAn algunas rese\xF1as, el hostal ofrece desayuno, pero no est\xE1 claro si est\xE1 incluido en todas las tarifas." })} ${renderComponent($$result2, "Cardfaq", $$CardFaq, { "question": "\xBFCu\xE1les son los horarios de check-in y check-out?", "answer": "La informaci\xF3n sobre los horarios espec\xEDficos de check-in y check-out no est\xE1 detallada en los enlaces disponibles, pero generalmente los hostales permiten el check-in en la tarde y el check-out en la ma\xF1ana." })} ${renderComponent($$result2, "Cardfaq", $$CardFaq, { "question": "\xBFEl hostal cuenta con estacionamiento gratuito?", "answer": "S\xED, Canal Inn Panam\xE1 ofrece parking privado gratuito para sus hu\xE9spedes." })} ${renderComponent($$result2, "Cardfaq", $$CardFaq, { "question": "\xBFSe permite el ingreso de mascotas?", "answer": "No hay informaci\xF3n clara sobre si se permiten mascotas en el hostal." })} ${renderComponent($$result2, "Cardfaq", $$CardFaq, { "question": "\xBFQu\xE9 lugares tur\xEDsticos est\xE1n cerca del hostal?", "answer": "Canal Inn Panam\xE1 est\xE1 cerca de Puente de Las Am\xE9ricas, Museo del Canal Interoce\xE1nico de Panam\xE1, Ancon Hill, Estadio Maracan\xE1 y Centro comercial Albrook." })} ${renderComponent($$result2, "Cardfaq", $$CardFaq, { "question": "\xBFHay conexi\xF3n WiFi gratuita en todas las habitaciones?", "answer": "S\xED, el hostal ofrece WiFi gratuito en todas las habitaciones." })} </article> </section> ` })}`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/faq.astro", void 0);

const $$file = "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Faq as $, _page as _ };
