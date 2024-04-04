"use client";

import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import useProductList from "@/hooks/useProductList";

const ProductList = () => {
  const { data, isLoading, isValidating } = useProductList();
  const [rows, setRows] = useState<any>([]);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "project_domain", headerName: "Project domain", flex: 1 },
    { field: "last_accessed", headerName: "Last accessed", flex: 1 },
  ];

  useEffect(() => {
    const newRows =
      data?.results.map((d) => ({
        id: d.id,
        project_domain: d.project_domain,
        last_accessed: d.last_accessed,
      })) || [];
    setRows(newRows || []);
  }, [data]);

  return (
    <Box mt="50px">
      <DataGrid
        columns={columns}
        rows={rows}
        rowCount={data?.count}
        loading={isLoading || isValidating}
      ></DataGrid>
    </Box>
  );
};

export default ProductList;
