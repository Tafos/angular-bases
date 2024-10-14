import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
	selector: 'dbz-list',
	templateUrl: './list.component.html',
	styleUrl: './list.component.css'
})
export class ListComponent {
	@Output()
	public onDeleleteById: EventEmitter<string> = new EventEmitter();

	@Input()
	public characterList: Character[] = [
		{
			name: 'Trunks',
			power: 10
		}
	];

	// //onDeleteID = index value : number -> emitir y en tu main component escuchar el ondelete y lo conectas
	// onDeleteCharacter(index: number): void {
	// 	//Emitir el ID del Personaje
	// 	this.onDelelete.emit(index);
	// 	console.log(index);
	// }
	onDeleteCharacterById(id: string): void {
		if (id === '') return;
		this.onDeleleteById.emit(id);
	}
}
