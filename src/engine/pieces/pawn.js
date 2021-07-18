import Piece from './piece';
import Player from '../player';

export default class Pawn extends Piece {
    
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var possibleMoves = [Object.assign({}, board.findPiece(this))];
        (this.player === Player.WHITE) ? possibleMoves[0].row++ : possibleMoves[0].row--;

        if (this.movesTaken === 0){
            possibleMoves.push(Object.assign({}, possibleMoves[0]));
            (this.player === Player.WHITE) ? possibleMoves[1].row++ : possibleMoves[1].row--;
        } 

        return possibleMoves;
    }
}
