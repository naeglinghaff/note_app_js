class Notecontroller {
  constructor(notelist) {
    this.notelistview = new Notelistview(notelist);
  }

  insertHTML() {
    let html = this.notelistview.viewNotesAsHTML();
    let app = document.getElementById('app');
    app.innerHTML = html;
    return html;
  }

  urlChangeDisplaysNoteOnWholePage() {

    let notecontroller = this;

    listenforEvent();

    function listenforEvent() {
      window.addEventListener("hashchange", getNoteDisplayOnPage);
    }

    function getNoteDisplayOnPage() {
      displayNote(fetchNoteById(window.location));
    }

    function fetchNoteById(url) {
      return url.hash.split("#")[1];
    }

    function displayNote(noteurl) {
      let noteid = noteurl.substring(noteurl.indexOf("/") + 1);
      let note = notecontroller.notelistview.notelist.notes[noteid];
      let list = document.getElementById('notes');
      list.innerHTML = notecontroller.notelistview.viewNotesAsHTML();
      let singlenoteview = new Singlenoteview(note);
      let div = document.getElementById('app');
      div.innerHTML = singlenoteview.getSingleNoteHTML();
    };
  }

  stopRefreshPageOnFormSubmit() {

    let notecontroller = this;
    listenForForm();

    function listenForForm() {
      let form = document.getElementById("text");
      form.addEventListener("submit", stopsSubmitMakesNewNote);
    }

    function stopsSubmitMakesNewNote() {
      event.preventDefault();
      let newnotetext = event.target.elements[0].value;
      notecontroller.notelistview.notelist.addNote(newnotetext);
    }
  };
}

notecontroller = new Notecontroller(new Notelist);
notecontroller.urlChangeDisplaysNoteOnWholePage();
notecontroller.stopRefreshPageOnFormSubmit();
notecontroller.insertHTML();
