const todoForm = document.querySelector('.todolist-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todolist-list');

todoForm.addEventListener('submit', handleTodoFormSubmit);

function deleteTodo(e) {
  const li = e.target.parentNode;
  li.remove();
}

function showTodo(newTodo) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.innerText = newTodo;

  const button = document.createElement('button');
  button.innerText = '❎';
  button.addEventListener('click', deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoFormSubmit(e) {
  e.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = '';

  showTodo(newTodo);
}