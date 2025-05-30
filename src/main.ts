import './style.css';
const checkboxes = document.querySelectorAll('.custom-checkbox');
const inputFields = document.querySelectorAll('input');
const keepGoing = document.querySelector('.keep-going') as HTMLDivElement;
const progress = document.querySelector('.filler') as HTMLDivElement;
const progressText = document.querySelector('.progressText') as HTMLParagraphElement;
const clear = document.querySelector('.clear') as HTMLDListElement;


function inputEmpty (){
  return Array.from(inputFields).every(input => input.value.trim() !== '');
}


inputFields.forEach(()=>{
  checkboxes.forEach((check, i)=>{
    check.addEventListener('click',()=>{
    if(!inputEmpty()){ 
    keepGoing.textContent = "please fill all the inputs"
    check.parentElement?.classList.remove('completed');
    
  } else{
    keepGoing.textContent = "keep going"
    check.parentElement?.classList.toggle('completed');
    const tick = check.querySelector('.check');
    tick?.classList.toggle('hidden');
    if(i == 0){
      progress.classList.add('w-[34%]')
      progressText.textContent = `${i+1}/3 Completed`;
    }
    else if(i == 1){
      progress.classList.add('w-[68%]')
      progressText.textContent = `${i+1}/3 Completed`;
      
    }
    else{
      progress.classList.add('w-[100%]')
      progressText.textContent = `${i+1}/3 Completed`;
      keepGoing.textContent = "You've done it!";
      
    }
    
  }
  
})
}) 
})


clear.addEventListener('click', ()=>{
  checkboxes.forEach((check) =>{
    check.parentElement?.classList.remove('completed');
    const tick = check.querySelector('.check');
    tick?.classList.add('hidden');
  })

  inputFields.forEach((input) =>{
    input.value = "";
  })

  progress.classList.remove('w-[34%]', 'w-[68%]', 'w-[100%]');
  progress.classList.add('w-[0%]');
  progressText.textContent = "";

  keepGoing.textContent = 'Cleared All the Inputs';

  
})


