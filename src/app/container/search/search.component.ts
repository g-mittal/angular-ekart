import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // onSearchTextChanged() {
  //   this.searchTextChanged.emit(this.searchText);
  // }

  updateSearchText(inputEl: HTMLInputElement) {
    // console.log(inputEl.value);

    this.searchText = inputEl.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
