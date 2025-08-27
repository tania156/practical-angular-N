import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appEmailColor]'
})
export class EmailColorDirective implements OnChanges {
  @Input('appEmailColor') email!: string;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    const domain = this.email.split('@')[1];
    let color = 'black';

    if (domain.includes('gmail.com')) color = 'green';
    else if (domain.includes('yahoo.com')) color = 'orange';
    else if (domain.includes('hotmail.com')) color = 'blue';

    this.el.nativeElement.style.color = color;
  }
}

export class EmailColor {
}
