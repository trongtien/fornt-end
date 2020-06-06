import React from 'react'
import { Table, Button } from 'reactstrap';

function ListBillComponent() {
  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>TỔNG GIỎ HÀNG</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"> TỔNG PHỤ</th>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">TỔNG CỘNG</th>
            <td>Jacob</td>
          </tr>
        </tbody>
      </Table>
      <Button color="danger">danger</Button>
    </div>
  )
}

export default ListBillComponent