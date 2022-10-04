const inputElement = document.querySelector('input.newTaskAdd')
const addBtn = document.querySelector('button#newTaskBtn')

const tasks = document.querySelector('div.newTasks')

const checkInput = () => inputElement.value.trim().length > 0;  // callbackFunction, retorna se a o valor recebido em 'inputElement', sem espaços com o 'trim()' é maior que 0. 

const handleAddTask = () => {
    const isValid = checkInput();

    if(!isValid) {
      return inputElement.classList.add("erro");
    };

    const newTasksItem = document.createElement('div');
    newTasksItem.classList.add('tasksItem');

    const text = document.createElement('p');
    text.innerText = inputElement.value;

    text.addEventListener('click', () => textClick(text));

    const deleteItem = document.createElement('i');

    deleteItem.classList.add('fa-solid');
    deleteItem.classList.add('fa-trash');

    newTasksItem.addEventListener('click', () => deleteClick(text, newTasksItem));

    newTasksItem.appendChild(text);
    newTasksItem.appendChild(deleteItem);

    tasks.appendChild(newTasksItem)

    inputElement.value = "";
};

const textClick = (text) => {
    const tasks = newTasksItem.childNodes;

    for (const task of tasks) {
        if (task.firstChild.isSameNode(text)) {
            task.firstChild.classList.toggle("completed");
        };
    };
};

const deleteClick = (text, newTasksItem) => {
    const tasks = newTasksItem.childNodes;

    for (const task of tasks) {
        if (task.firstChild.isSameNode(text)) {
            newTasksItem.remove();
        };
    };
};

const handleAddTaskChange = () => {
    const isValid = checkInput();

    if (isValid) {
        return inputElement.classList.remove("erro");
    };
}; 

addBtn.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleAddTaskChange());