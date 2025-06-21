function addTask(){
   const input=document.getElementById("taskInput");
   const task=input.value.trim();
  if(task===""){
     window.alert("Please!Enter a task..");
     return;
  }
  const li=document.createElement("li");
  li.innerHTML=`
  <span onlick="toggleDone(this)" class="taskname">${task}</span>
  <button onclick="deleteTask(this)" class="delete">Delete</button>`;
  document.getElementById("taskList").appendChild(li);
  input.value="";
}
function deleteTask(btn){
  const li=btn.parentElement;
  li.remove();
}
function toggleDone(span){
  btn.parentElement.classList.toggle("done");
}