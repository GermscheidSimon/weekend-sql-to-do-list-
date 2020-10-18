const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



// POST - CREATE
router.post('/', (req, res)=>{
    console.log('toDo POST request started');
    
    let itemToDo = req.body.itemToDo // obj containing data needed to add item to db
                                     // the default state of the done field is false. Can be checked off after being added to the page
    let queryText = `INSERT INTO "toDoList" ("itemToDo") 
                     VALUES ($1);`;
    pool.query(queryText, [itemToDo]).then((result)=>{
        console.log('result from POST', result.rowCount, 'rows inserted');
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error from POST', error);
        res.sendStatus(500)
    });
});

// GET - READ
router.get('/', (req, res)=>{
    // define query text
    let queryText = `SELECT * FROM "toDoList";`
    // add log information to help with troubleshooting
    console.log('/todo/ GET express call started');
    // define pool request
    pool.query(queryText).then((results)=>{
        console.log('request successful');
        res.send(results.rows)
    //add catch
    }).catch((error)=>{
        console.log('request failed', error); 
    });
});

// PUT - UPDATE
router.put('/done/:id', (req, res)=>{
    console.log('/todo/done/:id PUT request call started');

    let id = req.params.id; // id referenced from serial ID in DB
    let state = req.body.state;  // state of task completion for given ID
    console.log('id and state to update', id, state);
    let queryText = ''; // declare query text for below conditional
    // set query based on state.
    if (state === 'false') {
        queryText = `UPDATE "toDoList" SET "done" = 'true' WHERE "id" = $1;`
    } else if (state === 'true') {
        queryText = `UPDATE "toDoList" SET "done" = 'false' WHERE "id" = $1;`
    }
    // start query promise
    pool.query(queryText, [id]).then((result)=>{
        console.log('result from put', result.command, 'used to update', result.rowCount, 'rows');
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('error from POST', error);
        res.sendStatus(500)
    });
});

// DELETE - DELETE 
router.delete('/:id', (req, res)=>{
    console.log('/todo/:id DELETE express call started');
    // define query text
    let recordID = req.params.id // define item ID parameter
    let queryText = `DELETE FROM "toDoList" WHERE "id" = $1`
    // add log information to help with troubleshooting
    pool.query(queryText, [recordID]).then((result)=>{
        console.log('Delete success!');
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('delete fauled', error);
        res.sendStatus(500);
    })
});


module.exports = router;