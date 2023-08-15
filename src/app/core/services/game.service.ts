import { Injectable } from '@angular/core';
import { BoardTile } from '../models/board-tile.model';
import { State } from '../models/state.enum';
import { GameStatus } from '../models/game-status.enum';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly boardLength: number = 9;

  private readonly board: BoardTile[] = [];

  get getBoard() {
    return this.board;
  }

  get isFinish(): boolean {
    return (
      this.board.filter((item) => item.state === State.DEFAULT).length === 0
    );
  }

  get gameStatus(): GameStatus {
    return GameStatus.DRAW;
  }

  constructor() {
    this.newGame();
  }

  public newGame() {
    this.createBoard();
  }

  public clickTile(id: number) {
    const tile = this.board.find((item) => item.id === id);
    if (tile === undefined) return;
    tile.state = this.currentPlayer();
  }

  private createBoard() {
    let board = [];
    for (let i: number = 0; i < this.boardLength; i++) {
      board.push(new BoardTile(i, State.DEFAULT));
    }
    return board;
  }

  private currentPlayer(): State {
    const notFilledBoard = this.board.filter(
      (item) => item.state === State.DEFAULT
    );

    return this.isXPlayer(notFilledBoard.length)
      ? State.X_PLAYER
      : State.Y_PLAYER;
  }

  private isXPlayer(emptyBoardLength: number): boolean {
    return emptyBoardLength % 2 === 0;
  }
}
