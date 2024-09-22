import { Component } from '@angular/core';
import { TableRow } from './TableRow';
import { TableServiceService } from '../table-service.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  getTableRows() {
    return this.tableRows;
  }
  private tableRows: TableRow[] = [];
  constructor(tableService : TableServiceService) {
    this.tableRows.push(new TableRow("Jony"));
    this.tableRows.push(new TableRow("Bala"));
    this.tableRows.push(new TableRow("Gaya"));
    // console.log(this.getTableRows().length);
    console.log(this.getTableRows()[0]);
    console.log(tableService.getData());
    
    
    
  }


}
