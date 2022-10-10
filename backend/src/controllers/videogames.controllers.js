import Videogame from '../models/Videogame.js';

export const getVideogames = async (req, res) => {
    try {
        const videogames = await Videogame.find();
        return res.json(videogames);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getVideogame = async (req, res) => {
    try {
        const { id } = req.params;
        const videogame = await Videogame.findById(id);
        if (!videogame) return res.sendStatus(404);
        return res.json(videogame);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createVideogame = async (req, res) => {
    try {
        const { title, description, developer, year, price, platform, image_cover, image_land } = req.body;
        const newVideogame = new Videogame({ title, description, developer, year, price, platform, image_cover, image_land });
        await newVideogame.save();
        return res.json(newVideogame);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateVideogame = async (req, res) => {
    try {
        const { id } = req.params;
        const bodyUpdate = req.body;
        const updatedVideogame = await Videogame.findByIdAndUpdate(id, { $set: bodyUpdate }, { new: true });
        return res.json(updatedVideogame);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteVideogame = async (req, res) => {
    try {
        const { id } = req.params;
        const videogameRemoved = await Videogame.findByIdAndDelete(id);
        if (!videogameRemoved) return res.sendStatus(404);
        res.sendStatus(204);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
}