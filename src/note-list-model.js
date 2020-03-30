function Notelist () {
  this.notes = [];
}

Notelist.prototype.viewNotes = function() {
  for(let i = 0; i < this.notes.length; i++) {
    return this.notes[i];
  }
}

Notelist.prototype.addNote = function(note) {
  this.notes.push(note);
}
