let myForm =document.getElementById("myForm");
let input =document.getElementById("input");
let myList =document.getElementById("myList");
let h2 =document.getElementById("h2");
let taskBox = document.querySelector(".ul");


myForm.addEventListener("submit", (data) => {
                  data.preventDefault()
                  createItem(input.value)});

createItem = (d) =>{
    let myTemplate = `<li class="list" class="line" id="list" onclick=""><div  class="list-items">
    <input id="myCheckBox" type="checkbox" class="checkbox" 
     ></input><span> ${d}</span></div><button onclick="deleteItem(this)" class="deletebtn"><i class="fa fa-trash"></i></button></ li>`
    myList.insertAdjacentHTML("beforeend" , myTemplate)
    input.value = "";
    input.focus();
	if(myList){
    h2.style.display = 'none';
	}else 
	{
		h2.style.display = 'block';
	}
    

   
    
}
  
deleteItem =(x)=>{
    x.parentElement.remove();

}

var list = document.querySelector('ul');



list.addEventListener("click", function(event) {
  let element = event.target.nextElementSibling;
  
  if (element?.classList.contains('checked')) { 
    element?.classList.remove('checked');
  }else{
    element?.classList.add('checked');
  }
}, false);