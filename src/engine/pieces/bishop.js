import MultiMovePiece from './multimovepiece';
import Square from '../square';

export default class Bishop extends MultiMovePiece {
    constructor(player, steps = [new Square(1,1), new Square(1,-1)]) {
        super(player, steps);
    }
}
