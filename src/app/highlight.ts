import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',   
  standalone: true           
})
export class Highlight {

  @Input() highlight: string = ''; 

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackground(this.highlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackground('');
  }


  private setBackground(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
