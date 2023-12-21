import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ManageDistributorAvailableDialogeComponent } from '../manage-distributor-available-dialoge/manage-distributor-available-dialoge.component';
import { MatDrawer } from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import {
  debounceTime,
  distinctUntilChanged,
  last,
  map,
  startWith,
  switchMap,
} from 'rxjs/operators';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { ChangeDetectionStrategy } from '@angular/compiler';

export interface PeriodicElement {
  dots: any;
  name: string;
  value: any;
  geo: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    dots: '',
    name: 'INGRAM MICRO - MASTER',
    value: '001d000001rhYjqAAE',
    geo: 'Americas',
  },
  {
    dots: '',
    name: 'Generation Digital - IM BV',
    value: '0010W00002O3wI9QAJ',
    geo: 'EMEA',
  },
  {
    dots: '',
    name: 'NEC Network & System Integration Corp. - Master',
    value: '0010W00002F9eN5QAJ',
    geo: 'N/A',
  },
  {
    dots: '',
    name: 'WestTelco - Master - Distributor',
    value: '0010W00002RikUeQAJ',
    geo: 'EMEA',
  },
  {
    dots: '',
    name: 'WestTelco - Master - Reseller',
    value: '001d000001unkcXAAQ',
    geo: 'N/A',
  },
  {
    dots: '',
    name: 'Nissho Electronics Corporation - Reseller',
    value: '0010W00002RhZkJQAV',
    geo: 'Americas',
  },
  {
    dots: '',
    name: 'Synnex Corp - Distributor',
    value: '001d000001HeLxcAAF',
    geo: 'EMEA',
  },
  {
    dots: '',
    name: 'WestTelco Europa Spain - Distributor',
    value: '0010W00002GUhNQQA1',
    geo: 'N/A',
  },
  { dots: '', name: 'XPON', value: '0010W00002ThFNhQAN', geo: 'EMEA' },
  {
    dots: '',
    name: 'Rahi Systems Holdings Inc.',
    value: '0010W00002VpWtUQAV',
    geo: 'Americas',
  },
];
@Component({
  selector: 'app-manage-distributor-available',
  templateUrl: './manage-distributor-available.component.html',
  styleUrls: ['./manage-distributor-available.component.scss'],
})
export class ManageDistributorAvailableComponent implements OnInit {
  @ViewChild('listInput') listInput!: ElementRef<HTMLInputElement>;
  @ViewChild('drawer') drawer!: MatDrawer;
  displayedColumns: string[] = ['dots', 'name', 'value', 'geo'];
  dataSource = ELEMENT_DATA;
  isDrawerOpen: boolean = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  listCtrl = new FormControl('');
  open: boolean = false;
  open2: boolean = false;
  allTerritories: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  territories: string[] = [];
  filteredTerritories: Observable<string[]>;
  selectAllChecked = false;
  mydata: any[] = [];
  dataLength: any;
  isSelect: boolean = false;
  filterData: string[] = [];

  constructor(
    public dataService: DataServiceService,
    private dialog: MatDialog,
    private http: HttpClient
  ) {
    this.filteredTerritories = this.listCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this.filter(fruit) : this.allTerritories.slice()
      )
    );
  }

  ngOnInit(): void {
    this.loadInitialData();
  }

  selectedItemIds: Set<number> = new Set<number>();

  // Function to toggle selection for a specific item
  toggleSelections(itemId: number) {
    if (this.selectedItemIds.has(itemId)) {
      this.selectedItemIds.delete(itemId);
    } else {
      this.selectedItemIds.add(itemId);
    }
  }

  // Function to check if an item is selected
  isItemSelected(itemId: number): boolean {
    return this.selectedItemIds.has(itemId);
  }

  // Function to unselect all items
  unselectAllItems() {
    this.selectedItemIds.clear();
  }
  selectAllItems() {
    this.selectedItemIds.clear();
    console.log(this.savedDataArray);
    this.savedDataArray.forEach((item: any) => {
      this.selectedItemIds.add(item.id);
    });
  }

  count: any;

  selectedItemCount(): any {
    return this.selectedItemIds.size;
  }

  manageDistiEditDialog() {
    this.dialog.open(ManageDistributorAvailableDialogeComponent, {
      maxWidth: '740px',
      width: '90%',
    });
    document.body.classList.add('hidescroll');
  }

  hide() {
    this.open = false;
    this.open2 = false;
    document.body.classList.remove('hidescroll');
  }

  hide2() {
    this.open2 = false;
    this.open = false;
    document.body.classList.remove('hidescroll');
  }

  // virtual
  items$!: Observable<any[]>; // Observable for items
  items2$!: Observable<any[]>; // Observable for items
  searchControl = new FormControl('');
  savedDataArray: any;

  emptyValue() {
    this.searchControl.reset();
    this.savedResult = '';
  }

  loadInitialData(): void {
    this.items$ = this.dataService.getItems(); // Load initial data
    this.dataService.getSubjectData().subscribe((item) => {
      this.savedDataArray = item;
    });
  }

  searchingText: any;
  savedResult: any = '';

  searching() {
    let convertToNumber = parseInt(this.searchingText);
    let searchResult = this.savedDataArray.filter(
      (item: any) => item.id === convertToNumber
    );
    this.savedResult = searchResult;
    console.log(this.savedResult);
  }

  manageDistiEditOffcanvas() {
    this.open = !this.open;
    document.body.classList.add('hidescroll');
  }

  trackByFn(index: number, item: any): any {
    return item.id; // Use a unique identifier from your data (e.g., item.id) as the trackBy function
  }

  pageSize = 500; // Number of records to fetch per page
  currentPage = 1;
  totalRecords: any; // For the sake of example; adjust as needed
  items: any[] = [];
  timer: any;
  manageDistiEditOffcanvas2() {
    this.open2 = !this.open2;

    // this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos')
    //   .subscribe(response => {
    //     this.mydata = response;
    //     this.dataLength = response.length;
    //     this.totalRecords = response.length;

    //   });
    // this.dataService.getData(this.currentPage, this.pageSize).subscribe((item)=>
    // {
    //   this.items = item;
    //   this.dataLength = item.length;
    //   this.totalRecords = item.length;
    // }
    // )

    // while(this.items.length !== this.totalRecords){
    // }

    this.timing();
    this.dataService.getData(this.currentPage, this.pageSize).subscribe({
      next: (data) => {
        let newdata = [];
        for (let i = 0; i < 3; i++) {
          newdata.push(...data);
        }
        this.dataService.comibeSubjectdata(newdata);
      },
    });

    this.dataService;
    if (this.items.length === 15000) {
      console.log('reached');
      // clearInterval(timing);
    }
  }

  timing() {
    const timing: any = setInterval(() => {
      this.loadNextPage();
    }, 1000);

    this.timer = timing;
  }

  loadNextPage() {
    this.dataService.getSubjectData().subscribe((data: any) => {
      if (data.length > 0 && this.items.length < 15000) {
        this.items = data;
        this.currentPage++;
      } else {
        clearInterval(this.timer);
        console.log(data.length, ';this');
        console.log('No more data');
      }
      // if (data.length > 0 && this.items.length < 5000) {
      //   this.items = this.items.concat(data);
      //   this.currentPage++;
      // } else {
      //   clearInterval(this.timer);
      //   console.log(data.length, ';this');
      //   console.log('No more data');
      // }
    });
    // console.log(this.dataService.getDataLength().subscribe((item)=> console.log(item.length)));
  }

  dataCalculation(data: any) {}

  toggleDrawerLeft() {
    this.isDrawerOpen = false;
    this.drawer.toggle();
  }

  toggleDrawerRight() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.drawer.toggle();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      console.log('addValue');

      this.territories.push(value);
    }
  }

  remove(fruit: string): void {
    const index = this.territories.indexOf(fruit);
    if (index >= 0) {
      console.log('removeValue');
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
    return this.allTerritories.filter((fruit) =>
      fruit.toLowerCase().includes(filterValue)
    );
  }

  toggleSelection(fruit: any, e: any): void {
    if (e.checked && !this.territories.includes(fruit)) {
      this.territories?.push(fruit);
      console.log(fruit);
    } else {
      this.remove(fruit);
    }

    if (this.territories.length == 0) {
      this.selectAllChecked = false;
    }
  }

  getValues() {
    this.allTerritories.map((item: any) => {
      if (!this.territories.includes(item)) {
        this.territories.push(item);
      }
      this.territories.map((item: any) => {
        if (item == 'Select All') {
          const indexToRemove = this.territories.indexOf('Select All');
          if (indexToRemove !== -1) {
            this.territories.splice(indexToRemove, 1);
          }
        }
      });
    });
  }

  toggleSelectAll() {
    console.log('toggle');

    this.selectAllChecked = !this.selectAllChecked;
    this.getValues();
    if (!this.selectAllChecked) {
      this.territories = [];
    }
  }

  // Unsubscribe from the Observable.

  isSelected(partner: any): boolean {
    console.log(partner.name, 'checkbox');
    return partner.name;
  }
}
