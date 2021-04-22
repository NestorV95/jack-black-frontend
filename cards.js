class Card{
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
        this.img = './Cards/card_' + this.suit + '_' + this.name + '.png';
    }
}

let suits = ['clubs', 'spades', 'diamonds', 'hearts']
let names = ['A', '02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K']
let values = [1,2,3,4,5,6,7,8,9,10,10,10,10]

const drawCard = () =>{ 
    suit_num = Math.floor(Math.random() * 4)
    name_num = Math.floor(Math.random() * 13)
    return new Card(suits[suit_num], names[name_num], values[name_num])
}
