const todoForm = document.querySelector('.todolist-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todolist-list');

todoForm.addEventListener('submit', handleTodoFormSubmit);

function handleTodoFormSubmit(e) {
  e.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = '';
}