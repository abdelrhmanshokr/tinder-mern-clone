import Card from '../models/cards.js';

const get_all_cards =  async(req, res) => {
    try{
        const allCards = await Card.find();
        
        return res.status(200).send(allCards);
    }catch(err){
        return res.status(404).json(err.message);
    }
}

const add_new_card = async(req, res) => {
    try{
        const { name, imageUrl } = req.body;
        const newCard = new Card({
            name: name,
            imageUrl: imageUrl
        });
        await newCard.save();

        return res.status(201).send('New card added successfully');
    }catch(err){
        return res.status(500).json(err.message);
    }
} 

export default { get_all_cards, add_new_card }