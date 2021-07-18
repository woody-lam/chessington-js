import GameSettings from "../gameSettings";

export default class Piece {

    constructor(player) {
        this.player = player;
        this.movesTaken = 0;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.movesTaken++;
    }

    isMoveImpossible(board, newSquare){
        return this.isMoveOutOfBounds(newSquare) || this.isSquareOccupied(board, newSquare)
    }

    isMoveOutOfBounds(newSquare) {
        return (newSquare.row < 0 || newSquare.row > GameSettings.BOARD_SIZE - 1 || newSquare.col < 0 || newSquare.col > GameSettings.BOARD_SIZE - 1)? true: false;
    }

    isSquareOccupied(board, newSquare) {
        if (board.getPiece(newSquare) != undefined){
            return true
        }
        return false
    }
}
