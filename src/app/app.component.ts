import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Grid Performance';
  constructor() {}

  @ViewChild('grid1', { static: true })
  grid1: IgxGridComponent;

  localData: any[] = [];
  columns;
  ngOnInit() {
    const cols = [];
    cols.push({
      field: 'ID',
      width: 90,
    });
    for (let j = 0; j < 15; j++) {
      cols.push({
        field: (j + 1).toString(),
        width: Math.random() * 80 + 90,
      });
    }

    this.columns = cols;

    const obj = {};
    for (let j = 0; j < cols.length; j++) {
      const col = cols[j].field;
      obj[col] = j;
    }

    for (let i = 0; i < 100; i++) {
      const newObj = Object.create(obj);
      newObj['ID'] = i;
      this.localData.push(newObj);
    }
  }
  public scrollTo(grid, index) {
    grid.verticalScrollContainer.scrollTo(parseInt(index, 10));
  }
}
