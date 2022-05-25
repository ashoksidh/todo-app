let myForm =document.getElementById("myForm");
let input =document.getElementById("input");
let myList =document.getElementById("myList");
let h2 =document.getElementById("h2");


myForm.addEventListener("submit", (data) => {
                  data.preventDefault()
                  createItem(input.value)
              }
)

createItem = (d) =>{
    let myTemplate = `<li ><input type="checkbox" class="checkbox" /> ${d} <button onclick="deleteItem(this)" class="deletebtn"><i class="fa fa-trash"></i></button></ li>`
    myList.insertAdjacentHTML("beforeend" , myTemplate)
    input.value = "";
    input.focus();
   
}

deleteItem =(x)=>{
    x.parentElement.remove();
}