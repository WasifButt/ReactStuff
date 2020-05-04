const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const todo_list = document.getElementById('todo-list')
const done_list = document.getElementById('done-list')
const itemCountSpan = document.getElementById('item-count')
var count = 0; 
const uncheckedCountSpan = document.getElementById('unchecked-count')
var uncheck = 0;

function newTodo() {
  const item = document.getElementById('entryInput').value
  const entry = document.createElement('li')
  const checkbox = document.createElement('input')
  const close_btn = document.createElement('input')

  checkbox.type = 'checkbox'
  checkbox.addEventListener('click', onCheck)

  close_btn.type = 'button'
  close_btn.className = 'close'
  close_btn.value = 'x'
  close_btn.addEventListener('click', onDelete)

  entry.appendChild(checkbox)
  entry.appendChild(document.createTextNode(item))
  entry.appendChild(close_btn)
  todo_list.appendChild(entry)

  itemCountSpan.innerHTML = ++count;
  uncheckedCountSpan.innerHTML = ++uncheck; 
}

function onCheck() {
  if (this.checked && uncheck != 0)
    uncheckedCountSpan.innerHTML = --uncheck; 
  else 
    uncheckedCountSpan.innerHTML = ++uncheck; 

  var task = event.target.parentElement;
  var list = task.parentElement.id; 

  if (list == 'todo-list')
    done_list.appendChild(task)
  else 
    todo_list.appendChild(task)
}

function onDelete() {
  if (uncheck != 0 )  uncheckedCountSpan.innerHTML = --uncheck; 
  if (count != 0 )    itemCountSpan.innerHTML = --count;

  var task = event.target.parentElement;
  var list = task.parentElement.id; 

  if (list == 'done-list')
    done_list.removeChild(task)
  else
    todo_list.removeChild(task)
}