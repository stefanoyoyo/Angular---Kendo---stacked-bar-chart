import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <kendo-chart>
        <kendo-chart-series>
          <kendo-chart-series-item type="column" [stack]="false" [data]="[1, 2, 3]">
          </kendo-chart-series-item>
          <kendo-chart-series-item type="column" [data]="[1, -1, 1]">
          </kendo-chart-series-item>
          <kendo-chart-series-item type="column" [data]="[1, -1, 1]">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `
})
export class AppComponent {
}
