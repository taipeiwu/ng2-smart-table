import { EventEmitter } from '@angular/core';
import { Cell } from '../../lib/data-set/cell';
export declare class CellComponent {
    gridmode: string;
    cell: Cell;
    inputClass: string;
    mode: string;
    edited: EventEmitter<any>;
    onStopEditing(): boolean;
    onEdited(event: any): boolean;
    onClick(event: any): void;
}
