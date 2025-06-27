import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_BvdJ5s_1.mjs';
import { $ as $$HeroPages } from './HeroPages_uAxS9c5l.mjs';
import { $ as $$BotomAction } from './BotomAction_CWvkBlvJ.mjs';
/* empty css                            */

const $$Astro = createAstro();
const $$TarjetaBienvenida = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TarjetaBienvenida;
  const { titleCard, titleSection, BtUrl, p1, p2, BtValue, BtBg } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex m-auto justify-center sm:w-[50%] w-4/5 h-auto sm:mt-2 sm:translate-x-[10px] translate-x-[20px]" data-astro-cid-3qvert7n> <article class="flex sm:flex-row flex-col border-3 sm:m-12 m-6 border-primary sm:h-[500px] h-[600px] w-full" data-astro-cid-3qvert7n> <div class="
            flex sm:flex-row flex-col 
            sm:gap-20 gap-5 
            border-y-24 sm:border-b-24 border-l-12 border-white bg-white
            sm:translate-x-[-100px] translate-x-[-50px] 
            my-7
            sm:h-auto h-[1000px]" data-astro-cid-3qvert7n> <div class="sm:w-[600px] w-full sm:h-full h-[200px] sm:border-8 border-5 border-primary" data-astro-cid-3qvert7n> <div class="bgimage w-full h-full bg-cover bg-center" data-astro-cid-3qvert7n></div> </div> <div class="flex flex-col justify-center items-center sm:w-[70%] w-4/5 text-center text-secondary" data-astro-cid-3qvert7n> <h2 class="sm:text-title text-mtitle font-bold mb-8" data-astro-cid-3qvert7n> ${titleCard} </h2> <p class="text-center sm:text-parrafo text-mparrafo" data-astro-cid-3qvert7n> ${p1} </p> <p class="text-center sm:text-parrafo text-mparrafo" data-astro-cid-3qvert7n> ${p2} </p> <div class="w-{40%}" data-astro-cid-3qvert7n> ${renderComponent($$result, "BotomAction", $$BotomAction, { "urlDestino": BtUrl, "value": BtValue, "bg": BtBg, "data-astro-cid-3qvert7n": true })} </div> </div> </div> </article> </section> `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/components gegnerales/TarjetaBienvenida.astro", void 0);

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nosotros", "data-astro-cid-noeej2nj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroPages", $$HeroPages, { "title": "Nosotros", "data-astro-cid-noeej2nj": true })} ${renderComponent($$result2, "TarjetaBienvenida", $$TarjetaBienvenida, { "titleCard": "Bienvenido a Canal Inn Hostal Panam\xE1", "p1": "Tu hospedaje acogedor, c\xF3modo y bien ubicado en la ciudad", "p2": "\xBFBuscas un lugar tranquilo, confortable y con excelente ubicaci\xF3n para tu estad\xEDa? Canal Inn Hostal es tu opci\xF3n ideal. Te ofrecemos un ambiente relajado, perfecto para descansar y disfrutar al m\xE1ximo de tu viaje.", "BtUrl": "/cont\xE1ctanos", "BtValue": "Reservar", "BtBg": "secondary", "data-astro-cid-noeej2nj": true })} ${maybeRenderHead()}<section class="flex sm:flex-row flex-col justify-center items-center w-full -mt-2 mb-12" data-astro-cid-noeej2nj> <article class="flex sm:flex-row flex-col justify-center items-center text-center sm:w-1/2 w-full" data-astro-cid-noeej2nj> <div class="flex flex-col justify-center items-center sm:w-full w-full h-full py-10" data-astro-cid-noeej2nj> <h1 class="sm:text-title text-mtitle font-bold text-primary mb-4 sm:w-4/5 w-full" data-astro-cid-noeej2nj>
Tu descanso comienza aquí
</h1> <p class="text-secondary sm:text-parrafo text-mparrafo mb-6" data-astro-cid-noeej2nj>
Contamos con habitaciones cómodas y climatizadas, equipadas con:
</p> <p class="sm:text-parrafo text-mparrafo" data-astro-cid-noeej2nj>
Aire acondicionado
</p> <p class="sm:text-parrafo text-mparrafo" data-astro-cid-noeej2nj>
Baño privado
</p> <p class="sm:text-parrafo text-mparrafo" data-astro-cid-noeej2nj>
Wi-Fi gratuito en todo el alojamiento
</p> <!-- <div class="bg-primary w-full py-6">
                    <div class="flex flex-col sm:gap-6 gap-4 px-5 py-2 text-center sm:text-parrafo text-2xs text-white">
                        <p>
                            Aire acondicionado
                        </p>
                    
                        <p>
                            Baño privado
                        </p>

                        <p>
                            Wi-Fi gratuito en todo el alojamiento
                        </p>
                    </div>
                </div> --> <div class="mt-7" data-astro-cid-noeej2nj> ${renderComponent($$result2, "BotomAction", $$BotomAction, { "urlDestino": "/habitaciones", "value": "Ver habitaciones", "bg": "secondary", "data-astro-cid-noeej2nj": true })} </div> </div> <div class="flex justify-center items-center sm:w-full w-full h-full" data-astro-cid-noeej2nj> <div class="border-6 border-primary w-full sm:h-85 h-40 bg-cover bg-center" data-astro-cid-noeej2nj> <div class="nosotrosuno w-full h-full object-cover bg-center" data-astro-cid-noeej2nj></div> </div> </div> </article> </section> <div class="flex justify-center w-screen bg-secondary" data-astro-cid-noeej2nj> <section class="flex items-center justify-center bg-secondary" data-astro-cid-noeej2nj> <article class="flex flex-col items-center text-white text-center py-15 sm:w-full w-4/5" data-astro-cid-noeej2nj> <h1 class="sm:text-title text-mtitle sm:mb-15 mb-7" data-astro-cid-noeej2nj>
Comodidades que marcan la diferencia
</h1> <div class="flex sm:flex-row flex-col justify-center gap-16 sm:text-parrafo text-mparrafo sm:w-[75%] w-4/5" data-astro-cid-noeej2nj> <ul class="text-start flex flex-col" data-astro-cid-noeej2nj> <li data-astro-cid-noeej2nj>Piscina al aire libre para refrescarte en cualquier momento</li> <li data-astro-cid-noeej2nj>Jardín y terraza donde puedes relajarte o leer un buen libro</li> <li data-astro-cid-noeej2nj>Sala común para compartir o descansar</li> <li data-astro-cid-noeej2nj>Estacionamiento privado sin costo adicional</li> <li data-astro-cid-noeej2nj>Pet friendly and gay friendly </li> <li data-astro-cid-noeej2nj>Libre de humo (prohibido fumar)</li> <li data-astro-cid-noeej2nj>Instalaciones con excelente limpieza</li> <li data-astro-cid-noeej2nj>Transporte al aeropuerto disponible por $30 USD (requiere solicitud previa)</li> </ul> <div class="sm:w-[600px] w-full sm:h-auto h-auto sm:border-8 border-5 border-primary" data-astro-cid-noeej2nj> <div class="bgimage-amenidades w-full h-full bg-cover bg-center" data-astro-cid-noeej2nj></div> </div> </div> </article> </section> </div> <section class="flex sm:flex-row flex-col justify-center items-center w-full bg-[#e5dfcb]" data-astro-cid-noeej2nj> <article class="flex sm:flex-row flex-col justify-center items-center text-center sm:w-1/2 w-full" data-astro-cid-noeej2nj> <div class="flex justify-center items-center sm:w-1/2 w-full h-full sm:py-10 px-10" data-astro-cid-noeej2nj> <div class="border-6 border-primary w-full h-85 bg-cover bg-center" data-astro-cid-noeej2nj> <div class="nosotrosdos w-full h-full object-cover bg-center" data-astro-cid-noeej2nj></div> </div> </div> <div class="flex flex-col justify-center items-center sm:w-1/2 w-full h-full py-10 sm:mt-0 mt-8" data-astro-cid-noeej2nj> <h1 class="sm:text-title text-mtitle font-bold text-secondary mb-4 sm:w-4/5 w-full" data-astro-cid-noeej2nj>
Ubicación conveniente para moverte con facilidad
</h1> <p class="text-secondary sm:text-parrafo text-mparrafo mb-6" data-astro-cid-noeej2nj>
Estamos situados en una zona estratégica, con fácil acceso al transporte público y a corta distancia de varios puntos clave de la ciudad: atracciones, restaurantes, zonas comerciales y más.
</p> </div> </article> </section> <section class="flex justify-center items-center w-full bg-[#cabf96]" data-astro-cid-noeej2nj> <article class="flex sm:flex-row flex-col justify-center items-center text-center sm:w-1/2 w-full" data-astro-cid-noeej2nj> <div class="flex flex-col justify-center items-center sm:w-1/2 w-full h-full p-10" data-astro-cid-noeej2nj> <h1 class="sm:text-title text-mtitle font-bold text-secondary mb-6 sm:w-full w-4/5" data-astro-cid-noeej2nj>
Ideal para cualquier tipo de viajero
</h1> <p class="text-secondary sm:text-parrafo text-mparrafo mb-6" data-astro-cid-noeej2nj>
Ya sea que viajes por placer, negocios o simplemente busques un lugar tranquilo para desconectar, Canal Inn Hostal Panamá es tu punto de partida perfecto.
</p> <span class="text-secondary font-bold sm:text-parrafo text-mparrafo mb-6" data-astro-cid-noeej2nj>
Haz tu reserva hoy y prepárate para una experiencia cómoda y sin complicaciones
</span> <div class="mt-5" data-astro-cid-noeej2nj> ${renderComponent($$result2, "BotomAction", $$BotomAction, { "urlDestino": "/cont\xE1ctanos", "value": "Reservar", "bg": "secondary", "data-astro-cid-noeej2nj": true })} </div> </div> <div class="flex justify-center items-center sm:w-1/2 w-full h-full sm:p-10 px-10 pb-10" data-astro-cid-noeej2nj> <div class="border-6 border-secondary w-full h-85 bg-cover bg-center" data-astro-cid-noeej2nj> <div class="nosotrostres w-full h-full object-cover bg-center" data-astro-cid-noeej2nj></div> </div> </div> </article> </section> <section class="flex justify-center items-center w-full bg-secondary" data-astro-cid-noeej2nj> <article class="flex justify-center items-center sm:w-full w-4/5 py-12" data-astro-cid-noeej2nj> <h1 class="sm:w-1/2 w-full text-center font-bold text-title text-primary" data-astro-cid-noeej2nj>
¡En Canal Inn Hostal, te esperamos con los brazos abiertos!
</h1> </article> </section> ` })} `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/nosotros.astro", void 0);

const $$file = "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Nosotros,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Nosotros as $, _page as _ };
