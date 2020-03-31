describe('Notelistview', function () {

  describe('it can list notes as html strings', function testForPrintingNotes() {
    let notelist = new Notelist;
    let notelistview = new Notelistview(notelist);
    let note = new Note("hello");
    notelist.addNote(note);
    assert.isTrue(notelistview.viewNotesAsHTML() === '<ul><li><div>hello</div></li></ul>');
  });

  describe('it can list 2 notes', function testForPrintingNotes() {
    let notelist = new Notelist;
    let notelistview = new Notelistview(notelist);
    let note = new Note("hello");
    let note2 = new Note("test 2");
    notelist.addNote(note);
    notelist.addNote(note2);
    assert.isTrue(notelistview.viewNotesAsHTML() === '<ul><li><div>hello</div></li><li><div>test 2</div></li></ul>');
  });

  describe('it can throws error for empty notelist', function testForPrintingNotes() {
    let notelist = new Notelist;
    let notelistview = new Notelistview(notelist);
    assert.isTrue(notelistview.viewNotesAsHTML() === 'No notes');
  });
});
