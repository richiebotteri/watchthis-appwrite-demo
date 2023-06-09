import { deleteMovieDocument } from "../api/requests/document/delete-document";

/**
 * Gets movie data attributes from "add movie" form by listening. It than converts the submitted data to a form data to be used in the API request.
 */
export function deleteMovie() {
   const deleteMovieBtnEl = document.querySelectorAll(".delete-btn");
   deleteMovieBtnEl.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", (event) => {
         const card = event.target.parentElement.parentElement;
         const validationMsgEl = event.target.parentElement.childNodes[5];
         const cardId = card.id;
         const validationClassName = validationMsgEl.classList[0];
         const validationClass = "." + validationClassName;
         deleteMovieDocument(cardId, validationClass);
      });
   });
}
