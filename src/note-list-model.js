class Notelist {

  constructor() {
    this.notes = [];
  }

  getNotes() {
    for(let i = 0; i < this.notes.length; i++) {
      return this.notes[i];
    }
  }

  addNote(text) {
    this.notes.push(new Note(text));
  }
}
