import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from '@app/services/EventService';

@Component({
  selector: 'app-action-dialog',
  templateUrl: './action-dialog.component.html',
})

export class ActionDialogComponent implements OnInit { 
  processId!: number;

  constructor(
    public dialogRef: MatDialogRef<ActionDialogComponent>,
    private eventService: EventService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
    this.processId = this.data.processId;
  }
 
  invokeWatchClickEvent() {
    this.eventService.emitWatchButtonClick(this.processId);
    this.dialogRef.close(); 
  }
}
