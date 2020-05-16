// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

const todoDelete =document.querySelector('.delete-btn');

// Event Listeners
todoButton.addEventListener('click',addTodo);
document.addEventListener('click',del);

function del(e){
    debugger
    if(e.target.classList.contains('delete-btn') || e.target.parentElement.classList.contains('delete-btn')){
        e.target.closest('.todo').remove()
    }
}


// Creating & attaching list

function attchList(){
    //todo div
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');

    //create li
    const newTodo=document.createElement('li');
    newTodo.textContent=todoInput.value;
    newTodo.classList.add('todo-items');

    //Append li to div

    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton =document.createElement('button');
    completedButton.innerHTML ='<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    // Append this button to div
    todoDiv.appendChild(completedButton);

     //Trash Button or Delete button
     const deleteButton =document.createElement('button');
     deleteButton.innerHTML ='<i class="fas fa-trash"></i>';
     deleteButton.classList.add('delete-btn');
     // Append this button to div
     todoDiv.appendChild(deleteButton);    

    const filt =Array.from(document.querySelectorAll('.todo-items'));
    
    if(filt.length===0)
    {
        todoList.appendChild(todoDiv);
    }
    else{
    const check = filt.forEach(t =>{
        
        if(t.textContent.contains(todoInput.value) )
        {
            alert("Task already exist on the list");
        }
        else{
            todoList.appendChild(todoDiv);
        }
        });
    }
    todoInput.value="";

    //Attaching div to the ul
   // todoList.appendChild(todoDiv);
}


function addTodo(){

    // console.log('working');
     // Check input
     if(todoInput.value!=="")
     {
         
         attchList();
     }
    
 }
 
//Functions