import {FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';
import {ChangeDetectionStrategy, Component} from '@angular/core';


@Component({
  selector: 'scroll',
  templateUrl: './scroll.component.html',
  styleUrls: [ './scroll.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollComponent  {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}
