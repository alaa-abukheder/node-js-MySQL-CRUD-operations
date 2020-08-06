//import connection var from connectDB.js
var connect=require('./connectDB.js') // {con(database connect),app(express object)}

//Get all users
    //when we request the path localhost:3000/employees from browser 
connect.app.get('/user', function(request, response) {	
connect.con.query('SELECT * FROM user', function(err, rows, fields) {
        if (!err){
            console.log("true");
            response.send(rows); // response :the output will be sent when request the path localhost:3000/employees
        }
        else
            console.log(err);
    })
});

//Get a specific user 
connect.app.get('/user/:id', function(req, res) { 
connect.con.query('SELECT * FROM user WHERE ID = ?', [req.params.id], function(err, rows, fields){ 
        if (!err)
            res.send(rows);
            //res.send(rows[0].Fname); //Get a specific data (name only) for user
        else
            console.log(err);
    })
});

//Delete a user // in delete command there is no return data in CAllBack function (rows)
    // and for delete we should use like postman module or program to see changes effects and apply the request for path localhost:3000/employees:1 (id)
    connect.app.delete('/user/:id', function(req, res) {
    connect.con.query('DELETE FROM user WHERE ID = ?', [req.params.id], function(err, rows, fields) {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

//Insert  user
connect.app.post('/user', function(req, res) {
    var sql = "INSERT INTO user (Fname, Lname) VALUES ('alaa', 'abukhader')";
    connect.con.query(sql,function(err, rows, fields)  {
        if (!err){
            console.log('insert one new row');
            res.send('insert complete');
          }
        else
            console.log(err);
    })
});

//Update  user
connect.app.put('/user/:id', function(req, res)  {
    var sql = "UPDATE user SET Fname = '666666' WHERE ID = ?";
    connect.con.query(sql, [req.params.id], function(err, rows, fields) {
        if (!err)
            res.send('Updated successfully');
        else
            console.log(err);
    })
});

/*
//Insert  user using Procedure
        //first you should write and apply the Procedure on server
        //second you should input values for variable using Postman for example
connect.app.post('/user', function(req, res)  {
    let user = req.body;
    var sql = "SET @ID = ?;SET @Fname = ?;SET @Lname = ?; \
    CALL INSERT_UPDATE(@ID,@Fname,@Lname);";
    connect.con.query(sql, [user.ID, user.Fname, user.Lname], function(err, rows, fields)  {
        if (!err)
            rows.forEach(element => {
                if(element.constructor == Array)
                res.send('Inserted user id : '+element[0].ID);
            });
        else
            console.log(err);
    })
});
*/
