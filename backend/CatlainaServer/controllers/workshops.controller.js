
// Accessing the Workshop Service

var WorkshopService = require('../services/workshop.service')

// Saving the context of this module inside the _the variable

_this = this


// Async Controller function to get the To do List

exports.getWorkshops = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 50; 

    try{
        writeLog("Getting workshop list")
        var workshops = await WorkshopService.getWorkshops({}, page, limit)
        
        // Return the workshop list with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: workshops, message: "Succesfully recieved Workshops"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createWorkshop = async function(req, res, next){

    // Req.Body contains the form submit values.
    writeLog("Storing a new workshop");
    console.log(req.body);

    var workshop = {
        title: req.body.title,
        date: req.body.date,
        place: req.body.place,
    }

    console.log("Workshop: ");
    console.log(workshop)


    try{
        
        // Calling the Service function with the new object from the Request Body
    
        var createdWorkshop = await WorkshopService.createWorkshop(workshop)
        return res.status(201).json({status: 201, data: createdWorkshop, message: "Succesfully created workshop"})
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "Workshop creation was unsuccesfull"})
    }
}

exports.updateWorkshop = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var workshop = {
        id,
        title: req.body.title ? req.body.title : null,
        date: req.body.date ? req.body.date : null,
        place: req.body.place ? req.body.place : null
    }

    try{
        var updatedWorkshop = await WorkshopService.updateWorkshop(workshop)
        return res.status(200).json({status: 200, data: updatedWorkshop, message: "Succesfully updated workshop"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeWorkshop = async function(req, res, next){

    var id = req.params.id;
    if(!id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    try{
        var deleted = await WorkshopService.deleteWorkshop(id)
        return res.status(204).json({status:204, message: "Succesfully Todo Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}

function writeLog(message){
    console.log("WorkshopController says: " + message);
}