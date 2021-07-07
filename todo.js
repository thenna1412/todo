//selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');




//Event listeners

document.addEventListener("DOMContentLoaded",getTodos);

todoButton.addEventListener('click',addtodo);

todoList.addEventListener('click', deleteCheck);




//functions

function addtodo() {
	
event.preventDefault();
console.log("hello");



const todoDiv=document.createElement('div');
todoDiv.classList.add('todo');

const newTodo=document.createElement('li');

newTodo.innerText=todoInput.value;
newTodo.classList.add('todo-item');

todoDiv.appendChild(newTodo);

saveTodos(todoInput.value);

//completed button

const completedButton=document.createElement('button');
completedButton.innerHTML='<i class="fas fa-check"></i>';
completedButton.classList.add('complte-button');

todoDiv.appendChild(completedButton);


//TRASH BUTTON


const trashButton=document.createElement('button');
trashButton.innerHTML='<i class="fas fa-trash"></i>';
trashButton.classList.add('trash-button');
todoDiv.appendChild(trashButton);


todoList.appendChild(todoDiv);

todoInput.value="";
}


function deleteCheck(e){




console.log(e.target);

const item=e.target;

if(item.classList[0]==='trash-button'){

const todo=item.parentElement;
removeTodos(todo)
todo.remove();

}
if(item.classList[0]==='complte-button'){

const todo=item.parentElement;

todo.classList.add('completed');

console.log("helo");


}

}


function saveTodos(todo){



const mail=(localStorage.getItem("login"));

console.log(mail); 

	let todos;

	if(localStorage.getItem("todos"+mail)===null){

todos=[]

	}
	else{

 todos=JSON.parse(localStorage.getItem("todos"+mail));

  
	}


	todos.push(todo);

 

	localStorage.setItem("todos"+mail,JSON.stringify(todos));


}




function getTodos() {
	

const mail=(localStorage.getItem("login"));

console.log(mail); 

let todos;

	if(localStorage.getItem("todos"+mail)===null){

todos=[]

	}
	else{

 todos=JSON.parse(localStorage.getItem("todos"+mail));

  
	}

todos.forEach(function(todo){



const todoDiv=document.createElement('div');
todoDiv.classList.add('todo');

const newTodo=document.createElement('li');

newTodo.innerText=todo;
newTodo.classList.add('todo-item');

todoDiv.appendChild(newTodo);



//completed button

const completedButton=document.createElement('button');
completedButton.innerHTML='<i class="fas fa-check"></i>';
completedButton.classList.add('complte-button');

todoDiv.appendChild(completedButton);


//TRASH BUTTON


const trashButton=document.createElement('button');
trashButton.innerHTML='<i class="fas fa-trash"></i>';
trashButton.classList.add('trash-button');
todoDiv.appendChild(trashButton);


todoList.appendChild(todoDiv);


});


}


function removeTodos(todo){
const mail=(localStorage.getItem("login"));

console.log(mail); 

let todos;

	if(localStorage.getItem("todos"+mail)===null){

todos=[]

	}
	else{

 todos=JSON.parse(localStorage.getItem("todos"+mail));

  
	}

	console.log(todo);

console.log(todo.children);
console.log(todo.children[0]);
console.log(todo.children[0].innerText);


	const todoIndex=todo.children[0].innerText;
todos.splice(todos.indexOf(todoIndex),1);
localStorage.setItem("todos"+mail,JSON.stringify(todos));

}
