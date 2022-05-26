let myForm =document.getElementById("myForm");
let input =document.getElementById("input");
let myList =document.getElementById("myList");
let h2 =document.getElementById("h2");
let checkbox =document.getElementById("checkbox");


myForm.addEventListener("submit", (data) => {
                  data.preventDefault()
                  createItem(input.value)
                  
              }
)

createItem = (d) =>{
    let myTemplate = `<li class="list"><div class="list-items"><input id="checkbox" type="checkbox" class="checkbox" class="line"/><span> ${d}</span> </div><button onclick="deleteItem(this)" class="deletebtn"><i class="fa fa-trash"></i></button></ li>`
    myList.insertAdjacentHTML("beforeend" , myTemplate)
    input.value = "";
    input.focus();
    h2.style.display = 'none';
   
   
    
}

deleteItem =(x)=>{
    x.parentElement.remove();

}


// checkbox.addEventListener("click", (checkbox === true){
//     checkbox.body.style.background=  'line-through'
// })
    
