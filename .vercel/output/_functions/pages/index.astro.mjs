import { c as createComponent, h as renderHead, a as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, r as renderComponent, u as unescapeHTML, e as renderScript } from '../chunks/astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BvdJ5s_1.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$CheckInOut } from '../chunks/CheckInOut_VPo_ECq8.mjs';
import { g as getLatestposts } from '../chunks/wp_B_wWg3De.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">${renderHead()}</head> <section class="w-full h-[calc(100vh-80px)] mt-[-80px]" data-astro-cid-bbe6dxrz> <div class="swiper swiper-hero w-full h-full" data-astro-cid-bbe6dxrz> <div class="swiper-wrapper" data-astro-cid-bbe6dxrz> <div class=" swiper-slide w-full h-screen bg-cover bg-center" data-astro-cid-bbe6dxrz> <div class="herouno bg-cover bg-center flex items-end w-full h-full object-cover" data-astro-cid-bbe6dxrz></div> </div> <div class="swiper-slide w-full h-screen " data-astro-cid-bbe6dxrz> <div class="herodos bg-cover bg-center flex items-end w-full h-full object-cover" data-astro-cid-bbe6dxrz></div> </div> <div class="swiper-slide " data-astro-cid-bbe6dxrz> <div class="herotres bg-cover bg-center flex items-end w-full h-full object-cover" data-astro-cid-bbe6dxrz></div> </div> </div> <div class="swiper-button-prev" data-astro-cid-bbe6dxrz></div> <div class="swiper-button-next" data-astro-cid-bbe6dxrz></div> </div> </section> `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/Hero.astro", void 0);

const $$Bienvenida = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex justify-center mt-16 sm:h-auto h-full w-full" data-astro-cid-to4uttn6> <article class="flex flex-col justify-center items-center w-4/5" data-astro-cid-to4uttn6> <h2 class="uppercase sm:text-title text-xl text-center font-bold text-secondary" data-astro-cid-to4uttn6>Bienvenidos a canal inn</h2> <div class="flex sm:w-[50%] w-full h-full sm:mt-2 sm:translate-x-[10px] translate-x-[20px]" data-astro-cid-to4uttn6> <div class="flex sm:flex-row flex-col border-3 sm:m-12 m-6 border-primary sm:h-[500px] h-[570px] w-full" data-astro-cid-to4uttn6> <div class="
                    flex sm:flex-row flex-col 
                    sm:gap-20 gap-5 
                    border-y-24 sm:border-b-24 border-l-12 border-white bg-white
                    sm:translate-x-[-100px] translate-x-[-50px] 
                    my-7
                    sm:h-auto h-[1000px]" data-astro-cid-to4uttn6> <div class="sm:w-[600px] w-full sm:h-full h-[200px] sm:border-8 border-5 border-primary" data-astro-cid-to4uttn6> <div class="bgimage w-full h-full bg-cover bg-center" data-astro-cid-to4uttn6></div> </div> <div class="flex flex-col justify-center items-center sm:w-[70%] w-4/5 text-center text-secondary" data-astro-cid-to4uttn6> <h2 class="sm:text-title text-mtitle font-bold mb-8" data-astro-cid-to4uttn6>
Tu hospedaje acogedor, cómodo y bien ubicado en la ciudad
</h2> <p class="text-center sm:text-parrafo text-mparrafo" data-astro-cid-to4uttn6>
¿Buscas un lugar tranquilo, confortable y con excelente ubicación para tu estadía? Canal Inn Hostal es tu opción ideal. Te ofrecemos un ambiente relajado, perfecto para descansar y disfrutar al máximo de tu viaje
</p> </div> </div> </div> </div> </article> </section> `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/Bienvenida.astro", void 0);

const $$Astro$2 = createAstro();
const $$TarjetaAtractivos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TarjetaAtractivos;
  const { title, description, imageUrl, imgClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="flex sm:flex-row flex-col justify-center items-center sm:gap-14 gap-10 sm:mt-10 text-secondary sm:w-4/5 w-full" data-astro-cid-doastgu3> <article class="sm:w-1/2 sm:h-72 w-full h-[200px]" data-astro-cid-doastgu3> <div${addAttribute(`${imgClass} w-full h-full sm:mt-0 mt-7 bg-cover bg-center border-6 border-primary`, "class")} data-astro-cid-doastgu3></div> </article> <article class="sm:w-1/2 w-full text-secondary" data-astro-cid-doastgu3> <h3 class="uppercase font-bold  my-3 text-center sm:text-title text-mtitle" data-astro-cid-doastgu3> ${title} </h3> <p class="text-center sm:text-parrafo text-mparrafo" data-astro-cid-doastgu3> ${description} </p> </article> </section> `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/Atractivos/TarjetaAtractivos.astro", void 0);

const $$Atractivos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex sm:flex-row flex-col justify-center mt-10"> <article class="flex flex-col items-center justify-center w-4/5 m-auto"> <h2 class="uppercase sm:text-title text-mtitle font-bold text-secondary text-center">
Lugares atractivos ceranos
</h2> <div class="flex flex-col sm:mt-8 items-center justify-center"> ${renderComponent($$result, "TarjetaAtractivos", $$TarjetaAtractivos, { "title": "Explorar el Canal de Panam\xE1", "description": "A pocos minutos del hostal, puedes visitar las esclusas de Miraflores y aprender sobre la historia y funcionamiento de esta maravilla de la ingenier\xEDa.", "imgClass": "atractivouno" })} ${renderComponent($$result, "TarjetaAtractivos", $$TarjetaAtractivos, { "title": "Recorrer el Casco Antiguo", "description": "Sum\xE9rgete en la historia y cultura de Panam\xE1 paseando por sus calles coloniales, descubriendo iglesias, plazas y una vibrante vida nocturna.", "imgClass": "atractivodos" })} ${renderComponent($$result, "TarjetaAtractivos", $$TarjetaAtractivos, { "title": "Visitar el Biomuseo", "description": "Dise\xF1ado por Frank Gehry, este museo ofrece una experiencia fascinante sobre la biodiversidad de Panam\xE1 y su impacto en el mundo.", "imgClass": "atractivotres" })} ${renderComponent($$result, "TarjetaAtractivos", $$TarjetaAtractivos, { "title": "Disfrutar de la Calzada de Amador", "description": "Perfecta para caminar, andar en bicicleta o simplemente relajarse con vistas espectaculares del oc\xE9ano y la ciudad.", "imgClass": "atractivocuatro" })} </div> </article> </section> <!-- <style>
    .bgatractivouno {
        background-image: url('../assets/libs/imgs/1000343287-2.png');
        background-size: cover;
        background-position: center;
    }
</style> -->`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/Atractivos.astro", void 0);

const $$Astro$1 = createAstro();
const $$Testimoniodecliente = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimoniodecliente;
  const { title, punctuation, description, imageUrl, imageClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center justify-start swiper-slide w-full h-full" data-astro-cid-utozbh3t> <div class="flex flex-col justify-start items-center w-full h-1/2 mt-5" data-astro-cid-utozbh3t> <div data-astro-cid-utozbh3t> <div${addAttribute(`${imageClass} flex justify-center items-center sm:w-24 sm:h-24 w-18 h-18 bg-white rounded-full`, "class")} data-astro-cid-utozbh3t></div> </div> <div class="flex flex-col items-center justify-center sm:mt-10 mt-3 text-white sm:w-1/2 w-4/5" data-astro-cid-utozbh3t> <h1 class="text-center text-secondtitle" data-astro-cid-utozbh3t>${title}</h1> <h2 class="text-center sm:text-secondtitle text-mparrafo" data-astro-cid-utozbh3t>${punctuation}</h2> <p class="text-center italic sm:text-secondtitle text-mparrafo sm:pb-0 pb-6" data-astro-cid-utozbh3t>${description}</p> </div> </div> </div> `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/Testimoniodecliente.astro", void 0);

const $$Testimonios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">${renderHead()}</head> <section class="w-screen sm:h-1/2 h-auto mt-[80px] testimonioscover" data-astro-cid-2t7lomlc> <div class=" swiper testimonios w-full sm:h-full h-auto bg-secondary/70" data-astro-cid-2t7lomlc> <h1 class="uppercase font-bold text-white sm:text-title text-mtitle text-center sm:mt-12 mt-9 sm:w-full w-4/5 m-auto" data-astro-cid-2t7lomlc>
Referencia de nuestros clientes
</h1> <div class="swiper-wrapper" data-astro-cid-2t7lomlc> ${renderComponent($$result, "Testimoniodecliente", $$Testimoniodecliente, { "title": "Ideal para viajes cortos", "punctuation": "Puntuaci\xF3n: 10-10", "description": "El trato siempre tan amable y atento, siempre dispuestos a ayudar y colaborar entonces, incluso desde antes de realizar el viaje ya estaban pendientes del traslado de aeropuerto al hostal.", "imageUrl": "../../assets/libs/imgs/1000343281-2.png", "imageClass": "testimoniouno", "data-astro-cid-2t7lomlc": true })} ${renderComponent($$result, "Testimoniodecliente", $$Testimoniodecliente, { "title": "Ideal para viajes cortos", "punctuation": "Puntuaci\xF3n: 9-10", "description": "Excelente lugar para dormir y para pasar la noche, el trato es muy amable y el lugar es muy limpio. El desayuno es muy bueno y la atenci\xF3n es excelente.", "imageUrl": "../../assets/libs/imgs/1000343281-2.png", "imageClass": "testimoniodos", "data-astro-cid-2t7lomlc": true })} ${renderComponent($$result, "Testimoniodecliente", $$Testimoniodecliente, { "title": "Ideal para viajes cortos", "punctuation": "Puntuaci\xF3n: 8-10", "description": "Un lugar,muy atractivo para pasar el tiempo, el trato es muy amable y el lugar es muy limpio. El desayuno es muy bueno y la atenci\xF3n es excelente.", "imageUrl": "../../assets/libs/imgs/1000343281-2.png", "imageClass": "testimoniotres", "data-astro-cid-2t7lomlc": true })} ${renderComponent($$result, "Testimoniodecliente", $$Testimoniodecliente, { "title": "Ideal para viajes cortos", "punctuation": "Puntuaci\xF3n: 7-10", "description": "Espectacular para venir y salir, el trato es muy amable y el lugar es muy limpio. El desayuno es muy bueno y la atenci\xF3n es excelente.", "imageUrl": "../../assets/libs/imgs/1000343281-2.png", "imageClass": "testimoniocuatro", "data-astro-cid-2t7lomlc": true })} ${renderComponent($$result, "Testimoniodecliente", $$Testimoniodecliente, { "title": "Ideal para viajes cortos", "punctuation": "Puntuaci\xF3n: 6-10", "description": "Una luna de miel espectacular, el trato es muy amable y el lugar es muy limpio. El desayuno es muy bueno y la atenci\xF3n es excelente.", "imageUrl": "../../assets/libs/imgs/1000343281-2.png", "imageClass": "testimoniocinco", "data-astro-cid-2t7lomlc": true })} </div> <div class="swiper-pagination sm:mb-6 mb-3 sm:visible invisible" data-astro-cid-2t7lomlc></div> </div> </section> `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/Testimonios.astro", void 0);

const $$Astro = createAstro();
const $$EntradasIndexWordpress = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EntradasIndexWordpress;
  const { title, excerpt, featuredImage, slug, date } = Astro2.props;
  const postDate = new Date(date);
  const day = postDate.getDate();
  const months = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
  const monthAbbreviation = months[postDate.getMonth()];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col justify-start items-center w-full sm:h-full h-[600px]" data-astro-cid-ubteufuq> <article class="flex flex-col items-center justify-start gap-4 sm:w-full w-4/5 sm:h-auto h-full text-secondary" data-astro-cid-ubteufuq> <div class="group w-full h-[300px] object-cover overflow-hidden border-6 border-primary hover:border-secondary transition-all duration-500 relative cursor-pointer" data-astro-cid-ubteufuq> <a${addAttribute(`/post/${slug}`, "href")} class="block w-full h-full" data-astro-cid-ubteufuq> <img class="w-full h-full object-cover hover:scale-125 transition-all duration-500"${addAttribute(featuredImage, "src")} alt="featuredImage" data-astro-cid-ubteufuq> <div class="absolute top-0 left-0 w-full h-full bg-primary opacity-0 group-hover:opacity-50 transition-all duration-500" data-astro-cid-ubteufuq></div> <div class="absolute bottom-0 left-0 bg-primary text-white p-2 text-center" data-astro-cid-ubteufuq> <div id="dia" class="text-3xl font-bold px-3" data-astro-cid-ubteufuq>${day}</div> <div id="mes" class="text-2xs" data-astro-cid-ubteufuq>${monthAbbreviation}</div> </div> </a> </div> <div class="font-bold sm:text-title text-mtitle text-center text-secondary hover:text-primary transition-all duration-500 cursor-pointer" data-astro-cid-ubteufuq> <a${addAttribute(`/post/${slug}`, "href")} data-astro-cid-ubteufuq> <h1 data-astro-cid-ubteufuq>${title}</h1> </a> </div> <!-- <div class="sm:text-xl text-2xs text-justify" set:html={ excerpt }></div> --> <div class="excerp text-justify" style="font-size: clamp(0.8rem, 2vw, 1.2rem);" data-astro-cid-ubteufuq>${unescapeHTML(excerpt)}</div> <div class="flex justify-between w-full h-auto" data-astro-cid-ubteufuq> <a${addAttribute(`/post/${slug}`, "href")} class="font-bold text-secondary text-mparrafo uppercase hover:text-primary hover:ml-1 transition-all duration-500" data-astro-cid-ubteufuq>
Leer más...
</a> <a${addAttribute(`/post/${slug}`, "href")} data-astro-cid-ubteufuq> <i class="hover:text-primary hover:mr-1 transition-all duration-500 text-parrafo font-bold fa-solid fa-plus" data-astro-cid-ubteufuq></i> </a> </div> </article> </section> `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/EntradasIndexWordpress.astro", void 0);

const $$BlogIndex = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getLatestposts({ perPage: 3 });
  return renderTemplate`${maybeRenderHead()}<section class="flex sm:flex-row flex-col justify-center items-start mt-16 w-full sm:h-auto"> <article class="flex sm:flex-row flex-col sm:gap-16 gap-6 items-center sm:justify-start justify-start sm:w-4/5 h-full"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "EntradasIndexWordpress", $$EntradasIndexWordpress, { ...post })}`)} </article> </section>`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/BlogIndex.astro", void 0);

const title = "Inicio";
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "CheckInOut", $$CheckInOut, {})} ${renderComponent($$result2, "Bienvenida", $$Bienvenida, {})} ${renderComponent($$result2, "Atractivos", $$Atractivos, {})} ${renderComponent($$result2, "Testimonios", $$Testimonios, {})} ${renderComponent($$result2, "BlogIndex", $$BlogIndex, {})} ` })} ${renderScript($$result, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/index.astro", void 0);

const $$file = "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    title,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
