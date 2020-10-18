
# To Do app Weekeend Project

## Description

Duration: Weekend 

This is a simple 'to do' app project I created. This app includes a server(express), and a database(SQL) that allows a client to create, read, update, or delete task items on site. 


## Site image:
![SITE_IMAGE](/instructions/siteImg.png =400x400)


### Prerequisites

- [Node.js](https://nodejs.org/en/)
    - body-parser
    - PG
    - SQL (Postgresql)  //  Postico (used for setup)


## Installation

Instructions on how to spin up this app yourself are as follows: 

1. Create a database named `weekend-to-do-app`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. Postico is the recommended tool to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install` to install all dependecies (PG, body-parser, and express)
4. `npm start` can be used to initilize the server.
5. default port for express is set to 5000. 127.0.0.1:5000 or localhost:5000 can be used to reach the site on your local machine. 

## Usage

1. the landing page will show a list of to do apps already in the sql database.
2. records with a green background on the table and a 'checked' checkbox are 'done'.
3. record with a grey background and an 'unchecked' checkbox are 'not completed yet'.
4. typing a note of the task disciption to be completed into the 'add a note' and clicking the 'submit' button will add the item to the database and display it as 'not complete' on the site.
5. the delete option will appear on all record rows on the table, and will allow the user to remove the item from the table. It will also be removed from the database
6. checking or unchecking the box will mark change the 'completion' status of the task, and update the record on the database.


## Built With
javascript
node.js (express.js, PG, body-parser)
SQL
html/CSS/Bootstrap

## Acknowledgement
This project was completed during my completion of the Prime Digital Academy program. I want to thank the people at Prime for equiping me with the tools necessary to complete this app.

## Support
If you have suggestions or issues, please email me at sgermscheid@gmail.com
