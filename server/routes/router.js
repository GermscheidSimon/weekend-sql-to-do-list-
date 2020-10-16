const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// POST - CREATE
app.post('/', (req, res)=>{
    // define query text
 
    // add log information to help with troubleshooting
    
    // define pool request
    //add catch
})

// GET - READ
app.get('/', (req, res)=>{
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
app.put()('/done/:id', (req, res)=>{
    // define query text
    // add log information to help with troubleshooting
    // define pool request
    //add catch
})

// DELETE - DELETE 
app.delete('/:id', (req, res)=>{
    // define query text
    // add log information to help with troubleshooting
    // define pool request
    //add catch
})


module.exports = router;