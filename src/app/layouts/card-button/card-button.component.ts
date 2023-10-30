import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoardTile } from 'src/app/core/models/board-tile.model';
import { GameStatus } from 'src/app/core/models/game-status.enum';
import { State } from 'src/app/core/models/state.enum';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss'],
})
export class CardButtonComponent {
  @Input()
  tile?: BoardTile;

  @Output()
  gameStatusChange = new EventEmitter<GameStatus>;

  constructor(private gameService: GameService) {}

  onClickTile() {
    this.gameService.clickTile(this.tile?.id!);
    this.gameStatusChange.emit(this.gameService.getGameStatus);
  }

  protected value(): string {
  return this.gameService.getPlayerName(this.tile!.state);
  }

  protected setColorTile():string{
    switch (this.tile?.state) {
      case State.X_PLAYER:
        return 'button-x';
      case State.O_PLAYER:
        return 'button-y';
        default:
          return 'button-default';
    }
  }
}
