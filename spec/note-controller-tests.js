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
    clickEventSimulation(app);
    div = document.getElementById("app")
    console.log(div);
    assert.isTrue(div.innerHTML === `<ul><a href="http://localhost:8080#notes/0"><li><div>this is a very very </div></li></a></ul>`);
  })

});
