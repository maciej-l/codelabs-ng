import { IAllAlbumsModel } from './../../models/albums';
import { selectAllAlbums } from './../../state/select/albums';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableHeaders } from '../../config/table-headers.enum';
import { pageSizeOptions } from 'src/app/shared/config/page-size-options';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  @Select(selectAllAlbums) public allAlbums$: Observable<IAllAlbumsModel[]>;

  displayedColumns: string[] = [TableHeaders.ID, TableHeaders.USER_ID, TableHeaders.TITLE, TableHeaders.EDIT_ACTIONS];
  dataSource: MatTableDataSource<IAllAlbumsModel>;
  public pageSize: number[] = pageSizeOptions;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.allAlbums$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onEditClicked(id: number) {
    console.log(id);
    this.router.navigate(['../edit', id], {relativeTo: this.activatedRoute});
  }

  onRemoveClicked(id: number) {
    console.log(id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
