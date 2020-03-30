function Notelist () {
  this.notes = [];
}

Notelist.prototype.getNotes = function() {
  for(let i = 0; i < this.notes.length; i++) {
    return this.notes[i];
  }
}

Notelist.prototype.addNote = function(note) {
  this.notes.push(note);
}
