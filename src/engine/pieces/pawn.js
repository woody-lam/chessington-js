import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Pawn extends Piece {
    
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var direction = (this.player === Player.WHITE) ? 1 : -1;
        var possibleMoves = this.getAvailableMovesToTake(board, direction)
        var currentSquare = Object.assign({}, board.findPiece(this));
        currentSquare.row += direction;
        if (this.isMoveImpossible(board, currentSquare)) return possibleMoves;

        possibleMoves.push(currentSquare);

        if (this.movesTaken === 0){
            currentSquare = Object.assign({}, possibleMoves[0]);
            currentSquare.row += direction;
            possibleMoves.push((this.isMoveImpossible(board, currentSquare)) ? {} : currentSquare);
        } 

        return possibleMoves;
    }

    getAvailableMovesToTake(board, direction) {
        var possibleMoves = [];
        for (var step of [new Square(1,1), new Square(1, -1)]){
            var currentSquare = Object.assign({}, board.findPiece(this));
            currentSquare.row += step.row * direction;
            currentSquare.col += step.col * direction;
            if (this.isMoveOutOfBounds(currentSquare)) break;
            if (this.isSquareOccupied(board, currentSquare)) {
                if (this.canPieceBeTaken(board, currentSquare)) possibleMoves.push(currentSquare);
            }
        }
        return possibleMoves;
    }
}
