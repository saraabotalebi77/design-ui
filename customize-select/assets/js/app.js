const selectBtn = document.querySelector(".select-btn");
const selectOptions = document.querySelector(".select-options")
const options = document.querySelectorAll(".select-option");
const optionDefault = document.querySelector(".option-default");
let currentFocus = -1;
selectBtn.onfocus = ()=>{
    selectBtn.style.borderRadius = "5px 5px 0 0";
    selectOptions.style.height="120px";
    selectOptions.style.border="1px solid green";
    selectOptions.style.borderTop="none";
    selectOptions.style.borderRadius="0px 0px 5px 5px";
}
selectBtn.onblur = ()=>{
  selectBtn.style.borderRadius = "5px";
  selectOptions.style.height="0px";
  selectOptions.style.borderColor="transparent";
  selectOptions.style.borderRadius="0px";
}
for(let i=0 ; i<options.length ; i++){
  options[i].onclick=()=>{
    optionDefault.textContent = options[i].textContent;
    selectBtn.blur();
  }
}
selectBtn.onkeydown = (event)=>{
  if(event.code.toLowerCase()=="arrowup"){
    currentFocus--;
    addActiveClass(options)
  }else if(event.code.toLowerCase()=="arrowdown"){
    currentFocus++;
    addActiveClass(options)
  }else if(event.code.toLowerCase()=="enter"){
    if(options[currentFocus]){
      optionDefault.textContent = options[currentFocus].textContent;
      selectBtn.blur();
    }
  }
}
function addActiveClass(options){
  if(!options){
    return ;
  }
  removeActiveClass(options);
  currentFocus = currentFocus<0 ? options.length-1 : currentFocus;
  currentFocus = currentFocus>options.length-1 ? 0 : currentFocus;
  optionDefault.textContent  = options[currentFocus].textContent;
  options[currentFocus].classList.add("active-option");
  options[currentFocus].scrollIntoView(false);
}
function removeActiveClass(options){
  for(let i=0 ; i<options.length ; i++){
    options[i].classList.remove("active-option");
  }
}