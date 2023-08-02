import { Component, OnInit } from '@angular/core';
import { Church } from 'src/app/models/church';
import { ChurchService } from 'src/app/services/church.service';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

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
  protected columnsToDisplay = ['id', 'name', 'abbreviation', 'cnpj', 'edit']

  ngOnInit() {
    this.churchService.getChurches().subscribe((church) => { this.churches = church });
  }



}
