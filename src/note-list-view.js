 class Notelistview {

   constructor(notelist) {
     this.notelist = notelist;
   }

   viewNotesAsHTML() {
     let x =  this.notelist.notes.map(note => {
         return (`<li><div>${note.text}</div></li>`);
     });

     x = `<ul>${x.join('')}</ul>`;
     return x;
   }
}
