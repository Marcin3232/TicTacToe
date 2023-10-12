import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summarize-dialog',
  templateUrl: './summarize-dialog.component.html',
  styleUrls: ['./summarize-dialog.component.scss']
})
export class SummarizeDialogComponent implements OnInit {
  ngOnInit(): void {
   console.log('dialog work')
  }

}
