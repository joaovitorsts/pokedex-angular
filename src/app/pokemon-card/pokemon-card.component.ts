import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/_model/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;

  public leadingZero(str: number, size: number = 3): string{
    let s = String(str)

    while (s.length < (size || 2)){
      s = '0' + s
    }

    return s;
  }
}
