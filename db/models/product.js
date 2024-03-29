import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const ProductsSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    image: String,
    productionCapacity: {
        type: Number,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },

}, { timestamps: true })

// ProductsSchema.index({ name: 'text' })

module.exports = mongoose.models.Product || mongoose.model('Product', ProductsSchema)