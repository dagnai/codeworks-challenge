// bucket for addresses aka array of objexts
let myAddresses = []
//selecting the element - button
const createBtn = document.getElementById("create-btn")

// Event Listener + Functions
createBtn.addEventListener("click", function(e) {
    e.preventDefault()
    //validation function has pushing address to array and cleanup and addToTable
    validationWithPush()
    //check if inputs were pushed to array
    //console.log(myAddresses)
    deleteRow()
})

// DELETING A ROW IN THE TABLE //
// copied and adjusted from: https://morioh.com/p/6a87a32772d6
function deleteRow() {
    var index, table = document.getElementById('table');
    console.log(document.getElementById('table'))
    for(var i = 1; i < table.rows.length; i++)
    {
    table.rows[i].cells[4].onclick = function()
    {
        var c = confirm("do you want to delete this row?");
        if (c === true)
        // could do: if (c) (based on truthy or falsy values)
        {
            index = this.parentElement.rowIndex;
            table.deleteRow(index);
        }
    };
}
}
// CLEANING UP THE FIELDS //
function cleanup() {
    document.getElementById("name-el").value = ''
    document.getElementById("surname-el").value = ''
    document.getElementById("phone-el").value = ''
    document.getElementById("address-el").value = ''
}
//Pushing addresses to array, as object
function pushAddresses() {
    myAddresses.push({
        name: document.getElementById("name-el").value,
        surname: document.getElementById("surname-el").value,
        phone: document.getElementById("phone-el").value,
        address: document.getElementById("address-el").value,
        })
}

// Validation with pushAddress function
function validationWithPush() {
    const nameVal = document.getElementById("name-el").value
    const surnameVal = document.getElementById("surname-el").value
    const phoneVal = document.getElementById("phone-el").value
    const addressVal = document.getElementById("address-el").value

    if (nameVal === '' || surnameVal === '' || phoneVal === '' || addressVal === '')

    // can also say:
    // if (!nameVal || !surnameVal || !phoneVal || !addressVal)

    {
        alert('Please fill in all fields!')
    } else {
        pushAddresses()
        cleanup()
        addToTable()
    }
    }


// SEARCH FIELD // searches through all the td, tr
//copied from https://stackoverflow.com/questions/9127498/how-to-perform-a-real-time-search-and-filter-on-a-html-table

function myFunction() {
  var input, filter, found, table, tr, td, i, j;
  input = document.getElementById("searchValue");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
          if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
              found = true;
          }
      }
      if (found) {
          tr[i].style.display = "";
          found = false;
      } else {
          tr[i].style.display = "none";
      }
  }
}

// Adding text from input fields to the table//
//Trash can taken from FontAwesome
function addToTable() {
  const list = document.querySelector('#table');
  const row = document.createElement('tr');

  for (let i = 0; i < myAddresses.length; i++) {

    row.innerHTML = `
    <td>${myAddresses[i].name}</td>
    <td>${myAddresses[i].surname}</td>
    <td>${myAddresses[i].phone}</td>
    <td>${myAddresses[i].address}</td>
    <td><button class="button-one"><i class="far fa-trash-alt"></i>Delete</button></td>
    `;
    //console.log(myAddresses.length)
    //console.log(row.innerHTML)
    //console.log(myAddresses[i])

    list.appendChild(row)

}
}

//some jQuery fadeIn
// copied from https://stackoverflow.com/questions/21360519/jquery-fadein-on-page-load
$(document).ready(function () {
    $('.hidden').fadeIn(1000).removeClass('hidden');
});