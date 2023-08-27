import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameStatus } from 'src/app/core/models/game-status.enum';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  gameStatusChanges?:GameStatus;

  constructor(public gameService:GameService){
    gameService.newGame();
  }
  
  ngOnInit(): void {
    this.gameStatusChanges=this.gameService.getGameStatus;
  }
}
