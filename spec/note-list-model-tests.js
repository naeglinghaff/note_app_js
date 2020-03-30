describe('it has an array property', function testForArray() {
  let notelist = new Notelist;
  let note = new Note("hello");
  notelist.addNote(note);
  assert.isTrue(notelist.notes[0] === note);
});

describe('it can add a note', function testForAddingNote() {
  let notelist = new Notelist;
  let note = new Note("hello");
  notelist.addNote(note);
  assert.isTrue(notelist.notes[0] === note);
});

describe('it can list notes', function testForPrintingNotes() {
  let notelist = new Notelist;
  let note = new Note("hello");
  notelist.addNote(note);
  assert.isTrue(notelist.viewNotes() === note);
});
