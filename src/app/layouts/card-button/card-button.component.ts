import { Component, Input } from '@angular/core';
import { BoardTile } from 'src/app/core/models/board-tile.model';
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

  constructor(private gameService: GameService) {}

  onClickTile() {
    this.gameService.clickTile(this.tile?.id!);
  }

  value(): string {
  return this.gameService.getPlayerName(this.tile!.state);
  }

  setColorTile():string{
    switch (this.tile?.state) {
      case State.X_PLAYER:
        return 'button-x';
      case State.Y_PLAYER:
        return 'button-y';
        default:
          return 'button-default';
    }
  }
}
