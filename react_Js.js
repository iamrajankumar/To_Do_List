let target =document.getElementById("fild");
        


function addItam(){
    total = target.value;
    let li =document.createElement("li");
    li.innerText = total;
    let ul =document.getElementById('liItem');
    ul.appendChild(li);

    li.className ="totalValue";
    li.innerHTML = `
        <span>${total}</span>
        <button class="deleteBtn" onclick="deleteTask(this)">Delete</button>
      `;

    li.classList="item";
    

    target.value="";
    
}
function deleteTask(button) {
    
      var listDelete = button.parentNode;
      listDelete.parentNode.removeChild(listDelete);
    }
