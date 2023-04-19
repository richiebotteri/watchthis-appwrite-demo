import { generateId } from "./generate-id";

export function register() {
   const registerFormEl = document.querySelector("#register-form");
   registerFormEl.addEventListener("submit", (event) => {
      event.preventDefault();
      const registerSubmission = event.target;
      const registerFormData = new FormData(registerSubmission);
      const formDataObj = Object.fromEntries(registerFormData);
      const id = generateId();
      Object.defineProperty(formDataObj, "userId", {
         value: id,
         enumerable: true,
      });
   });
}
