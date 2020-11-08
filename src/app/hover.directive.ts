import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hover('brown');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(null);
  }

  private hover(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}

}
