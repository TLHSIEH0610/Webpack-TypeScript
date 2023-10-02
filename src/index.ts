import { getFormData } from "./form";
import "./index.css";

const form = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = getFormData(form);
  const resultElement = document.querySelector("p");
  if (resultElement) {
    resultElement.textContent = data;
  }
});
