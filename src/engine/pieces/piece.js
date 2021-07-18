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

    isMoveInBounds(newSquare) {
        return (newSquare.row < 0 || newSquare.row > 7 || newSquare.col < 0 || newSquare.col > 7)? false: true;
    }

    isSquareOccupied(board, newSquare) {
        console.log(board.getPiece(newSquare))
        if (board.getPiece(newSquare) != undefined){
            return true
        }
        return false
    }
}
