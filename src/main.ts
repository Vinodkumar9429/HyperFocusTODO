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
  checkboxes.forEach((check)=>{
    check.addEventListener('click',()=>{
    if(!inputEmpty()){ 
    keepGoing.textContent = "please fill all the inputs"
    check.parentElement?.classList.remove('completed');
    
  } else{
    keepGoing.textContent = "keep going"
    check.parentElement?.classList.toggle('completed');
    const tick = check.querySelector('.check');
    tick?.classList.toggle('hidden');

const completedCount = Array.from(checkboxes).filter(c => c.parentElement?.classList.contains('completed')).length;

progress.classList.remove('w-[34%]', 'w-[68%]', 'w-full');


if (completedCount === 1) {
  progress.classList.add('w-[34%]');
  progressText.textContent = `1/3 Completed`;
  keepGoing.textContent = "Keep going";
} 
else if (completedCount === 2) {
  progress.classList.add('w-[68%]');
  progressText.textContent = `2/3 Completed`;
  keepGoing.textContent = "Almost there, just hang on!";
}
else if (completedCount === 3) {
  progress.classList.add('w-full');
  progressText.textContent = `3/3 Completed`;
  keepGoing.textContent = "You've done it!";
}
else {
  progressText.textContent = "";
  keepGoing.textContent = "Add tasks, get going";
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
  progress.classList.remove('w-full');
  progressText.textContent = "";

  keepGoing.textContent = 'Cleared All the Inputs';

  
})


