import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hover('grey', 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(null, null);
  }

  private hover(color: string, colorN:string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = colorN;
  }

}


