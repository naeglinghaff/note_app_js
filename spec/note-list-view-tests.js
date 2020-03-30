describe('Notelistview', function () {

  describe('it can list notes', function testForPrintingNotes() {
    let notelist = new Notelist;
    let notelistview = new Notelistview(notelist);
    let note = new Note("hello");
    notelist.addNote(note);
    assert.isTrue(notelistview.viewNotesAsHTML() === note);
  });
});
