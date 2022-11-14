const todoForm = document.querySelector('.todolist-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.todolist-list');

let todos = [];

todoForm.addEventListener('submit', handleTodoFormSubmit);

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function deleteTodo(e) {
  const li = e.target.parentNode;
  li.remove();
  todos = todos.filter((todo) => {
    todo.id !== parseInt(li.id)
  })

  saveTodos();
}

function showTodo(newTodoObj) {
  const li = document.createElement('li');
  li.id = newTodoObj.id;

  const span = document.createElement('span');
  span.innerText = newTodoObj.text;

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

  const newTodoObj = {
    id: Date.now(),
    text: newTodo
  }

  todos.push(newTodoObj);

  showTodo(newTodoObj);
  saveTodos();
}

const savedTodos = localStorage.getItem('todos');
if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach((todo) => {
    showTodo(todo)
  });
}