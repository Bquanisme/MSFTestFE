import { BasicTableBreadcrumb } from '../../../components/Breadcrumb'
import { basicTable } from '../../../mocks/tableApi/basicTable'
import '../../../styles/pageStyles/components/button.css'
import '../../../styles/pageStyles/tables/basicTable.css'

const BasicTablePage = () => {
  return (
    <div className="section">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h2>Basic Tables</h2>
        <BasicTableBreadcrumb/>
      </div>
        <div className='box-row-1'>
          <div className='box-row-1-column-1'>
  
            <h3>Basic Table</h3>
            <hr style={{borderTop: "1px solid #d0cccc"}}/>
            
            <div className='button-margin'>
              <div className='button-row'>
                <div className="basic-table-wrapper">
                  <table className="basic-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>FIRST</th>
                        <th>LAST</th>
                        <th>HANDLE</th>
                      </tr>
                    </thead>
                    {basicTable.map(table => (
                      <tbody key={table.id}>
                        <tr>
                          <td className="table-number">{table.id}</td>
                          <td>{table.first}</td>
                          <td>{table.last}</td>
                          <td>{table.handle}</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div className='box-row-1-column-1'>
            
            <h3>Table Dark</h3>
            <hr style={{borderTop: "1px solid #d0cccc"}}/>
            
            <div className='button-margin'>
              <div className='button-row'>
                <div className="basic-table-wrapper">
                  <table className="basic-table-dark">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>FIRST</th>
                        <th>LAST</th>
                        <th>HANDLE</th>
                      </tr>
                    </thead>
                    {basicTable.map(table => (
                      <tbody key={table.id}>
                        <tr>
                          <td className="table-number">{table.id}</td>
                          <td>{table.first}</td>
                          <td>{table.last}</td>
                          <td>{table.handle}</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='box-row-4'>
          <h3>Striped Table</h3>
          <hr style={{borderTop: "1px solid #d0cccc"}}/>
          
          <div className='button-margin'>
            <div className='button-row'>
              <div className="basic-table-wrapper">
                <table className="basic-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>FIRST</th>
                      <th>LAST</th>
                      <th>HANDLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {basicTable.map((table) => (
                      <tr key={table.id}>
                        <td className="table-number">{table.id}</td>
                        <td>{table.first}</td>
                        <td>{table.last}</td>
                        <td>{table.handle}</td>
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

export default BasicTablePage
