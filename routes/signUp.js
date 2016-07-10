var mysql = require("./mysql");

function goToSignUpVolunteerPage(req,res){
	console.log("In goToSignUpVolunteerPage");
    res.render('signUpPage');
}

function goToSignUpNPOPage(req,res){
	console.log("In goToSignUpNPOPage");
    res.render('npoSignUp');
}

function afterSignUpAsNPO(req,res){
	console.log("In afterSignUpPage");
    var sqlQuery = "Insert into npo (`name`,`npoType`,`email`, `pass`, `startDate`, `location`) VALUES  " +
    "( '"+req.body.orgName+"' , '"+ req.body.orgType +"' ,'" + req.body.email +"' ,'" + req.body.password +"','"+ req.body.startDate + req.body.location +"')";
    console.log(sqlQuery);
    mysql.insertOperation(function(err){
        var result;
        if(err){
            result = {"statusCode" : 401};
            console.log("Error while inserting data");
            res.send(result);
        }else{
            result = {"statusCode" : 200};
            console.log("Data inserted successfully");
            res.send(result);
        }
    },sqlQuery);
}


function afterSignUpAsVolunteer(req,res){
	console.log("In afterSignUpPage");
    var sqlQuery = "Insert into volunteer(`emailid`,`pass`,`firstName`, `lastName`) VALUES  " +
    "( '"+req.body.email+"' , '"+ req.body.pass +"' ,'" + req.body.firstName +"' ,'" + req.body.lastName+"')";
    console.log(sqlQuery);
    mysql.insertOperation(function(err){
        var result;
        if(err){
            result = {"statusCode" : 401};
            console.log("Error while inserting data");
            res.send(result);
        }else{
            result = {"statusCode" : 200};
            console.log("Data inserted successfully");
            res.send(result);
        }
    },sqlQuery);
}

exports.goToSignUpNPOPage=goToSignUpNPOPage;
exports.goToSignUpVolunteerPage=goToSignUpVolunteerPage;
exports.afterSignUpAsNPO=afterSignUpAsNPO;
exports.afterSignUpAsVolunteer=afterSignUpAsVolunteer;