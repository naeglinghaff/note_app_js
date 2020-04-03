describe('Notecontroller', () => {

  let notelistdouble = new Double;
  let notecontroller = new Notecontroller(notelistdouble)

  describe('it gets created properly', () => {
    assert.isTrue(notecontroller instanceof Notecontroller);
    assert.isTrue(notecontroller.notelistview instanceof Notelistview);
    assert.isTrue(notecontroller.notelistview.notelist === notelistdouble);
  })

  describe('it displays html on page', () => {
    let app = document.getElementById('app');
    notelistdouble.addNote("hello");
    notelistdouble.addNote("hello again");
    let string = notecontroller.insertHTML();
    assert.isTrue(app.innerHTML === string);
  })

  describe('it fetches singlenote view on hashevents', () => {
    notecontroller = new Notecontroller(new Notelist);
    notecontroller.urlChangeDisplaysNoteOnWholePage();
    notecontroller.notelistview.notelist.addNote("hello");
    notecontroller.notelistview.notelist.addNote("this should be a longer note to test that this can display text");
    notecontroller.insertHTML();
    clickEventSimulation(app);
    div = document.getElementById("app")
    console.log(div);
    assert.isTrue(div.innerHTML === "this should be a longer note to test that this can display text");
  })

});
