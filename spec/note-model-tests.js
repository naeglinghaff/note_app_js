
(function(exports) {
  function isString() {
    var text = "JavaScript is my bae";
    var note = new Note(text);

    if (typeof text !== 'string') {
          throw new Error("Assertation failed: " + note.text + " is not a string");
        }
  };

  isString();
})(this);

// function testForString() {
//
//   let note = new Note(text);
//   assert.isString(note.getsText());
//
// };
//
// testForString();
