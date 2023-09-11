/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";
import Grid from "@mui/material/Grid";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DataTable from "react-data-table-component";

// Data
import data from "layouts/dashboard/components/Projects/data";

const customStyles = {
  table: {
    width: "60%", // Set the width to 60
  },

  rows: {
    style: {},
  },
  headCells: {
    style: {
      fontWeight: "bold",
    },
  },
  cells: {
    style: {},
  },
};

function Projects() {
  const { columns, rows } = data();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(rows); // Assuming 'rows' contains all orders initially
  const [selectedOrder, setSelectedOrder] = useState(rows);

  // Event handler for row click
  // Assuming your order objects have a unique identifier field called 'orderID'
  const handleRowClicked = (row) => {
    console.log("Row: ", row);
    setSelectedOrder(row);
  };

  //Event handler for input change
  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter orders based on the search query
    const filtered = rows.filter((order) =>
      order.orderID.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredOrders(filtered);
  };

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Track Orders
          </MDTypography>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <MDTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>30 done</strong> this month
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      <div style={{ display: "flex" }}>
        <input
          style={{
            width: "30%",
            padding: "10px",
            margin: "10px",
          }}
          placeholder="Search order by orderID"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
      <MDBox>
        <DataTable
          columns={columns}
          data={filteredOrders}
          onRowClicked={handleRowClicked}
          customStyles={customStyles}
          pagination
          showTotalEntries
        />
      </MDBox>
      <br />
      <OrdersOverview order={selectedOrder} />
    </Card>
  );
}

export default Projects;
