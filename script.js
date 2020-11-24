const taskName = document.getElementById('task-name');
const taskDescription = document.getElementById('description');
const dateNow = document.getElementById('date-now');
const table = document.getElementById('table');
const button = document.getElementById('button');

// This is the array that will hold the todo list items
let todoItems = [];

let btn = document.getElementById('button');

function displayItems() {
  console.log(taskName.value);
  console.log(taskDescription.value);
  console.log(dateNow.value);
  console.log(btn.value)


  
  btn.addEventListener('click', () => {
    //let r = document.getElementByNanme('rate');
    
    btn.forEach((button) => {
      if (btn.checked === urgent )  {
        return btn.value;
      } else {
        console.log('not-urgant')
      }
    })
  });


  
};





//First task is to create  a table

  
  const tableElements = document.createElement('table')
 const header = document.createElement('th'); // create header node
  var row = document.createElement('tr'); // create row node
      var col = document.createElement('td'); // create column node
      var col2 = document.createElement('td'); // create second column node
      row.appendChild(col); // append first column to row
      row.appendChild(col2); // append second column to row
      col.innerHTML = taskName.value; // put data in first column
      col2.innerHTML = taskDescription.value; // put data in second column
      table.appendChild(row); // append row to table
    


// Create a new table when clicking on the "Submit" button
//function newTable()


  


// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }



// Display list on parent page







// Function to edit the list put in












