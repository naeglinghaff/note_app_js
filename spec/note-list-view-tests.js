describe('Notelistview', function () {

  describe('it can list notes as html strings', function testForPrintingNotes() {
    let notelist = new Notelist;
    let notelistview = new Notelistview(notelist);
    notelist.addNote("hello");
    assert.isTrue(notelistview.viewNotesAsHTML() === '<ul><li><div>hello</div></li></ul>');
  });

  describe('it can list 2 notes', function testForPrintingNotes() {
    let notelist = new Notelist;
    let notelistview = new Notelistview(notelist);
    notelist.addNote("hello");
    notelist.addNote("test 2");
    assert.isTrue(notelistview.viewNotesAsHTML() === '<ul><li><div>hello</div></li><li><div>test 2</div></li></ul>');
  });

  describe('it can throws error for empty notelist', function testForPrintingNotes() {
    let notelist = new Notelist;
    let notelistview = new Notelistview(notelist);
    assert.isTrue(notelistview.viewNotesAsHTML() === 'No notes');
  });
});
