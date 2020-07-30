import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  

  @Input('label')  etiqueta: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];;
  @Input()  data: number[] = [350, 450, 100];
  @Input()  titulo: string = 'Sin Titulo';

  public colors: Color[] = [
    {
      backgroundColor: ['#9E120E', '#FF5800', '#FFB414']
    }
  ]
}
