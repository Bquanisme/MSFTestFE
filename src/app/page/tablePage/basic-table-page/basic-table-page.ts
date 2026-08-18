import { Component, inject } from '@angular/core';
import { Breadcrumb } from "../../../components/breadcrumb/breadcrumb";
import { TableService } from '../../../service/table/table-service';

@Component({
  selector: 'app-basic-table-page',
  imports: [Breadcrumb],
  templateUrl: './basic-table-page.html',
  styleUrl: './basic-table-page.css',
})
export class BasicTablePage {

  private tableService = inject(TableService)

  tableBasic = this.tableService.basicTable()

}
