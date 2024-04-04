"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { OutlinedInput, Stack } from "@mui/material";
import useProductList from "@/hooks/useProductList";

const ProductList = () => {
  const { data, isLoading, isValidating } = useProductList();
  const [searchValue, setSearchValue] = useState("");
  const [rows, setRows] = useState<any>([]);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "project_domain", headerName: "Project domain", flex: 1 },
    { field: "last_accessed", headerName: "Last accessed", flex: 1 },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    const newRows =
      data?.results
        .filter((d) => d.project_domain.includes(searchValue))
        .map((d) => ({
          id: d.id,
          project_domain: d.project_domain,
          last_accessed: d.last_accessed
            ? new Date(d.last_accessed).toLocaleDateString()
            : "",
        })) || [];
    setRows(newRows || []);
  }, [data, searchValue]);

  return (
    <Stack
      gap={4}
      mt="50px"
      p={"20px"}
      pt={"60px"}
      justifyContent="flex-start"
    >
      <OutlinedInput
        size="small"
        sx={{ width: "300px" }}
        placeholder="Enter project domain"
        onChange={handleChange}
      />
      <DataGrid
        columns={columns}
        rows={rows}
        rowCount={data?.count}
        loading={isLoading || isValidating}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        autoHeight
      ></DataGrid>
    </Stack>
  );
};

export default ProductList;
