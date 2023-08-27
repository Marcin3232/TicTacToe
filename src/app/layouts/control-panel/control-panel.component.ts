import { Component } from '@angular/core';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent {
  constructor(public gameService: GameService) {}

  getCurrentPlayer(): string {
    return this.gameService.getPlayerName(this.gameService.getCurrentPlayer);
  }
}
