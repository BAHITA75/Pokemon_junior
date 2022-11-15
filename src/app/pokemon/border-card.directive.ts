import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string ='#009688';
  private initialHeight: number = 180;

  constructor(private el: ElementRef) { 
    this.setHeight(this.initialHeight);
    this.setBorder(this.initialColor);
  }
  // el est un element de type ElementRef
  // EelementRef est un element qui permet de representer une reference vers mes cartes de pokemon sue lequel on va appliquer notre directive

  @Input('pkmnBorderCard') borderColor: string; //alias
  // @Input() pkmnBorderCard: string;  //sans alias

  @HostListener('mouseenter') onMouseEnter() {
  // @HostListener: permet de lier une methode de notre drective à un evenement donné
  // @HostListener permet d'ecouter l'evenement MouseEnter
  // lorsque l'evenement MouseEnetr sera appelé, nous modifierons la couleur de notre bordure, à ce momenet nous utilisons la methode setBorder()
  this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
  // lorqu'on deplace le curseur en dehors du pokemon nous reinitialiserons la couleur de la bordure à la valeur initiale
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
  // setHeight() est une methode qui permet de definir une hauiteur commune à tous nos elements
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
  // setBorder() permet de definir la couleur de la bordure à l'element du DOM
  this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
