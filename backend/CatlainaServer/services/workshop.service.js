
// Gettign the Mongoose Model
var Workshop = require('../models/workshop.model');


// Saving the context of this module inside the _the variable
_this = this

// Async function to get the Workshop List

exports.getWorkshops = async function (query, page, limit) {

    // Options setup for the mongoose paginate

    var options = {
        page,
        limit
    }

    // Try Catch the awaited promise to handle the error 

    try {
        var workshops = await Workshop.paginate(query, options)

        // Return the workshop list that was retured by the mongoose promise

        return workshops;

    } catch (e) {

        // return a Error message describing the reason 

        throw Error('Error while Paginating Workshops')
    }
}

exports.createWorkshop = async function (workshop) {

    // Creating a new Mongoose Object by using the new keyword

    var newWorkshop = new Workshop({
        title: workshop.title,
        place: workshop.place,
        date: workshop.date
    })

    try {
        var savedWorkshop = await newWorkshop.save()
        return savedWorkshop;

    } catch (e) {

        // return a Error message describing the reason     

        throw Error("Error while Creating Workshop")
    }
}

exports.updateWorkshop = async function (workshop) {
    var id = workshop.id

    try {
        //Find the old Workshop Object by the Id
        var originalWorkshop = await Workshop.findById(id);
    } catch (e) {
        throw Error("Error occured while Finding the Workshop");
    }

    // If no old Todo Object exists return false
    if (!originalWorkshop) {
        return false;
    }

    console.log(originalWorkshop)

    //Edit the workshop Object

    originalWorkshop.title = workshop.title
    originalWorkshop.date = workshop.date
    originalWorkshop.place = workshop.place


    console.log(originalWorkshop)

    try {
        var savedWorkshop = await originalWorkshop.save()
        return savedWorkshop;
    } catch (e) {
        throw Error("And Error occured while updating the Workshop");
    }
}

exports.deleteWorkshop = async function (id) {

    // Delete the Workshop

    try {
        var deleted = await Workshop.remove({ _id: id })
        if (deleted.n === 0) {
            throw Error("Workshop could not be deleted")
        }
        return deleted
    } catch (e) {
        throw Error("Error Occured while Deleting the Workshop")
    }
}
