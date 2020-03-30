function testForString() {
  let textForNote = "Javascript is my bae";
  let note = new Note(textForNote);
  assert.isString(note.text);
};

function testforEquality() {
  let text = "Hello world";
  let note = new Note("Hello world");
  assert.isTrue(note.text === text);
}

function testforReturnsValue() {
  let text = "YO"
  let note = new Note("YO");
  value = note.getsText();
  assert.isTrue(value === note.text);
}

testForString();
testforEquality();
testforReturnsValue();
