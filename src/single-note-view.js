(function(exports) {

  function Singlenoteview(note) {
    this.note = note
  }

  Singlenoteview.prototype.getSingleNoteHTML = function() {
    return (`<div>${this.note.text}</div>`);
  }

  exports.Singlenoteview = Singlenoteview;
})(this);
