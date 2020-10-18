
console.log('js loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jq loaded');
    getListToDo(); // get tabel from db on page load

    // click listener for submit button
    // click listener for complete task. Is this going to be a div?
    // click listen for delete option
}

// this function will create an ajax request to import the current list of to items in the SQL db
function getListToDo() {
    $.ajax({
        method: 'GET',
        url: '/toDo'
    }).then( (response) => {
        console.log('toDo GET request', response );
        appendToDom(response);
    }).catch( (error) => {
        console.log('toDo error in GET request', error);
    });
    // callback append to DOM function
}
// this function will append items to the dom whenever the client makes a change
function appendToDom(data) {
    console.log(data);
}
// this function will create an ajax request to delete an item from the DB
// then call back the get function and append function to update the DOM
function deleteItem(params) {
    $.ajax({
        method: 'DELETE',
        url: `/todo/${id}`
    }).then( (reponse) => {
        console.log('response from DELETE request', reponse);
    }).catch( (error) =>{
        console.log('error from DELETE request', error);
    });
}
// this function will create and ajax request to update the "done" column for a given to do item
// then call back the get function and append function to update the DOM
function toDone(params) {
    $.ajax({
        method: 'PUT',
        url: `/done/${id}`
    }).then( (response) => {
        console.log('response from PUT request', response);
    }).catch( (error) => {
        console.log('error from PUT request', error);
    });
}
// this function will create a POST ajax request to add a new record to the database 
// then call back the get function and append function to update the DOM
function addToDo(params) {

    let toDoItem = {

    }

    $.ajax({
        method: 'POST',
        url: 'toDo',
        data: toDoItem
    }).then( (response) => {
        console.log('response from POST request', response);
    }).catch( (error) => {
        console.log('error from POST request', error); 
    })
}