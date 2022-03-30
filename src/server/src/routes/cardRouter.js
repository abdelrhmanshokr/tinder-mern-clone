import express from 'express';

import cardController from '../controllers/cardController.js';

const router = express.Router();

router.get('/', cardController.get_all_cards);
router.post('/', cardController.add_new_card);

export default router;
