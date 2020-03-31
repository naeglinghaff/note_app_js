describe('Notelistview', function () {

  describe('it can list notes', function testForPrintingNotes() {
    let notelist = new Notelist;
    let notelistview = new Notelistview(notelist);
    let note = new Note("hello");
    notelist.addNote(note);
    assert.isTrue(notelistview.viewNotesAsHTML() === '<li>hello</li>');
  });
});


// function noteListViewCreatesHTMLList() {
//     console.log("noteListViewCreatesHTMLList");
//     var noteList = new NoteList();
//     var noteListView = new NoteListView(noteList);
//     noteList.createNote("test 1");
//     noteList.createNote("test 2");
//     assert.isTrue(noteListView.listHTML() === '<ul><li><div><a href=#notes/0>test 1</a></div></li></ul><ul><li><div><a href=#notes/1>test 2</a></div></li></ul>');
//
// }
