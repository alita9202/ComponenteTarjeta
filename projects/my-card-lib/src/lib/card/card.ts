import { Component, Input } from '@angular/core';
// ...existing code...
@Component({
  selector: 'my-card',
  templateUrl: '../card/card.html',
  styleUrls: ['../card/card.css']
})
export class CardComponent {
  @Input() title = 'Título por defecto';
}
