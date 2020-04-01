class Notecontroller {
  constructor(notelist) {
    this.notelistview = new Notelistview(notelist);
  }

  insertHTML() {
    let html = this.notelistview.viewNotesAsHTML();
    let app = document.getElementById('app');
    app.innerHTML = html;
  }
}

notecontroller = new Notecontroller(new Notelist);
notecontroller.notelistview.notelist.addNote("hello");
notecontroller.notelistview.notelist.addNote("hello again");
notecontroller.insertHTML();
