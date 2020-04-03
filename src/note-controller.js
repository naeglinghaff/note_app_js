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

    listenForForm();

    function listenForForm() {
      let form = document.getElementById("text");
      form.addEventListener("submit", stopsSubmit);
    }

    function stopsSubmit() {
      event.preventDefault();
      console.log(event);
      console.log(event.target.elements[0].value);
    }
  };
}

notecontroller = new Notecontroller(new Notelist);
notecontroller.urlChangeDisplaysNoteOnWholePage();
notecontroller.stopRefreshPageOnFormSubmit();
notecontroller.notelistview.notelist.addNote("hello");
notecontroller.notelistview.notelist.addNote("this should be a longer note to test that this can display text");
notecontroller.notelistview.notelist.addNote("hello again");
notecontroller.insertHTML();
