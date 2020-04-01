describe('single note view', () => {
  describe('it takes a note as a parameter', () => {
    let note = new Note("oh hey there");
    let singlenoteview = new Singlenoteview(note);
    assert.isTrue(singlenoteview.note === note);
  })

  describe('returns html string from note', () => {
    let note = new Note("hello");
    let singlenoteview = new Singlenoteview(note);
    assert.isTrue(singlenoteview.getSingleNoteHTML() === `<div>hello</div>`);
  })
})
