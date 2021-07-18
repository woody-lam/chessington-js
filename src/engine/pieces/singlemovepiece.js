import Piece from './piece';

export default class SingleMovePiece extends Piece {
    
    constructor(player, steps) {
        super(player);
        this.steps = steps;
    }

    getAvailableMovesInOneDirection(board, step, size) {
        var currentSquare = Object.assign({}, board.findPiece(this));
        currentSquare.row += step.row * size;
        currentSquare.col += step.col * size;
        return currentSquare
    }

    getAvailableMoves(board) {
        var possibleMoves = [];
        for (var step of this.steps){
            possibleMoves = possibleMoves.concat(this.getAvailableMovesInOneDirection(board, step, 1));
            possibleMoves = possibleMoves.concat(this.getAvailableMovesInOneDirection(board, step, -1));
        }
        return possibleMoves;
    }
}