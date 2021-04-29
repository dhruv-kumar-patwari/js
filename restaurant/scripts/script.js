const menus = document.querySelectorAll('.menu');
const tables = document.querySelectorAll('.table');

menus.forEach(menu => {
  menu.addEventListener('dragstart', () => {
    menu.classList.add('dragging')
  })

  menu.addEventListener('dragend', () => {
    menu.classList.remove('dragging')
  })
})

tables.forEach(table => {
  table.addEventListener('dragover', e => {
    e.preventDefault()
  })

  table.addEventListener('dragenter', e => {
    e.preventDefault()
    
  })

  table.addEventListener('drop', e => {
    const draggable = document.querySelector('.dragging')
    const itemName = draggable.querySelector(".card-header").innerHTML.trim();
    const tableName = table.querySelector(".card-header").innerHTML.trim();
    addToBill(itemName, tableName.substr(6));
  })
})

function addToBill(foodItem, table){

  var foodItemObj = menuItems.filter(obj => {
    return obj.name === foodItem
  })

  let foodPrice = foodItemObj[0].price

  var tableObj = tablesList[table-1];
  
  var existingItem = tableObj.bill.filter(obj => {
    return obj.name === foodItem
  })

  if(existingItem.length > 0){
    existingItem[0].quantity += 1;
  }
  else{
    tableObj.bill.push({
    name:foodItem,
    quantity:1,
    price:foodPrice
  })
  }

  generateBillingTable(table);
}

function generateBillingTable(table){
  const tableBody = document.querySelectorAll("tbody")[table-1]
  let tableObjBills = tablesList[table-1].bill;
  let totalAmount = 0;
  let totalQuantity = 0;
  let i = 1

  tableBody.innerHTML = "";
  
  for(let bill of tableObjBills){
    const tableRow = document.createElement("tr")
    tableRow.innerHTML = `<td scope="col">${i}</td>
                          <td>${bill.name}</td>
                          <td><input type="number" name="quantity" class="quantity-amount" value="${bill.quantity}"></td>
                          <td>${bill.quantity * bill.price}</td>
                          <td><span class="drop">&times;</span></td>`
    i++;
    tableBody.appendChild(tableRow)
    totalAmount += bill.quantity * bill.price;
    totalQuantity += bill.quantity;
  }

  addFooterRowWithTotal(totalAmount, table);
  
  tablesList[table-1].quantity = totalQuantity;
  tablesList[table-1].total = totalAmount;

  updateTotalAndQuantityOnTheCard(table, totalAmount, totalQuantity);
  dropItemFromTable()
  updateTotalOnChangingQuantity()
}

function addFooterRowWithTotal(totalAmount, table) {
  const tableFooter = document.querySelectorAll("tfoot")[table-1]
  const tableRow = document.createElement("tr");

  tableFooter.innerHTML = "";

  tableRow.innerHTML = `<td scope="col"></td>
                          <th>Total</th>
                          <td></td>
                          <th>${totalAmount}</th>`;
  tableFooter.appendChild(tableRow);
}

function updateTotalAndQuantityOnTheCard(table, totalAmount, totalQuantity) {
  let cardBodyToUpdate = document.querySelectorAll(".table .card-body")[table - 1];
  cardBodyToUpdate.innerText = `Rs. ${totalAmount} | Total Items: ${totalQuantity}`;
}


function updateTotalOnChangingQuantity(){
  const quantities = document.querySelectorAll(".quantity-amount");
  for(let quantityInput of quantities){
    quantityInput.addEventListener('input', (e)=>{
      let tableNumber = e.path[6].querySelector("#modal-header-text").innerText.substr(6)
      
      let foodItemIndex = e.path[2].querySelectorAll('td')[0].innerText

      let newQuantity = e.path[2].querySelectorAll('td')[2].querySelector(".quantity-amount").value

      tablesList[tableNumber-1].bill[foodItemIndex-1].quantity = newQuantity;
      generateBillingTable(tableNumber)
    })
  }
}

function dropItemFromTable(){
  const dropBtns = document.querySelectorAll('.drop');

  for(let dropBtn of dropBtns){
    dropBtn.addEventListener('click', dropItem);
  }
}

function dropItem(e) {

  let tableNumber = e.path[6].querySelector("#modal-header-text").innerText.substr(6)

  let foodItemIndex = e.path[2].querySelectorAll('td')[0].innerText
  
  tablesList[tableNumber-1].bill.splice(foodItemIndex-1, 1);

  generateBillingTable(tableNumber)
}

const generatorButtons = document.querySelectorAll(".generate")

for(let generatorButton of generatorButtons){
  generatorButton.addEventListener('click', ()=>{
      if(confirm('Are you sure you waht to generate the bill?')){
        tablesList[this.tableNumber-1].bill = []
        generateBillingTable(tableNumber)
      }
    })
}