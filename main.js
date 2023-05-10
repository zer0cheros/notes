import './style.css'
import { getNotes, addNote } from './notes.js'
import { v4 as uuidv4 } from 'uuid';

const notes = await getNotes()  
console.log(notes['8ccce03f-1661-4e51-bb06-38141d9e6e5f'])
async function handleSubmit(event){
  event.preventDefault()
  const note = {
    id: uuidv4(),
    title: event.target[0].value,
    body: event.target[1].value,
    date: new Date().toLocaleDateString()
  }
  const msg = await addNote(note, notes)
  console.log(msg)
  displayNotes(notes)
  //window.location.reload()
}
function displayNotes(notes){
  document.querySelector('#app').innerHTML = `
  <div>
    <form id="form">
      <input type="text" />
      <textarea type="text" rows="5" cols="20"></textarea>
      <button type="submit" >Add Note</button>
    </form>
    ${notes.map(note=>{
      return `<div class="notes"><h2>${note.title}</h2><p>${note.body}</p><div><button>edit</button><button>delete</button></div></div>`
    }).join('')}
  </div>
  `
}
displayNotes(notes)
document.querySelector('#form').addEventListener('submit', handleSubmit)


