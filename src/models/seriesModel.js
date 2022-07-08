const mongoose = require ('mongoose')

const seriesSchema = mongoose.Schema({
    _id: { 
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    name: {
        type: String,
        required: true,
        unique: true,
    },

    genre: {
        type: String,
        required: true,
    },

    synopsis: String,

    liked: {
        type: Boolean,
        required: true,
    }

 }, { timestamps: true })

const Model = mongoose.model('series', seriesSchema)

module.exports = Model