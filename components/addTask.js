import { uniqueDates } from '../services/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import {  displayTask } from './readTask.js';

export const addTask=(evento)=>{
    evento.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendario=document.querySelector('[data-form-date]');

    const date=calendario.value;
    const value = input.value;
    const dateFormart=moment(date).format('DD/MM/YYYY');

    if(value==""|| date==""){
      return;
    }

    input.value = '';
    calendario.value="";
    const complete=false;

    const taskObj={
      value,
      dateFormart,
      complete,
      id: uuid.v4()
    };

    list.innerHTML="";

    const taskList= JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    
    displayTask();
  }
  export const createTask = ({value,dateFormart,complete,id}) => {
    const task = document.createElement('li');
        task.classList.add('card');
        const check=checkComplete(id);
        if(complete){
          check.classList.toggle('fas');
          check.classList.toggle('completeIcon');
          check.classList.toggle('far');
        }
    const taskContent = document.createElement('div');
    const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);
        task.appendChild(taskContent);
        task.appendChild(deleteIcon(id)); 
    return task;
  };
  