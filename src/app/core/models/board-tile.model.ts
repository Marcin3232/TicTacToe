import { State } from './state.enum';

export class BoardTile {
  id: number;
  state: State;

  constructor(id: number, state: State) {
    this.id = id;
    this.state = state;
  }
}
