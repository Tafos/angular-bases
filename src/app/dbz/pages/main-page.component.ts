import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
	selector: 'app-dbz-main-page',
	templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
	//injecto servicio dbz
	constructor(public dbzService: DbzService) {}
	get characters(): Character[] {
		return [...this.dbzService.characters];
	}
	onDeleteCharacter(id: string): void {
		this.dbzService.deleteCharacterByID(id);
	}
	onNewCharacter(character: Character) {
		this.dbzService.addCharacter(character);
	}

	ngOnInit() {}

	// onDeleteCharacter(xxx:xxx){
	//   this.characters.splice
	// }
}
