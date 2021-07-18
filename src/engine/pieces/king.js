import SingleMovePiece from './singlemovepiece';
import Square from '../square';

export default class King extends SingleMovePiece {
    constructor(player, steps = [new Square(1,0), new Square(1,1), new Square(0,1), new Square(1,-1)]) {
        super(player, steps);
        this.name = "King"
    }
}
