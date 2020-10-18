
console.log('js loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jq loaded');
    getListToDo(); // get tabel from db on page load
    // click listener for submit button
    $('#submitItem').on('click', addToDo)
    // click listener for complete task. 
    $('#output').on('change', '.checkbox', getCompStatus);
    // click listen for delete option
    $('#output').on('click', '.delBtn', deleteItem)
}

// this function will create an ajax request to import the current list of to items in the SQL db
function getListToDo() {
    $.ajax({
        method: 'GET',
        url: '/toDo'
    }).then( (response) => {
        appendToDom(response);
    }).catch( (error) => {
        console.log('toDo error in GET request', error);
    });
    // callback append to DOM function
}

// this function will append items to the dom whenever the client makes a change
function appendToDom(data) {
    console.log(data);
    let tableRow = $('#output')
        tableRow.empty(); // clear out appended rows before refreshed data is pulled in
    data.forEach(element => {
        tableRow.append(
            `
            <tr data-done='${element.done}' data-id='${element.id}'>
                <td>${element.itemToDo}</td>
                <td><input type="checkbox" id='box${element.id}' class='checkbox'></td>
                <td><button class="delBtn btn-danger">Delete</button></td>
            </tr>
            `
        )   
        if (element.done === true) {  // perhaps a messy way to access this option during the draw function like this
                                      // this will check the box true if the item is marked as such in the sql DB
            $(`#box${element.id}`).prop('checked', true);
            styleCompleted(element.id); // passing in the ID which the function will use to locate and flip the class on the DOM
        }
    });
}

// this function will create an ajax request to delete an item from the DB
// then call back the get function and append function to update the DOM
function deleteItem() {
    let idOfItem = $(this).closest('tr').data('id');
    $.ajax({
        method: 'DELETE',
        url: `/todo/${idOfItem}`
    }).then( (reponse) => {
        console.log('response from DELETE request', reponse);
        getListToDo()
    }).catch( (error) =>{
        console.log('error from DELETE request', error);
    });
}
// this function will create and ajax request to update the "done" column for a given to do item
// then call back the get function and append function to update the DOM
function updateCompletion(id, state) {
    $.ajax({
        method: 'PUT',
        url: `/todo/done/${id}`,
        data: {state: state}
    }).then( (response) => {
        console.log('response from PUT request', response);
        getListToDo()
    }).catch( (error) => {
        console.log('error from PUT request', error);
    });
}
// this function will create a POST ajax request to add a new record to the database 
// then call back the get function and append function to update the DOM
function addToDo() {
    let noteInput = $('#toDoNote').val() // grab the note input text
    let recordObj = {  
        itemToDo: noteInput
    } // this obj contains the information required to add this item to SQL DB
    console.log('creating POST request to add item');
    $.ajax({
        method: 'POST',
        url: 'toDo',
        data: recordObj 
    }).then( (response) => {
        console.log('response from POST request', response);
        getListToDo()
        $('#toDoNote').val('')// empty input on successful POST 
    }).catch( (error) => {
        console.log('error from POST request', error); 
    })
}

function getCompStatus() {
    let idOfItem = $(this).closest('tr').data('id'); // grab the ID added during appendToDom function. Stored in row header.
    let toDoState = $(this).closest('tr').data('done'); // grab the state of completion added during appendToDom function. Stored in row header.
    updateCompletion(idOfItem, toDoState); // pass off this information to the the updateCompletion function
}


function styleCompleted(elementID) {  // called during append function loop. 
    let el = $(`#box${elementID}`)
    el.closest('tr').addClass('table-success'); //toggles table row background color using bootstrap
}