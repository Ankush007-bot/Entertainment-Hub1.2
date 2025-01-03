import React from "react";
//import Pagination from "@material-ui/lab/Pagination";
//import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >

        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color='secondary'
          hideNextButton
          hidePrevButton
        />
      {/* <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          color='secondary'
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider> */}
    </div>
  );
}
