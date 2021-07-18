import SingleMovePiece from './singlemovepiece';
import Square from '../square';

export default class Knight extends SingleMovePiece {
    constructor(player, steps = [new Square(1,2), new Square(1,-2), new Square(2,1), new Square(2,-1)]) {
        super(player, steps);
    }
}
