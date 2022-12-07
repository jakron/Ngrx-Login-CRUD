import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'test-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.css']
})
export class LogoutDialogComponent implements OnInit {

  constructor(
      // public dialogRef: MatDialogRef<LogoutDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  // onNoClick(){
  //   this.dialogRef.close(false);
  // }

  // onLogout(){
  //   this.dialogRef.close(true);
  // }
}
