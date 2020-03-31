describe('Notelistview', function () {

  describe('it can list notes as html strings', function testForPrintingNotes() {
    let notelist = new Notelist;
    let notelistview = new Notelistview(notelist);
    let note = new Note("hello");
    notelist.addNote(note);
    assert.isTrue(notelistview.viewNotesAsHTML() === '<ul><li><div>hello</div></li></ul>');
  });
});
