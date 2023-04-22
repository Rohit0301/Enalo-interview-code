import React from "react";
import Pagination from "@mui/material/Pagination";
import { LIMIT } from "../constant";
export default function CustomPagination({ count, page, setPage }) {
  const handlePageChange = (e, page) => {
    setPage(page);
  };
  return (
    <Pagination
      count={Math.ceil(count / LIMIT)}
      page={page}
      color='secondary'
      onChange={handlePageChange}
    />
  );
}
