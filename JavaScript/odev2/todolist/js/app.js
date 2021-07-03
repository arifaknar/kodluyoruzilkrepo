const task=document.querySelector("#task")
const addTaskButton=document.querySelector("#liveToastBtn")
const taskListElement=document.querySelector("#list")
const toast=document.querySelector(".toast")
const toastHeader=document.querySelector(".toast-header strong")
const toastBody=document.querySelector(".toast-body")
const toastSuccessMessage="Todo başarıyla eklendi"
const toastErrorMessage="Hata! Lütfen kontrol ederek yeniden ekleyiniz."
const toastDeleteMessage="Todo Başarıyla silindi."

const option={
    animation:true,
    delay:5000
}
const toastElement=new bootstrap.Toast(toast,option)

const successMessage=``
const errorMessage=``

eventListeners()
function eventListeners(){
    taskListElement.addEventListener("click",deleteTodo)
}


// TODO Add, Delete, Checked

function newElement(){
    if(task.value.trim()!==""){
        const newTask=`<li>${task.value}<a class="close float-right border-0" class=""><i class="fas fa-times"></i></a></li>`
        taskListElement.innerHTML=taskListElement.innerHTML+newTask
        task.value=""
        toastBody.innerHTML=`
        ${toastSuccessMessage}
        <i class="fas fa-smile-beam text-success"></i>
        `
        
    }
    else{
        toastBody.innerHTML=`
        ${toastErrorMessage}
        <i class="fas fa-frown text-danger"></i>
        `
    }
    toastElement.show()
}

function deleteTodo(e) {
    
    if(e.target.className==="fas fa-times")
    {
        e.target.parentElement.parentElement.remove()
        toastBody.innerHTML=`
        ${toastDeleteMessage}
          <i class="fas  fa-thumbs-up text-info pl-1"></i>
        `
        toastElement.show()
    }
    else{
        checkedTodo(e)
    }
  }

  function checkedTodo(e){
    if(e.target.className==="checked"){
         e.target.classList.remove("checked")
     }
     else{
          e.target.classList.add("checked")
     }
    
 }

 //Todo LocalStorage Add, Delete, GetAll