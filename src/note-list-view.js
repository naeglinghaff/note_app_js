function Notelistview(notelist) {
  this.notelist = notelist;
}

Notelistview.prototype.viewNotesAsHTML = function() {
  let list = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
    let x =  this.notelist.map(note => {
      return (`<div>${note.text}</div>`);
      });
  };
