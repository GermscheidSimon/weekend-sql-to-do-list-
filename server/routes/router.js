const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



// POST - CREATE
router.post('/', (req, res)=>{
    // define query text
 
    // add log information to help with troubleshooting
    
    // define pool request
    //add catch
})

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
    
    let queryText = `UPDATE "toDoList" SET "done" = 'true' WHERE "id" = $1;`

    pool.query(queryText, [req.params.id]).then((result)=>{
        console.log('result from put', result);
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('error from POST', error);
        res.sendStatus(500)
    });
})

// DELETE - DELETE 
router.delete('/:id', (req, res)=>{
    console.log('/todo/:id DELETE express call started');
    // define query text
    let recordID = req.params.id // define item ID parameter
    let queryText = `DELETE FROM "todoList" WHERE "id" = $1`
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