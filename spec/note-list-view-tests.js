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

  describe('it only shows first 20 characters of a note', () => {
    let notelist = new Notelist;
    notelist.addNote("this is a very very very long note so long you can't read all of it");
    let notelistview = new Notelistview(notelist);
    assert.isTrue(notelistview.viewNotesAsHTML() === '<ul><li><div>this is a very very </div></li></ul>');
  })

  describe('it creates a link for each note', () => {
    let notelist = new Notelist;
    notelist.addNote("this is a very very long note");
    let notelistview = new Notelistview(notelist);
    assert.isTrue(notelistview.viewNotesAsHTML() === '<ul><a href="http://localhost:8080#notes/${note.id}"><li><div>this is a very very </div></li></a></ul>');
  })

  describe('it throws error for empty notelist', function                   testForPrintingNotes() {
    let notelist = new Notelist;
    let notelistview = new Notelistview(notelist);
    assert.isError(notelistview.viewNotesAsHTML());
  });
});
