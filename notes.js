export async function getNotes(){
  const note = JSON.parse(localStorage.getItem('notes'));
  return note ? [...note] : []
}

export async function addNote(note, notes){
  notes.push(note)
  const msg = localStorage.setItem('notes', JSON.stringify(notes))
  return !msg ? 'Note added' : new Error('something went wrong')
}

export async function editNote(){

}

export async function deleteNote(){

}