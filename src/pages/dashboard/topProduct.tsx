import {
  topProducts,
} from '../../mocks/dashboardApi';

import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import MarkunreadMailboxRoundedIcon from '@mui/icons-material/MarkunreadMailboxRounded';
import TableRowsRoundedIcon from '@mui/icons-material/TableRowsRounded';
import CardGiftcardRoundedIcon from '@mui/icons-material/CardGiftcardRounded';

function TopProducts() {
    const productIcons = {
        premium: <InboxRoundedIcon />,
        standard: <MarkunreadMailboxRoundedIcon />,
        basic: <TableRowsRoundedIcon />,
        pro: <CardGiftcardRoundedIcon />,
    };
  return (
    <div className="dashboard-bottom-card products-card">

      <div className="bottom-card-header">
        <h3>Top Products</h3>
      </div>

      <div className="products-table-wrapper">
        <table className="products-table">

          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>SALES</th>
              <th>REVENUE</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            {topProducts.map((product) => (
              <tr key={product.id}>

                <td>
                  <div className="product-info">
                   <div
                        className={`product-icon ${product.type}`}
                    >
                    {productIcons[product.type]}
                    </div>
                    <span>{product.name}</span>
                  </div>
                </td>

                <td>
                  {product.sales}
                </td>

                <td>
                  ${product.revenue.toLocaleString()}
                </td>

                <td>
                  <span
                    className={
                      product.status === 'In Stock'
                        ? 'product-status in-stock'
                        : 'product-status low-stock'
                    }
                  >
                    {product.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default TopProducts;