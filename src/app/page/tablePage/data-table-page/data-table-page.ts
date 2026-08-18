import { Component, inject } from '@angular/core';
import { Breadcrumb } from "../../../components/breadcrumb/breadcrumb";
import { TableService } from '../../../service/table/table-service';

@Component({
  selector: 'app-data-table-page',
  imports: [Breadcrumb],
  templateUrl: './data-table-page.html',
  styleUrl: '../basic-table-page/basic-table-page.css',
})
export class DataTablePage {

  private tableService = inject(TableService)

  dataTable = this.tableService.dataTable()

  exportDataTable = this.tableService.exportDataTable()
}
