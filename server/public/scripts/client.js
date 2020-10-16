console.log('js loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jq loaded');

    // click listener for submit button
    // click listener for complete task. Is this going to be a div?
    // click listen for delete option
}

// this function will create an ajax request to import the current list of to items in the SQL db
function getListToDo(params) {
    
}
// this function will append items to the dom whenever the client makes a change
function appendToDom(params) {
    
}
// this function will create an ajax request to delete an item from the DB
// then call back the get function and append function to update the DOM
function deleteItem(params) {
    
}
// this function will create and ajax request to update the "done" column for a given to do item
// then call back the get function and append function to update the DOM
function toDone(params) {
    
}
// this function will create a POST ajax request to add a new record to the database 
// then call back the get function and append function to update the DOM
function addToDo(params) {
    
}