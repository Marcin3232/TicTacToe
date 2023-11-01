import { Component, OnInit } from '@angular/core';
import { GameStatus } from 'src/app/core/models/game-status.enum';
import { DialogService } from 'src/app/core/services/dialog.service';
import { GameService } from 'src/app/core/services/game.service';
import { SummarizeDialogComponent } from 'src/app/layouts/summarize-dialog/summarize-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  gameStatusChanges?: GameStatus;

  constructor(
    public gameService: GameService,
    private dialogService: DialogService
  ) {
    gameService.newGame();
  }

  ngOnInit(): void {
    this.gameStatusChanges = this.gameService.getGameStatus;
  }

  protected onGameStatusChanged(gameStatus: GameStatus) {
    if (gameStatus !== GameStatus.DURING) {
      this.gameService.setWinGame();
      this.dialogService.open(SummarizeDialogComponent);
    }
  }

  protected onRestart(){
    this.gameService.resetGame();
  }

  protected onNewGame(){
    this.gameService.newGame();
  }
}
