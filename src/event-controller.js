class Eventcontroller {

  constructor() {

  }

  listenforFormEvent() {
    let form = document.getElementById("text");
    form.addEventListener("submit", notecontroller.stopsSubmitMakesNewNote);
  }

  listenforHashEvent() {
    window.addEventListener("hashchange", notecontroller.getNoteDisplayOnPage);
  }
}
