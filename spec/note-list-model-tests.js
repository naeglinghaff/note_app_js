function testForArray() {
  let notelist = new Notelist;
  let note = new Note("hello");
  notelist.addNote(note);
  assert.isTrue(notelist.notes[0] === note);
}

function testForAddingNote() {
  let notelist = new Notelist;
  let note = new Note("hello");
  notelist.addNote(note);
  assert.isTrue(notelist.notes[0] === note);
}

function testForPrintingNotes() {
  let notelist = new Notelist;
  let note = new Note("hello");
  notelist.addNote(note);
  assert.isTrue(notelist.viewNotes() === note);
}

testForAddingNote();
testForArray();
testForPrintingNotes();
