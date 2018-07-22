import { Component, OnInit, ViewChild } from '@angular/core';
import { PagingDto, ServiceResponse, BaseDto, ResultType } from '../code/dto';
import { Location, getLocaleDateTimeFormat } from '@angular/common';
import { PageEvent, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort, Sort, MatTableDataSource } from '@angular/material';
import { CrudService } from '../services/crud.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  dtoList: MatTableDataSource<any> = new MatTableDataSource<any>();
  entryDto: any = {};
  displayedColumns: any = [];
  searchDto: any = {};
  pagingDto: PagingDto = new PagingDto();
  entryVisibility: Boolean = false;
  searchVisibility: Boolean = false;
  private apiUrl: String = '';
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private crudService: CrudService,
    private location: Location,
    public dialog: MatDialog,
    private configService: ConfigService) {
      this.displayedColumns = ['Key', 'Val', 'LanguageCode', 'Actions'];
      this.apiUrl = configService.config.DefaultAPIAddress;
      this.pagingDto.pageSize = 50;
  }

  ngOnInit() {
    this.list();
  }

  //#region CRUD Operations

  postOrPut(): void {
    if (!this.isValid(this.entryDto)) { return; }

    if (this.entryDto.Id == null) {
      this.entryDto.Iseditable = 1;
      this.crudService.post(this.entryDto, `${this.apiUrl}/api/system/postlanguage`).subscribe(serviceResponse => {
        this.entryDto.Id = serviceResponse.Data;
        this.dtoList.data.push(this.entryDto);
        this.resetEntry();
      });
    } else {
      this.crudService.put(this.entryDto, `${this.apiUrl}/api/system/putlanguage`).subscribe(serviceResponse => {
        const i = this.dtoList.data.findIndex((obj => obj.Id === this.entryDto.Id));
        this.dtoList.data[i] = this.entryDto;
        this.resetEntry();
      });
    }
  }

  get(dto: any): void {
    this.crudService.get(dto.Id, `${this.apiUrl}/api/system/getlanguage`).subscribe(serviceResponse => {
      this.entryDto = Object.assign({}, serviceResponse.Data);
      this.entryVisibility = true;
      this.searchVisibility = false;
      window.scroll(0, 0);
    });
  }

  delete(dto: any): void {
    this.crudService.delete(dto.Id, `${this.apiUrl}/api/system/deletelanguage`).subscribe(serviceResponse => {
      this.dtoList.data = this.dtoList.data.filter(h => h !== dto);
    });
  }

  list(): void {
    this.crudService.list(this.searchDto, this.pagingDto, `${this.apiUrl}/api/system/listlanguage`).subscribe(
      serviceResponse => {
        this.dtoList.data = serviceResponse.Data;
        this.dtoList.sort = this.sort;
        this.pagingDto.count = serviceResponse.TotalCount;
      }
    );
  }

  // #endregion CRUD

  isValid(obj) {
    if (obj.Key == null) {
      alert('Lutfen zorunlu alanlari doldurunuz!');
      return false;
    } else if (obj.Val == null) {
      alert('Lutfen zorunlu alanlari doldurunuz!');
      return false;
    } else if (obj.LanguageCode == null) {
      alert('Lutfen zorunlu alanlari doldurunuz!');
      return false;
    } else {
      return true;
    }
  }

  resetEntry() {
    this.entryDto = new BaseDto();
    this.entryDto.UpdatedBy = 0;
    this.entryDto.UpdateDate = new Date();
  }

  resetSearch() {
    this.searchDto = new BaseDto();
    this.searchDto.UpdatedBy = 0;
    this.searchDto.UpdateDate = new Date();
  }

  goBack(): void {
    this.location.back();
  }

  openDialog(dto: any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '250px',
      data: { dto: dto }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.confirmation === 'YES') {
        this.delete(result.dto);
      }
      console.log('The dialog was closed');
    });
  }

  changePage(pageEvent: PageEvent): void {
    this.pagingDto.count = pageEvent.length;
    this.pagingDto.pageSize = pageEvent.pageSize;
    this.pagingDto.pageNumber = pageEvent.pageIndex + 1;
    this.list();
  }


  sortData(sort: Sort): void {
    if (!sort.active || sort.direction === '') {
      console.log(`sortData returned with empty - active: ${sort.active} / direction: ${sort.direction}`);
      return;
    }
    console.log(`sortData returned with working - active: ${sort.active} / direction: ${sort.direction}`);
    // local paging
    this.dtoList.data = this.dtoList.data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Key': return this.compare(a.Key, b.Key, isAsc);
        case 'Val': return this.compare(a.Val, b.Val, isAsc);
        case 'LanguageCode': return this.compare(a.LanguageCode, b.LanguageCode, isAsc);
        default: return 0;
      }
    });

    console.log(this.dtoList);

    // Database paging
    // this.pagingDto.order  = sort.direction;
    // this.list();
  }

  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  applyFilter(filterValue: string) {
    this.dtoList.filter = filterValue.trim().toLowerCase();
  }
}
