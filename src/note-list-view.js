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
          return (`<li><div>${y}</div></li>`);
        });

        x = `<ul>${x.join('')}</ul>`;
        return x;
    }
   }
}
