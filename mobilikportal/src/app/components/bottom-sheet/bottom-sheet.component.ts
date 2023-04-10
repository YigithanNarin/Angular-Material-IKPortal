import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) {}
  dismiss() {
    this.bottomSheetRef.dismiss();
  }
}
