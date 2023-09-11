/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { name: "Order ID", selector: "orderID", width: "15%", align: "center" },
      { name: "Date", selector: "date", width: "15%", align: "center" },
      { name: "From Address", selector: "fromAddress", width: "25%", align: "center" },
      { name: "To Address", selector: "toAddress", width: "25%", align: "center" },
      { name: "Completion", selector: "completion", align: "center" },
    ],

    rows: [
      {
        orderID: "12349",
        date: "2023-09-09",
        fromAddress: "123 Main St, City, Country",
        toAddress: "456 Elm St, City, Country",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={20} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Ordered",
      },
      {
        orderID: "54327",
        date: "2023-09-10",
        fromAddress: "789 Oak St, City, Country",
        toAddress: "101 Pine St, City, Country",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Delivered",
      },
      {
        orderID: "98765",
        date: "2023-09-11",
        fromAddress: "555 Maple St, City, Country",
        toAddress: "777 Birch St, City, Country",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={20} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Ordered",
      },
      {
        orderID: "12385",
        date: "2023-09-09",
        fromAddress: "123 Main St, City1, Country1",
        toAddress: "456 Elm St, City2, Country2",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={20} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Ordered",
      },
      {
        orderID: "54378",
        date: "2023-09-10",
        fromAddress: "789 Oak St, City3, Country3",
        toAddress: "101 Pine St, City4, Country4",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Shipped",
      },
      {
        orderID: "98890",
        date: "2023-09-11",
        fromAddress: "555 Maple St, City5, Country5",
        toAddress: "777 Birch St, City6, Country6",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Delivered",
      },
      {
        orderID: "65246",
        date: "2023-09-11",
        fromAddress: "555 Maple St, City5, Country5",
        toAddress: "777 Birch St, City6, Country6",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Shipped",
      },
      {
        orderID: "36746",
        date: "2023-09-11",
        fromAddress: "555 Maple St, City5, Country5",
        toAddress: "777 Birch St, City6, Country6",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Delivered",
      },
      {
        orderID: "73546",
        date: "2023-09-11",
        fromAddress: "555 Maple St, City5, Country5",
        toAddress: "777 Birch St, City6, Country6",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Delivered",
      },
      {
        orderID: "18349",
        date: "2023-09-09",
        fromAddress: "123 Main St, City, Country",
        toAddress: "456 Elm St, City, Country",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Ordered",
      },
      {
        orderID: "36349",
        date: "2023-09-09",
        fromAddress: "123 Main St, City, Country",
        toAddress: "456 Elm St, City, Country",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={20} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Ordered",
      },
      {
        orderID: "78249",
        date: "2023-09-09",
        fromAddress: "123 Main St, City, Country",
        toAddress: "456 Elm St, City, Country",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={30} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Ordered",
      },
      {
        orderID: "51649",
        date: "2023-09-09",
        fromAddress: "123 Main St, City, Country",
        toAddress: "456 Elm St, City, Country",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Shipped",
      },
      {
        orderID: "29049",
        date: "2023-09-09",
        fromAddress: "123 Main St, City, Country",
        toAddress: "456 Elm St, City, Country",
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={30} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        status: "Ordered",
      },
    ],
  };
}
