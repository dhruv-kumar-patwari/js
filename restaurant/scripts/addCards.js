// Menu Items Object
const menuItems = [
    {
        name:"Veg Burger",
        price: 100,
        course:'main'
    },
    {
        name:"French Fries",
        price: 50,
        course:'starter'
    },
    {
        name:"Pizza",
        price: 300,
        course:'main'
    },
    {
        name:"Chicken Pizza",
        price: 200,
        course:'main'
    },
    {
        name:"Chicken Biryani",
        price: 150,
        course:'main'
    },
    {
        name:"Coke",
        price: 50,
        course:'beverage'
    },
    {
        name:"Sprite",
        price: 50,
        course:'beverage'
    },
    {
        name:"Coffee",
        price: 50,
        course:'beverage'
    },
    {
        name:"Tea",
        price: 50,
        course:'beverage'
    }
]


//  Tables Object
const tablesList = [
    {
        name:"Table 1",
        bill:[],
        total: 0,
        quantity: 0
    },
    {
        name:"Table 2",
        bill:[],
        total: 0,
        quantity: 0
    },
    {
        name:"Table 3",
        bill:[],
        total: 0,
        quantity: 0
    },
    {
        name:"Table 4",
        bill:[],
        total: 0,
        quantity: 0
    },
    {
        name:"Table 5",
        bill:[],
        total: 0,
        quantity: 0
    },
    {
        name:"Table 6",
        bill:[],
        total: 0,
        quantity: 0
    },
    {
        name:"Table 7",
        bill:[],
        total: 0,
        quantity: 0
    }
]

// Get the div to add menu Items
const menuItemsDiv = document.getElementById('menu-items'); 


for (let menuItem of menuItems){
    // Generate parent div for card
    const cardDiv = document.createElement('div');
    cardDiv.className ="card text-start menu"
    cardDiv.draggable = true;

    // Add Card Header
    const cardHeader = document.createElement('div');
    cardHeader.className ="card-header"
    cardHeader.innerText = menuItem.name
    
    // Add Card Body
    const cardBody = document.createElement('div');
    cardBody.className ="card-body"
    cardBody.innerText = `Rs. ${menuItem.price}`

    // Adding Hidden Field for course type
    const courseTypeSection = document.createElement('div');
    courseTypeSection.className ="d-none course"
    courseTypeSection.innerText = `${menuItem.course}`

    // Adding child divs to parent div
    cardDiv.appendChild(cardHeader)
    cardBody.appendChild(courseTypeSection)
    cardDiv.appendChild(cardBody)

    menuItemsDiv.appendChild(cardDiv);
}


// Get the div for table
const tablesDiv = document.getElementById('tables'); 


for (let table of tablesList){
    // Add parent div for card
    const cardDiv = document.createElement('div');
    cardDiv.className ="card text-start table"

    // Add card Header div
    const cardHeader = document.createElement('div');
    cardHeader.className ="card-header"
    cardHeader.innerText = table.name
    
    // Add Card Body
    const cardBody = document.createElement('div');
    cardBody.className ="card-body"
    cardBody.innerText = `Rs. ${table.total} | Total Items: ${table.quantity}`

    // Add card header and body to the parent card div
    cardDiv.appendChild(cardHeader)
    cardDiv.appendChild(cardBody)

    // Add the parent card div to the div containing rest of the cards
    tablesDiv.appendChild(cardDiv);
}