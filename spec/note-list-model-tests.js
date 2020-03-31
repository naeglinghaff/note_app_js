describe('Notelist', function() {

  describe('it can add a note', function testForAddingNote() {
    let notelist = new Notelist();
    notelist.addNote("hello");
    assert.isTrue(notelist.notes[0].text === "hello");
  });

  describe('it can fetch notes', function testForReturningNotes () {
    let notelist = new Notelist;
    notelist.addNote("hello");
    value = notelist.getNotes();
    assert.isTrue(value.text === "hello");
  })
});
