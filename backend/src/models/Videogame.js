import mongoose from "mongoose";

const videogameSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        developer: {
            type: String,
            required: true,
            trim: true,
        },
        year: {
            type: Number,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            trim: true,
        },
        platform: {
            type: Array,
            required: true
        },
        image_cover: {
            type: String,
            required: true,
            trim: true,
        },
        image_land: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("Videogame", videogameSchema);