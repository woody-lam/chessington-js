import MultiMovePiece from './MultiMovePiece';
import Square from '../square'

export default class Rook extends MultiMovePiece {
    constructor(player, steps = [new Square(0,1), new Square(1,0)]) {
        super(player, steps);
    }
}
