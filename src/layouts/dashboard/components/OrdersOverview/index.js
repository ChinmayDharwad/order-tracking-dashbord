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

import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Padding } from "@mui/icons-material";
import "./tracking.css";

function OrdersOverview({ order }) {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Order Overview
          </MDTypography>
        </MDBox>
      </MDBox>

      {order ? (
        <p style={{ paddingLeft: "30px", fontSize: "20px", fontWeight: "bold", color: "#007bff" }}>
          {order.orderID}
        </p>
      ) : null}

      <br />

      <div className="timeline">
        <div className={`timeline-item ${order.status === "Ordered" ? "active" : ""}`}>
          <div className="timeline-content">
            <p>Ordered</p>
          </div>
        </div>
        <div className={`timeline-item ${order.status === "Shipped" ? "active" : ""}`}>
          <div className="timeline-content">
            <p>Shipped</p>
          </div>
        </div>
        <div className={`timeline-item ${order.status === "Delivered" ? "active" : ""}`}>
          <div className="timeline-content">
            <p>Delivered</p>
          </div>
        </div>
      </div>
      <br />
    </Card>
  );
}

// PropTypes validation
OrdersOverview.propTypes = {
  order: PropTypes.shape({
    orderID: PropTypes.string.isRequired,
    fromAddress: PropTypes.string.isRequired,
    toAddress: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    // Add any other PropTypes as needed for your 'order' object
  }).isRequired,
};

export default OrdersOverview;
