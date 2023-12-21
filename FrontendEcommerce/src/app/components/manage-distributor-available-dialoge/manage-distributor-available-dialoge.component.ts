import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-manage-distributor-available-dialoge',
  templateUrl: './manage-distributor-available-dialoge.component.html',
  styleUrls: ['./manage-distributor-available-dialoge.component.scss']
})
export class ManageDistributorAvailableDialogeComponent implements OnInit {

  @ViewChild('listInput') listInput!: ElementRef<HTMLInputElement>;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  listCtrl = new FormControl('');
  selectedOption = '1';
  territories: string[] = ['Mark Olson','Company Wide'];
  filteredTerritories: Observable<string[]>;
  allTerritories: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];



  constructor() { 
    this.filteredTerritories = this.listCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this.filter(fruit) : this.allTerritories.slice())),
    );
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.territories.push(value);
    }

    this.listCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.territories.indexOf(fruit);

    if (index >= 0) {
      this.territories.splice(index, 1);
    }
  }

  selectTerritories(event: MatAutocompleteSelectedEvent): void {
    this.territories.push(event.option.viewValue);
    this.listInput.nativeElement.value = '';
    this.listCtrl.setValue(null);
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTerritories.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

}
