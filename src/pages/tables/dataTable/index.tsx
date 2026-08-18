import { DataTableBreadcrumb } from '../../../components/Breadcrumb'
import { DataTable } from '../../../mocks/tableApi/dataTableApi'
import '../../../styles/pageStyles/components/button.css'
import '../../../styles/pageStyles/tables/basicTable.css'

const DataTablePage = () => {
  return (
    <div className="section">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h2>Data Tables</h2>
        <DataTableBreadcrumb/>
      </div>

        <div className='box-row-4'>
          <h3>Employee Data Table</h3>
          <hr style={{borderTop: "1px solid #d0cccc"}}/>
          
          <div className='button-margin'>
            <div className='button-row'>
              <div className="basic-table-wrapper">
                <table className="data-table-border">
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>POSITION</th>
                      <th>OFFICE</th>
                      <th>AGE</th>
                      <th>START DATE</th>
                      <th>SALARY</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DataTable.map((table) => (
                      <tr key={table.id}>
                        {/* <td className="table-number">{table.id}</td> */}
                        <td>{table.name}</td>
                        <td>{table.position}</td>
                        <td>{table.office}</td>
                        <td>{table.age}</td>
                        <td>{table.startDate}</td>
                        <td>{table.salary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className='box-row-4'>
          <h3>Bordered Table</h3>
          <hr style={{borderTop: "1px solid #d0cccc"}}/>
          
          <div className='button-margin'>
            <div className='button-row'>
              <div className="basic-table-wrapper">
                <table className="basic-table-border">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>FIRST</th>
                      <th>LAST</th>
                      <th>HANDLE</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="table-number">1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                  
                  <tbody>
                    <tr>
                      <td className="table-number">2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>

                  <tbody>
                    <tr>
                      <td className="table-number">3</td>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DataTablePage