import SingleMovePiece from './singlemovepiece';
import Square from '../square';

export default class Knight extends SingleMovePiece {
    constructor(player, steps = [new Square(1,0), new Square(1,1), new Square(0,1), new Square(1,-1)]) {
        super(player, steps);
    }
}
