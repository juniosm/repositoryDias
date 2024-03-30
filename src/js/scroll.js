export default function Scroll() {
   const section = document.querySelector(".make");
   const campScroll = document.querySelector(".list-response");

   console.log(section.scrollHeight);

   section.addEventListener("click", e => {
      console.log(e);
   });
}
