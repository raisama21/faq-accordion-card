const accordionHeader = document.getElementsByClassName("accordion-header");

for (let i = 0; i < accordionHeader.length; i++) {
  accordionHeader[i].addEventListener("click", () => {
    accordionHeader[i].classList.toggle("active");
    const collapse = accordionHeader[i].nextElementSibling;
    if (collapse.style.display === "block") {
      collapse.style.display = "none";
      collapse.style.height = null;
    } else {
      collapse.style.display = "block";
      collapse.style.height = collapse.scrollHeight + "px";
    }
  });
}
