const modalDiv = document.querySelector(".modals");
const numberOfTables = document.querySelectorAll("#tables .table").length;
console.log(numberOfTables)
for(let i = 1; i <= numberOfTables; i++){
    let div = document.createElement('div');
    div.innerHTML = `
        <div id="my-modal-${i}" class="modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 id="modal-header-text">Table ${i}</h2>
                        <span class="close">&times;</span>
                    </div>
                    <div class="modal-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary generate">Generate Bill</button>
                    </div>
                </div>
            </div>`
    
    modalDiv.appendChild(div);
}

// Get DOM Elements
const tableCards = document.querySelectorAll('.card.table');
const closeBtns = document.querySelectorAll('.close');

// Events
for(let tableCard of tableCards){
  tableCard.addEventListener('click', openModal);
}

for(let closeBtn of closeBtns){
  closeBtn.addEventListener('click', closeModal);
}


window.addEventListener('click', outsideClick);

var tableNumber = -1;

// Open
function openModal(e) {
  tableNumber = this.querySelector(".card-header").innerText.substring(6)
  const modal = document.querySelector('#my-modal-' + tableNumber);
  modal.style.display = 'block';
}

// Close
function closeModal() {
  const modal = document.querySelector('#my-modal-' + tableNumber);
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  const modal = document.querySelector('#my-modal-' + tableNumber);
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}