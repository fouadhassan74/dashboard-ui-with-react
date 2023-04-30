import React, { useState } from "react";
import "../productList/productList.scss";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { productRows } from "../../dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "name",
      headerName: "name",
      width: 220,
      renderCell: (params) => {
        return (
          <div className='productList Product'>
            <img className='productListImg' src={params.row.img} alt='' />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "stock", width: 220 },
    { field: "status", headerName: "Status", width: 180 },
    { field: "price", headerName: "price ", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='productListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className='productList'>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={productRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}

export default ProductList;
