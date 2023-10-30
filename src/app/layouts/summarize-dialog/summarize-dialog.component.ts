import { Component, OnInit } from '@angular/core';
import { GameStatus } from 'src/app/core/models/game-status.enum';
import { DialogRef } from 'src/app/core/services/dialof-ref';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-summarize-dialog',
  templateUrl: './summarize-dialog.component.html',
  styleUrls: ['./summarize-dialog.component.scss'],
})
export class SummarizeDialogComponent implements OnInit {
  constructor(
    private readonly dialogRef: DialogRef,
    private readonly gameService: GameService
  ) {}

  ngOnInit(): void {}

  getResultGameMessage() {
    this.gameService.getGameStatus;
  }

  clickPlayAgain() {
    this.gameService.resetGame();
    this.dialogRef.close();
  }

  setDescription(): string {
    switch (this.statusGame()) {
      case GameStatus.WINNER_PLAYER_X:
        return 'Player X wins!';
      case GameStatus.WINNER_PLAYER_O:
        return 'Player O wins!';
      default:
        return 'Draw';
    }
  }

  private statusGame(): GameStatus {
    return this.gameService.getGameStatus;
  }
}
