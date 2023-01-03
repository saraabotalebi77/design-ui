const dataListInput = document.getElementById("country");
const dataList = document.getElementById("country-datalist");
let dataListOptions = [...dataList.options]; 

dataListInput.onclick = (event)=>{
  if(dataList.style.display == "block"){
    dataListInput.style.borderRadius = "5px";
    dataList.style.display = "none";
    dataListInput.blur();
  }else{
    dataListInput.style.borderRadius = "5px 5px 0 0";
    dataList.style.display = "block";
  }
}

window.onclick = (event)=>{
  if((dataList.style.display=="block")&&(!event.path.includes(dataList.parentElement))){
    dataListInput.style.borderRadius = "5px";
    dataList.style.display = "none";
  }
}

dataListOptions.forEach(option=>{
  option.onclick = ()=>{
    removeActiveClass(dataListOptions);
    option.classList.add("active");
    dataListInput.value = option.value;
    dataListInput.style.borderRadius = "5px";
    dataList.style.display = "none";
  }
})

dataListInput.oninput = (event)=>{
  const inputValue = event.target.value.toLowerCase();
  for(let option of dataList.options){
    if(option.value.toLowerCase().indexOf(inputValue)>-1){
      option.style.display = "block";
    }else{
      option.style.display = "none";
    }
  }
  changeDataListOptions(dataList.options);
}

function changeDataListOptions(options){
  dataListOptions.splice(0);
  for(let i=0 ; i<options.length ; i++){
    if(options[i].style.display=="block"){
      dataListOptions.push(options[i]);
    }
  }
}

let currentFocus = -1;
dataListInput.onkeydown = (event)=>{
  if(event.code.toLowerCase()=="arrowdown"){
    currentFocus++;
    addActiveClass(dataListOptions);
  }else if(event.code.toLowerCase()=="arrowup"){
    currentFocus--;
    addActiveClass(dataListOptions);
  }else if(event.code.toLowerCase()=="enter"){
    event.preventDefault();
    if(currentFocus>-1){
      dataListOptions[currentFocus].click();
    }
  }
}
function addActiveClass(options){
  if(!options) return;
  removeActiveClass(options);
  if(currentFocus>=options.length) currentFocus= 0 ;
  if(currentFocus<0) currentFocus=options.length-1;
  options[currentFocus].classList.add("active"); 
  options[currentFocus].scrollIntoView(false);
}
function removeActiveClass(options){
  for(let option of options){
    option.classList.remove("active")
  }
}








