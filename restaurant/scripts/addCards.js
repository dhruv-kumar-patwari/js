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
    }
]

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
    }
]

const menuItemsDiv = document.getElementById('menu-items'); 


for (let menuItem of menuItems){
    const cardDiv = document.createElement('div');
    cardDiv.className ="card text-start menu"
    cardDiv.draggable = true;

    const cardHeader = document.createElement('div');
    cardHeader.className ="card-header"
    cardHeader.innerText = menuItem.name
    
    const cardBody = document.createElement('div');
    cardBody.className ="card-body"
    cardBody.innerText = `Rs. ${menuItem.price}`

    const courseTypeSection = document.createElement('div');
    courseTypeSection.className ="d-none course"
    courseTypeSection.innerText = `Rs. ${menuItem.course}`

    cardDiv.appendChild(cardHeader)
    cardBody.appendChild(courseTypeSection)
    cardDiv.appendChild(cardBody)

    menuItemsDiv.appendChild(cardDiv);
}

const tablesDiv = document.getElementById('tables'); 


for (let table of tablesList){
    const cardDiv = document.createElement('div');
    cardDiv.className ="card text-start table"

    const cardHeader = document.createElement('div');
    cardHeader.className ="card-header"
    cardHeader.innerText = table.name
    
    const cardBody = document.createElement('div');
    cardBody.className ="card-body"
    cardBody.innerText = `Rs. ${table.total} | Total Items: ${table.quantity}`

    cardDiv.appendChild(cardHeader)
    cardDiv.appendChild(cardBody)

    tablesDiv.appendChild(cardDiv);
}