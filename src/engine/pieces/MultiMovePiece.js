import Piece from './piece';

export default class MultiMovePiece extends Piece {
    
    constructor(player, steps) {
        super(player);
        this.steps = steps;
    }

    getAvailableMovesInOneDirection(board, step, size) {
        var possibleMoves = [];
        var currentSquare = Object.assign({}, board.findPiece(this));
        while (true) {
            currentSquare.row += step.row * size;
            currentSquare.col += step.col * size;
            if (!this.isMoveInBounds(currentSquare)) {return possibleMoves;};
            possibleMoves.push(currentSquare);
            currentSquare = Object.assign({}, possibleMoves[possibleMoves.length-1]);
        }
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