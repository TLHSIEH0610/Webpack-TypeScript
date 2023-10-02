export const getFormData = (form: HTMLFormElement) => {
  const inputs = form.querySelectorAll("input");
  let values = "";

  inputs.forEach((input) => {
    values += input.value;
  });
  return values;
};
