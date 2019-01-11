var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');


var WorkshopSchema = new mongoose.Schema({
    title: String,
    date: Date,
    place: String
})
WorkshopSchema.plugin(mongoosePaginate);

const Workshop = mongoose.model('Workshop', WorkshopSchema)

module.exports = Workshop;