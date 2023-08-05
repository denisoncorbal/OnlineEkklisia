import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Church } from 'src/app/models/church';
import { ChurchService } from 'src/app/services/church.service';

@Component({
  selector: 'app-list',
  imports: [MatTableModule, RouterModule, MatIconModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  standalone: true
})
export class ListComponent implements OnInit {

  constructor(private churchService: ChurchService) { }

  protected churches: Church[] = [];
  protected columnsToDisplay = ['id', 'name', 'abbreviation', 'cnpj', 'edit', 'delete']

  ngOnInit() {
    this.churchService.getChurches().subscribe(
      {
        next: (church) => { this.churches = church },
        error: (err) => { console.log(err) },
        complete: () => { console.log("Complete") }
      }
    );
  }
}
