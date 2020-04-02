 class Notelistview {

   constructor(notelist) {
     this.notelist = notelist;
   }

   viewNotesAsHTML() {
     if (this.notelist.notes.length === 0) {
        throw new Error("No notes");
     } else {
       let x =  this.notelist.notes.map(note => {
          let y = note.text.substr(0,20);
          return (`<a href="http://localhost:8080#notes/${note.id}"><li><div>${y}</div></li></a>`);
        });

        x = `<ul>${x.join('')}</ul>`;
        return x;
    }
   }
}
