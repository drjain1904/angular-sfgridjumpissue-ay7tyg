import { Component, OnInit, ViewChild } from '@angular/core';
import {
  GridComponent,
  PageSettingsModel,
} from '@syncfusion/ej2-angular-grids';
import { alldata } from './data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public data: Object[] = [];
  public columns = [];
  @ViewChild('grid')
  public grid: GridComponent;
  public options1 = {};
  public options: PageSettingsModel;
  ngOnInit(): void {
    this.options = { pageSize: 50 };
    this.data = alldata;

    this.data.forEach((row, index) => {
      row['_SrNo'] = index + 1;
    });
  }
  getData() {
    var fieldNames = [];
    var gridData = [];
    var gridCols = [];
    gridCols.push({ field: 'SrNo', width: 100 });
    for (var i = 1; i < 12; i++) {
      fieldNames.push('Field' + i);
      gridCols.push({ field: 'Field' + i, width: 120 });
    }
    this.columns = gridCols;
    for (var i = 0; i < 1050; i++) {
      var item = {};
      for (var j = 0; j < fieldNames.length; j++) {
        item[fieldNames[j]] = fieldNames[j] + ' text';
      }
      if (i.toString().endsWith('0')) {
        item[fieldNames[1]] =
          fieldNames[1] + ' text test 1 test 2 test 1 test 2test 1 test 2';
      }
      item['SrNo'] = i;
      gridData.push(item);
      this.data = gridData;
    }
  }
  load(args) {}
}
