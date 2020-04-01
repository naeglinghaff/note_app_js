describe('Notecontroller', () => {

  let notelistdouble = new Double("notelistdouble", {
    addNote: "hello again",
    notes: [{text: "hello"}, {text: "hello again"}]
  });

  let notecontroller = new Notecontroller(notelistdouble)

  let notelistviewdouble = new Double("notelistviewdouble", {
    viewNotesAsHTML: '<ul><li><div>hello</div></li><li><div>hello again</div></li></ul>',
    html: '<ul><li><div>hello</div></li><li><div>hello again</div></li></ul>'
  });

  describe('it gets created properly', () => {
    assert.isTrue(notecontroller instanceof Notecontroller);
    assert.isTrue(notecontroller.notelistview instanceof Notelistview);
    assert.isTrue(notecontroller.notelistview.notelist === notelistdouble);
  })

  describe('it displays html on page', () => {
    let app = document.getElementById('app');
    let string = notelistviewdouble.viewNotesAsHTML;
    assert.isTrue(notelistviewdouble.html === string);
  })

});
