 class Notelistview {

   constructor(notelist) {
     this.notelist = notelist;
   }

   viewNotesAsHTML() {
     let x =  this.notelist.notes.map(note => {
         return (`<li>${note.text}</li>`);
     });

     x = x.join("");
     return x;
   }
}
