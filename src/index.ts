import { getFormData } from "./form";

const form = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = getFormData(form);
  console.log(data);
  const resultElement = document.querySelector("p");
  if (resultElement) {
    resultElement.textContent = data;
  }
});
