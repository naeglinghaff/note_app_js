describe('Note', function () {

  describe('it can accept and return a string', function testForString() {
    let textForNote = "Javascript is my bae";
    let note = new Note(textForNote);
    assert.isString(note.text);
  });

  describe ('it can store text in a property', function testforEquality() {
    let text = "Hello world";
    let note = new Note("Hello world");
    assert.isTrue(note.text === text);
  });

  describe('it can use the getsText method to return text properties', function testforReturnsValue() {
    let note = new Note("YO");
    value = note.getsText();
    assert.isTrue(value === note.text);
  });

  describe('it can have an id property', () => {
    let notelist = new Notelist;
    notelist.addNote("hello again");
    assert.isTrue(notelist.notes[0].id === 0);
  })
});
