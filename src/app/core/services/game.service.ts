import { Injectable } from '@angular/core';
import { BoardTile } from '../models/board-tile.model';
import { State } from '../models/state.enum';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly boardLength: number = 9;

  constructor() {}

  createBoard() {
    let board = [];
    for (let i: number = 0; i < this.boardLength; i++) {
      board.push(new BoardTile(i, State.DEFAULT));
    }
    return board;
  }
}
