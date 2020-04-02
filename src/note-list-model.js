class Notelist {

  constructor() {
    this.notes = [];
    this.count = 0;
  }

  getNotes() {
    for(let i = 0; i < this.notes.length; i++) {
      return this.notes[i];
    }
  }

  addNote(text) {
    this.notes.push(new Note(text, this.count));
    this.count ++;
  }
}
