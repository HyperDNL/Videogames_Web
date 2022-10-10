import { Router } from 'express';
import { createVideogame, deleteVideogame, getVideogame, getVideogames, updateVideogame } from '../controllers/videogames.controllers.js';

const router = Router();

router.get('/videogames', getVideogames);

router.get('/videogames/:id', getVideogame);

router.post('/videogames', createVideogame);

router.put('/videogames/:id', updateVideogame);

router.delete('/videogames/:id', deleteVideogame);

export default router;