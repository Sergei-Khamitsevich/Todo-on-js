const addInput = document.querySelector('.form__input')
const addButtonSubmit = document.querySelector('.form__submit')
const taskList = document.querySelector('.list')
const newTask = document
  .querySelector('.item-template')
  .content.querySelector('.list__item')
const removeTask = newTask.querySelector('.delete')

const taskArray = [
  'Выучить js  в идеале',
  'Изучить React',
  'Изучить NodeJs',
  'Изучить git профессионально',
]

const generateTask = (text) => {
  const taskElement = newTask.cloneNode('true')
  const task = taskElement.querySelector('.item__text')
  task.textContent = text

  const removeTask = taskElement.querySelector('.delete')
  removeTask.addEventListener('click', () => {
    taskElement.remove()
  })
  

  const editTask = taskElement.querySelector('.edit')
  editTask.addEventListener('click', () => {
    task.setAttribute('contenteditable', 'true')
    task.focus()
  })

  return taskElement
}

const addNewTask = (event) => {
  event.preventDefault()
  taskList.prepend(generateTask(addInput.value))
  addInput.value = ''
}

addButtonSubmit.addEventListener('click', addNewTask)

const renderTask = () => {
  taskArray.forEach((task) => {
    taskList.append(generateTask(task))
  })
}

renderTask()
