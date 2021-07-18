import MultiMovePiece from './MultiMovePiece';
import Square from '../square'

export default class Queen extends MultiMovePiece {
    constructor(player, steps = [new Square(0,1), new Square(1,0), new Square(1,1), new Square(1,-1)]) {
        super(player, steps);
    }
}
