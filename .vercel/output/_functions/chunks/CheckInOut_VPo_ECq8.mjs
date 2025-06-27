import { c as createComponent, m as maybeRenderHead, e as renderScript, a as renderTemplate } from './astro/server_BRWVHBW9.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                */

const $$CheckInOut = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mt-16 w-full" data-astro-cid-fyvchtqe> <article class="flex flex-col m-auto items-center w-4/5" data-astro-cid-fyvchtqe> <h1 class="uppercase text-title text-secondary font-bold text-center" data-astro-cid-fyvchtqe>
Consulta tu disponibilidad
</h1> <div class="flex items-center justify-center sm:w-4/5 w-full" data-astro-cid-fyvchtqe> <div class="flex md:flex-row flex-col sm:w-auto w-full sm:h-30 h-full sm:mt-16 mt-8 bg-primary items-center justify-center sm:gap-20 mx-10px" data-astro-cid-fyvchtqe> <form class="flex sm:flex-row flex-col items-center justify-center sm:gap-20 gap-5 my-12 sm:my-0 sm:ml-10" data-astro-cid-fyvchtqe> <div class="flex flex-col items-center justify-center gap-2" data-astro-cid-fyvchtqe> <div class="flex justify-center items-center gap-3" data-astro-cid-fyvchtqe> <i class="fa-solid fa-person-walking-arrow-right text-white text-mparrafo" data-astro-cid-fyvchtqe></i> <label for="checkin" class="text-white text-mparrafo" data-astro-cid-fyvchtqe>
Check In
</label> </div> <input id="checkin" type="date" name="check-in" value="" min="today" class="btn-checkinout text-secondary" required data-astro-cid-fyvchtqe> </div> <div class="flex flex-col items-center justify-center gap-2" data-astro-cid-fyvchtqe> <div class="flex justify-center items-center gap-3" data-astro-cid-fyvchtqe> <i class="fa-solid fa-person-walking-arrow-loop-left text-white text-mparrafo" data-astro-cid-fyvchtqe></i> <label for="checkout" class="text-white text-mparrafo" data-astro-cid-fyvchtqe>
Check Out
</label> </div> <input id="checkout" type="date" name="check-out" value="" min="today" class="btn-checkinout text-secondary" required data-astro-cid-fyvchtqe> </div> <div class="flex flex-col items-center justify-center gap-2" data-astro-cid-fyvchtqe> <div class="flex justify-center items-center gap-3" data-astro-cid-fyvchtqe> <i class="fa-solid fa-bed text-white text-mparrafo" data-astro-cid-fyvchtqe></i> <label for="pax" class="text-white text-mparrafo" data-astro-cid-fyvchtqe>
Huespedes
</label> </div> <select name="pax" id="pax" class="btn-checkinout text-secondary" required data-astro-cid-fyvchtqe> <option value="1" hidden data-astro-cid-fyvchtqe>
Personas
</option> <option value="1" data-astro-cid-fyvchtqe>1 Persona</option> <option value="2" data-astro-cid-fyvchtqe>2 Personas</option> <option value="3" data-astro-cid-fyvchtqe>3 Personas</option> <option value="4" data-astro-cid-fyvchtqe>4 Personas</option> <option value="5" data-astro-cid-fyvchtqe>5 Personas</option> </select> </div> </form> <button id="consult" onclick="dialog.showModal()" class="sm:mb-0 mb-14 sm:mr-10" data-astro-cid-fyvchtqe>
Consultar
</button> </div> </div> </article> <article id="blackgroundDialog" class="invisible bg-black/70 flex justify-center items-center w-screen h-screen top-0 left-0 z-1000 fixed transition-all duration-50 ease-in-out" data-astro-cid-fyvchtqe> <dialog id="dialog" class=" bg-white sm:w-1/2 w-full z-50 fixed justify-center items-center pt-9 m-auto transition-all duration-500 ease-in-out" data-astro-cid-fyvchtqe> <div class="flex justify-center items-center" data-astro-cid-fyvchtqe> <div class="container-dialog flex flex-col items-center sm:w-4/5 h-auto" data-astro-cid-fyvchtqe> <div class="pagination flex justify-center itmes-start gap-4" data-astro-cid-fyvchtqe> <div id="circle-active" class="circle-active circles" data-astro-cid-fyvchtqe> <h1 data-astro-cid-fyvchtqe>1</h1> </div> <div id="separatorPagination" class="circle-inactive border-1 border-primary h-0 w-[100px] mt-4" data-astro-cid-fyvchtqe></div> <div id="circle-inactive" class="circle-inactive circles" data-astro-cid-fyvchtqe> <h1 data-astro-cid-fyvchtqe>2</h1> </div> </div> <div class="pages pageOne dialog-active mt-8" data-astro-cid-fyvchtqe> <div class="flex flex-col items-center gap-7 w-4/5 mx-8" data-astro-cid-fyvchtqe> <h1 class="text-center font-bold text-[24px] mx-8" data-astro-cid-fyvchtqe>
Tus datos de reserva son los siguiente:
</h1> </div> <div class="flex flex-col items-center gap-7 mt-7" data-astro-cid-fyvchtqe> <div class="flex flex-col justify-center items-center gap-3" data-astro-cid-fyvchtqe> <div class="flex justify-center items-center gap-3" data-astro-cid-fyvchtqe> <i class="fa-solid fa-person-walking-arrow-right text-secondary text-parrafo" data-astro-cid-fyvchtqe></i> <p class="text-secondary font-bold text-parrafo" data-astro-cid-fyvchtqe>
Fecha de ingreso:
</p> </div> <span id="spanCheckIn" class="text-secondary text-secondtitle" data-astro-cid-fyvchtqe></span> </div> <div class="flex flex-col justify-center items-center gap-3" data-astro-cid-fyvchtqe> <div class="flex justify-center items-center gap-3" data-astro-cid-fyvchtqe> <i class="fa-solid fa-person-walking-arrow-loop-left text-secondary text-parrafo" data-astro-cid-fyvchtqe></i> <p class="text-secondary font-bold text-parrafo" data-astro-cid-fyvchtqe>
Fecha de salida:
</p> </div> <span id="spanChekOut" class="text-secondary text-secondtitle" data-astro-cid-fyvchtqe></span> </div> <div class="flex flex-col justify-center items-center gap-3" data-astro-cid-fyvchtqe> <div class="flex justify-center items-center gap-3" data-astro-cid-fyvchtqe> <i class="fa-solid fa-bed text-secondary text-parrafo" data-astro-cid-fyvchtqe></i> <p class="text-secondary font-bold text-parrafo" data-astro-cid-fyvchtqe>
Cantidad de huspedes:
</p> </div> <div class="flex items-center gap-2" data-astro-cid-fyvchtqe> <span id="spanPax" class="text-secondary text-secondtitle" data-astro-cid-fyvchtqe></span> <p class="text-secondary text-secondtitle" data-astro-cid-fyvchtqe>
Personas
</p> </div> </div> <div class="container-botones flex sm:flex-row flex-col justify-center items-center gap-7 mb-10 w-4/5 mx-8" data-astro-cid-fyvchtqe> <button id="closePageOne" onclick="dialog.close()" data-astro-cid-fyvchtqe>Regresar</button> <button class="nextPage" data-astro-cid-fyvchtqe>Siguiente</button> </div> </div> </div> <div class="pages PageTwo dialog-inactive mt-8 mx-8" data-astro-cid-fyvchtqe> <h1 class="text-center font-bold text-[24px]" data-astro-cid-fyvchtqe>
Tu valor a pagar es el siguiente:
</h1> <div class="flex flex-col items-center gap-7 mt-7" data-astro-cid-fyvchtqe> <div class="flex flex-col justify-center items-center gap-3" data-astro-cid-fyvchtqe> <div class="flex justify-center items-center gap-3" data-astro-cid-fyvchtqe> <i class="fa-solid fa-bed text-secondary text-parrafo" data-astro-cid-fyvchtqe></i> <p class="text-secondary font-bold text-parrafo" data-astro-cid-fyvchtqe>
Valor por hospedaje total:
</p> </div> <p class="text-secondary text-secondtitle" data-astro-cid-fyvchtqe>
$
<span id="spanCost" class="text-secondary text-secondtitle" data-astro-cid-fyvchtqe></span>
USD
</p> </div> <div class="flex flex-col justify-center items-center gap-3" data-astro-cid-fyvchtqe> <div class="flex justify-center items-center gap-3" data-astro-cid-fyvchtqe> <i class="fa-solid fa-calculator text-secondary text-parrafo" data-astro-cid-fyvchtqe></i> <p class="text-secondary font-bold text-parrafo" data-astro-cid-fyvchtqe>
Valor por impuestos:
</p> </div> <p class="text-secondary text-secondtitle" data-astro-cid-fyvchtqe>
$
<span id="spanTax" class="text-secondary text-secondtitle" data-astro-cid-fyvchtqe></span>
USD
</p> </div> <div class="flex flex-col justify-center items-center gap-3" data-astro-cid-fyvchtqe> <div class="flex justify-center items-center gap-3" data-astro-cid-fyvchtqe> <i class="fa-solid fa-circle-dollar-to-slot text-secondary text-parrafo" data-astro-cid-fyvchtqe></i> <p class="text-secondary font-bold text-parrafo" data-astro-cid-fyvchtqe>
Valor total a pagar:
</p> </div> <p class="text-secondary text-secondtitle" data-astro-cid-fyvchtqe>
$
<span id="spanTotal" class="text-secondary text-secondtitle" data-astro-cid-fyvchtqe></span>
USD
</p> </div> <div class="container-botones flex justify-center items-center gap-7 mb-10" data-astro-cid-fyvchtqe> <button id="sendReservation" onclick="dialog.close()" class="sentReservation" data-astro-cid-fyvchtqe>Realizar Reserva</button> </div> </div> </div> </div> </div> </dialog> </article> </section> ${renderScript($$result, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/CheckInOut.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/camil/Documents/WEB-DE-CLIENTES/CANAL-INN/DEPLOY/canalinnpruebas-main - en limpio/src/components/CheckInOut.astro", void 0);

export { $$CheckInOut as $ };
