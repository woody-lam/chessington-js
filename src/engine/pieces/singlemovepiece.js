import Piece from './piece';

export default class SingleMovePiece extends Piece {
    
    constructor(player, steps) {
        super(player);
        this.steps = steps;
    }

    getAvailableMoveInOneDirection(board, step, size) {
        var currentSquare = Object.assign({}, board.findPiece(this));
        currentSquare.row += step.row * size;
        currentSquare.col += step.col * size;
        return (this.isMoveImpossible(board, currentSquare)) ? [] : [currentSquare];
    }

    getAvailableMoves(board) {
        var possibleMoves = [];
        for (var step of this.steps){
            possibleMoves = possibleMoves.concat(this.getAvailableMoveInOneDirection(board, step, 1));
            possibleMoves = possibleMoves.concat(this.getAvailableMoveInOneDirection(board, step, -1));
        }
        return possibleMoves;
    }
}