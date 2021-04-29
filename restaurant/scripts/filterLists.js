// Get the search bar
const filterMenu = document.getElementById('menu-search')
const filterTable = document.getElementById('table-search')

//Add event listener to search bar

filterMenu.addEventListener('keyup', filterMenuItems)
filterTable.addEventListener('keyup', filterTableItems)



function filterMenuItems(){
    const searchVal = filterMenu.value.toUpperCase();

    const menuItems = document.getElementById('menu-items')
    let listItems = menuItems.querySelectorAll(".menu")

    filterItems(searchVal, listItems)
}


function filterTableItems(){
    const searchVal = filterTable.value.toUpperCase();

    const tableNumbers = document.getElementById('tables')
    let listItems = tableNumbers.querySelectorAll(".table")

    filterItems(searchVal, listItems)
}


function filterItems(searchVal, listItems){
    for(let i = 0; i < listItems.length; i++){
        let value = listItems[i].querySelector(".card-header").innerHTML;
        let courseVal = "";

        try{
            courseVal = listItems[i].querySelector(".course").innerHTML.trim();
        }catch(e){}

        if(value.toUpperCase().indexOf(searchVal) > -1 ||
         courseVal.toUpperCase().indexOf(searchVal) > -1){

            listItems[i].style.display = "";
        }
        else{
            listItems[i].style.display = 'none';
        }
    }
}