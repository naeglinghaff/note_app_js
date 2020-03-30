function testForString() {
  let textForNote = "Javascript is my bae";
  let note = new Note(textForNote);
  assert.isString(note.text);
};

testForString();
