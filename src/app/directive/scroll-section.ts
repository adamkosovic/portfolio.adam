import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ScrollSectionsService } from '../service/scroll-sections';

@Directive({
  selector: '[appScrollSection]',
  exportAs: 'scrollSection',
  standalone: true,
})
export class ScrollSectionDirective implements AfterViewInit, OnDestroy {
  constructor(
    private el: ElementRef<HTMLElement>,
    private scroll: ScrollSectionsService
  ) {}

  ngAfterViewInit() {
    this.scroll.register(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.scroll.unregister(this.el.nativeElement);
  }

  next() {
    this.scroll.scrollToNext(this.el.nativeElement);
  }
}

