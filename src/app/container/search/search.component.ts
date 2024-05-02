import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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

  //2nd argument is optional in ViewChild
  // first property: read: reads different tokens from queried elements
  // second property: static: tells when query is resolved
  @ViewChild('searchInput') searchInputEl: ElementRef

  // onSearchTextChanged() {
  //   this.searchTextChanged.emit(this.searchText);
  // }

  updateSearchText() {
    // console.log(inputEl.value);

    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
}
