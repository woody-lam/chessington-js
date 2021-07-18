import Piece from './piece';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var currentSquare = board.findPiece(this);
        (this.player === Player.WHITE) ? currentSquare.row++ : currentSquare.row--;
        return currentSquare;
    }
}
