let myForm =document.getElementById("myForm");
let input =document.getElementById("input");
let myList =document.getElementById("myList");
let h2 =document.getElementById("h2");
// let checkbox =document.getElementById("checkbox");
let taskBox = document.querySelector(".ul");


myForm.addEventListener("submit", (data) => {
                  data.preventDefault()
                  createItem(input.value)
                  
              }
)

createItem = (d) =>{
    let myTemplate = `<li class="list" class="line" id="list" onclick=""><div  class="list-items"><input id="myCheckBox" type="checkbox" class="checkbox" 
     > <span id="inputValue" > ${d}</span></input></div><button onclick="deleteItem(this)" class="deletebtn"><i class="fa fa-trash"></i></button></ li>`
    myList.insertAdjacentHTML("beforeend" , myTemplate)
    input.value = "";
    input.focus();
    h2.style.display = 'none';
    

   
    
}
  
deleteItem =(x)=>{
    x.parentElement.remove();

}

var list = document.querySelector('ul');



list.addEventListener("click", function(ev) {
  console.log(ev.target.querySelector("list"))
  if (ev.target.tagName === 'LI') {          
    ev.target.classList.toggle('checked');  
  }
},false);









