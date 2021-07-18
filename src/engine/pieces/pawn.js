import Piece from './piece';
import Player from '../player';

export default class Pawn extends Piece {
    
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var currentSquare = Object.assign({}, board.findPiece(this));
        (this.player === Player.WHITE) ? currentSquare.row++ : currentSquare.row--;
        if (this.isMoveImpossible(board, currentSquare)) {
            return []
        }

        var possibleMoves = [currentSquare]

        if (this.movesTaken === 0){
            currentSquare = Object.assign({}, possibleMoves[0]);
            (this.player === Player.WHITE) ? currentSquare.row++ : currentSquare.row--;
            possibleMoves.push((this.isMoveImpossible(board, currentSquare)) ? {} : currentSquare);
        } 

        return possibleMoves;
    }
}
