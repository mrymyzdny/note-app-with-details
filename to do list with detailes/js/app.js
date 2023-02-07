let $ = document
const noteInput = $.querySelector('.note-input')
const timeInput = $.querySelector('.time-input')
const addBtn = $.querySelector('.add-button')
const noteContainer = $.querySelector('.note-items')


let addNewNote = () => {

    let noteInputValue = noteInput.value
    let timeInputValue = noteInput.value

    if (noteInputValue || timeInputValue) {
        noteGenerator()
    } else {
        alert('fill the inputs')
    }
}

let noteGenerator = () => {
    
    noteContainer.insertAdjacentHTML('beforeend' , ` <table class="tabel"><thead class="thead"><tr class="tr"><th class="th">
    note :<span class="notes">${noteInput.value}</span></th><th class="th">time: <span class="notes">${timeInput.value}</span>
    </th></tr></thead></table> `)
}


addBtn.addEventListener('click' , addNewNote )
window.addEventListener('keydown' , event => {
    if (event.keyCode === 13) {
        addNewNote()
    }
})
