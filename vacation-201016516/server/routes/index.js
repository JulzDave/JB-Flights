var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql')

pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    connectionLimit: 10
});

//---------------determine if session exists----------------------------

router.get('/prelog', async (req, res, next) => {
    try {
        res.json(req.session)
    } 
    catch (err) {
        console.log(err);
    }
});

//----------------------------------------------------------------------

router.post('/register', async (req, res, next) => {

    try {
        let userExistance = await pool.query(`
        SELECT * FROM vacationproj.users
        WHERE username = '${req.body.regUsername}'`
        )

        if (userExistance.length === 0) {
            req.session.user = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.regUsername,
                password: req.body.regPassword,
                following: "[]"
            }

            let data = await pool.query(`
        INSERT INTO vacationproj.users (firstname, lastname, username, password, following)
        VALUES (
            '${req.session.user.firstname}',
            '${req.session.user.lastname}',
            '${req.session.user.username}',
            '${req.session.user.password}',
            '${req.session.user.following}');`
            )

            res.json([{
                id: data.insertId,
                firstname: req.session.user.firstname,
                lastname: req.session.user.lastname,
                username: req.session.user.username,
                password: req.session.user.password,
                following: req.session.user.following
            }])
        }

        else {
            res.json({ taken: "User name already taken" })
        }
    }
    catch (err) {
        console.log(err);
    }
});

//----------------------------------------------------------------------

router.post('/login', async (req, res, next) => {
    try {
        let data = await pool.query(`
        SELECT * FROM vacationproj.users
        WHERE username = '${req.body.username}' AND password = '${req.body.password}'`
        )

        if (data.length > 0) {
            req.session.user = {
                firstname: data[0].firstname,
                lastname: data[0].lastname,
                username: data[0].username,
                password: data[0].password,
                following: data[0].following
            }

            res.json(data)
        }

        else {
            res.json({ noUser: "username or password incorrect" })
        }
    }
    catch (err) {
        console.log(err);
    }
});

//----------------------------------------------------------------------

router.get('/adddeal', async (req, res, next) => {

    try {
        let price = parseInt(req.query.dealPrice)
        let data = await pool.query(`
           INSERT INTO vacationproj.deals (destination, image, description, departure, arrival, price, following)
           VALUES (
               '${req.query.dealDestination}',
               '${req.query.dealImage}',
               '${req.query.dealDescription}',
               '${req.query.dealDeparture}',
               '${req.query.dealArrival}',
               ${price},
               '[]');`
        )

        res.json(data)
    }
    catch (err) {
        console.log(err);
    }
});

// if an image is not included in the update, previously designated image is retained 

router.get('/editDeal', async (req, res, next) => {
    try {
        let id = parseInt(req.query.dealID)
        let price = parseInt(req.query.dealPrice)
    
        if (req.query.dealImage == "uploads/") {
            var data = await pool.query(`
        UPDATE vacationproj.deals
        SET destination ='${req.query.dealDestination}',
         description='${req.query.dealDescription}',
          departure='${req.query.dealDeparture}',
           arrival='${req.query.dealArrival}',
           price=${price}
    
        WHERE id = ${id};`)
        }
        else {
            var data = await pool.query(`
        UPDATE vacationproj.deals
        SET destination ='${req.query.dealDestination}',
         description='${req.query.dealDescription}',
          departure='${req.query.dealDeparture}',
           arrival='${req.query.dealArrival}',
           price=${price},
           image='${req.query.dealImage}'
    
        WHERE id = ${id};`)
        }
    
        res.json(data)
    } 
    catch (err) {
            console.log(err);
        }
});

//------------------------Deletes the whole deal ----------------------

router.get('/delete_deal', async (req, res, next) => {

    try {
        let id = parseInt(req.query.dealID)
    
        let data = await pool.query(`DELETE FROM vacationproj.deals WHERE id=${id};`)
    
        res.json(data)
    } catch (err) {
            console.log(err);
        }
});

//----------------Graph will also update on follow---------------------

router.get('/follow_deal', async (req, res, next) => {
    try {
        let dealID = parseInt(req.query.dealID)
        let userID = parseInt(req.query.userID)
    
        let dealData = await pool.query(`
        UPDATE vacationproj.deals
        SET following ='${req.query.dealFollows}'
    
        WHERE id = ${dealID};`)
    
        let userData = await pool.query(`
        UPDATE vacationproj.users
        SET following ='${req.query.userFollows}'
    
        WHERE id = ${userID};`)
    
        // let allQueryData =  dealData.concat(userData)
        res.json([userData])
    } 
    catch (err) {
            console.log(err);
        }
});

//----------------------------------------------------------------------

router.get('/logout', async (req, res, next) => {

    try {
        req.session.destroy()
        res.json([{ msg: "Session destroyed" }])
    } catch (err) {
            console.log(err);
        }
});

//----------------------------------------------------------------------

// router.get('/createdb', async (req, res, next) => {
    // try {
        //   await pool.query('CREATE DATABASE vacationproj');
        //   await pool.query(`CREATE TABLE vacationproj.users(
        //                   id INT AUTO_INCREMENT NOT NULL,
        //                   firstname VARCHAR(20) NOT NULL,
        //                   lastname VARCHAR(20) NOT NULL,
        //                   username VARCHAR(20) NOT NULL,
        //                   password VARCHAR(20) NOT NULL,
        //                   following VARCHAR(1000) NOT NULL,
        //                   PRIMARY KEY (id))`);
        //   await pool.query(`CREATE TABLE vacationproj.deals(
        //                   id INT AUTO_INCREMENT NOT NULL,
        //                   destination VARCHAR(20) NOT NULL,
        //                   description VARCHAR(600) NOT NULL,
        //                   image VARCHAR(500) NOT NULL,
        //                   departure VARCHAR(20) NOT NULL,
        //                   arrival VARCHAR(20) NOT NULL,
        //                   price INT NOT NULL,
        //                   following VARCHAR(1000) NOT NULL,
        //                   PRIMARY KEY (id))`);
        // res.json([{Database:"vacationproj"}, {tables: ["users", "deals"]}, {msg:"The admin profile is inside the 'users' table --- both user name and password are 'Admin'"}])
    // } 
    // catch (err) {
    //         console.log(err);
    //     }
// });

module.exports = router;
