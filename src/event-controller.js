class Eventcontroller {

  constructor() {
    this.data;
  }

  listenforFormEvent() {
    let form = document.getElementById("text");
    form.addEventListener("submit", extractFormData);
    let eventcontroller = this;

    function extractFormData() {
      event.preventDefault();
      eventcontroller.data = event.target.elements[0].value;
    }
    return eventcontroller.data;
  }

  listenforHashEvent() {
    window.addEventListener("hashchange", notecontroller.getNoteDisplayOnPage);
  }
}
