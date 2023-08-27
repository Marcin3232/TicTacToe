import { Injectable } from '@angular/core';
import { BoardTile } from '../models/board-tile.model';
import { State } from '../models/state.enum';
import { GameStatus } from '../models/game-status.enum';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly boardLength: number = 9;

  private board: BoardTile[][] = [];

  get getBoard() {
    return this.board;
  }

  get getFlatboard() {
    let flatBoard: BoardTile[] = [];
    for (const row of this.board) {
      flatBoard = flatBoard.concat(row);
    }
    return flatBoard;
  }

  get isFinish(): boolean {
    return (
      this.getFlatboard.filter((item) => item.state === State.DEFAULT)
        .length === 0
    );
  }

  get getGameStatus(): GameStatus {
    return this.gameStatus();
  }

  get getCurrentPlayer(): State {
    return this.currentPlayer();
  }

  constructor() {
    this.newGame();
  }

  public newGame() {
    this.board = this.createBoard();
  }

  public resetGame(){
    this.board = this.createBoard();
  }

  public clickTile(id: number) {
    const tile = this.getFlatboard.find((item) => item.id === id);
    if (tile === undefined) return;
    tile.state = this.currentPlayer();
  }

  public getPlayerName(state: State) {
    switch (state) {
      case State.X_PLAYER:
        return 'X';
      case State.Y_PLAYER:
        return 'Y';
      default:
        return '';
    }
  }

  private createBoard() {
    let board = [];
    let row = [];
    for (let i: number = 1; i <= this.boardLength; i++) {
      row.push(new BoardTile(i, State.DEFAULT));
      if (i % 3 === 0) {
        board.push(row);
        row = [];
      }
    }
    return board;
  }

  private currentPlayer(): State {
    const notFilledBoard = this.getFlatboard.filter(
      (item) => item.state === State.DEFAULT
    );

    return this.isXPlayer(notFilledBoard.length)
      ? State.X_PLAYER
      : State.Y_PLAYER;
  }

  private isXPlayer(emptyBoardLength: number): boolean {
    return emptyBoardLength % 2 !== 0;
  }

  private gameStatus(): GameStatus {
    let status = null;
    this.board.forEach((item) => {
      const listX = item.filter((x) => x.state === State.X_PLAYER);
      const listY = item.filter((y) => y.state === State.Y_PLAYER);
      if (listY.length === 3) {
        status = GameStatus.WINNER_PLAYER_Y;
        return;
      }
      if (listX.length === 3) {
        status = GameStatus.WINNER_PLAYER_X;
        return;
      }
    });

    if (status !== null) return status;

    let rotateBoard = this.rotateMatrix(this.board);
    rotateBoard.forEach((item) => {
      const listX = item.filter((x) => x.state === State.X_PLAYER);
      const listY = item.filter((y) => y.state === State.Y_PLAYER);
      if (listY.length === 3) {
        status = GameStatus.WINNER_PLAYER_Y;
        return;
      }
      if (listX.length === 3) {
        status = GameStatus.WINNER_PLAYER_X;
        return;
      }
    });

    if (status !== null) return status;

    if (this.verifyDiagonal(State.X_PLAYER)) return GameStatus.WINNER_PLAYER_X;
    if (this.verifyDiagonal(State.Y_PLAYER)) return GameStatus.WINNER_PLAYER_Y;

    if (this.getFlatboard.some((item) => item.state === State.DEFAULT))
      return GameStatus.DURING;

    return GameStatus.DRAW;
  }

  private rotateMatrix(matrix: BoardTile[][]): BoardTile[][] {
    const rotatedMatrix: BoardTile[][] = [];

    for (let i = 0; i < matrix.length; i++) {
      rotatedMatrix[i] = [];
      for (let j = 0; j < matrix[i].length; j++) {
        rotatedMatrix[i][j] = matrix[matrix.length - j - 1][i];
      }
    }

    return rotatedMatrix;
  }

  private verifyDiagonal(state: State) {
    if (
      this.board[0][0].state === state &&
      this.board[1][1].state === state &&
      this.board[2][2].state === state
    )
      return true;

    if (
      this.board[0][2].state === state &&
      this.board[1][1].state === state &&
      this.board[2][0].state === state
    )
      return true;

    return false;
  }
}
