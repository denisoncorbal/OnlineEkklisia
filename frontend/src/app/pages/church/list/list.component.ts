import { Component, OnInit } from '@angular/core';
import { Church } from 'src/app/models/church';
import { ChurchService } from 'src/app/services/church.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list',
  imports: [MatTableModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
  standalone: true
})
export class ListComponent implements OnInit {

  constructor(private churchService: ChurchService) { }

  protected churches: Church[] = [];
  protected columnsToDisplay = ['id', 'name', 'abbreviation', 'cnpj']

  ngOnInit() {
    this.churchService.getChurches().subscribe((church) => { this.churches = church });
  }



}
