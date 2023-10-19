export default function NavJS(e) {
  document
    .querySelectorAll(".Nav-div h1")

    .forEach((el) => {
      el.classList.remove("btn-dark");
    });
  e.target.classList.add("btn-dark");
}
