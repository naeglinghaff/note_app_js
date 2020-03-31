function Notelistview(notelist) {
  this.notelist = notelist;
}

Notelistview.prototype.viewNotesAsHTML = function() {
  let x =  this.notelist.notes.map(note => {
      return (`<li>${note.text}</li>`);
  });

  x = x.join("");
  return x;
  };

notelist = new Notelist;
note = new Note("hello");
notelist.addNote(note);
notelistview = new Notelistview(notelist);
notelistview.viewNotesAsHTML();
