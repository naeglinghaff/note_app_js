describe('Notelist', function() {

  describe('it can add a note', function testForAddingNote() {
    let notelist = new Notelist;
    let note = new Note("hello");
    notelist.addNote(note);
    assert.isTrue(notelist.notes[0] === note);
  });

  describe('it can fetch notes', function testForReturningNotes () {
    let notelist = new Notelist;
    let note = new Note("hello");
    notelist.addNote(note);
    value = notelist.getNotes();
    assert.isTrue(value === note);
  })
});
