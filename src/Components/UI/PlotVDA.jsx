import { useEffect } from "react";
import Box from "@mui/material/Box";
import * as echarts from "echarts";
import TableComponent from "./TableComponent";

export default function PLotVDA({ id, data, isVisible = true }) {
  useEffect(() => {
    function resizeCharts() {
      for (let i = 1; i <= 4; i += 1) {
        const el = document.getElementById(id + i);
        if (!el) continue;

        const chart = echarts.getInstanceByDom(el);
        if (chart) {
          chart.resize();
        }
      }
    }

    // Initial sizing
    resizeCharts();

    // Resize on window size changes
    window.addEventListener("resize", resizeCharts);
    return () => {
      window.removeEventListener("resize", resizeCharts);
    };
  }, [id, isVisible]);

  return (
    <Box id={id} sx={{ display: "block" }}>
      <Box
        sx={{
          width: "30%",
          marginLeft: "auto",
          marginRight: "auto",
          mb: 2,
        }}>
        <TableComponent data={data} />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
          gap: 2,
        }}>
        <Box
          id={id + "1"}
          className="echart-container"
          sx={{
            // width: "100%",
            minWidth: 0,
            minHeight: { xs: 200, sm: 240 },

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderRadius: 2,
            // p: 2,
          }}></Box>
        <Box
          id={id + "2"}
          className="echart-container"
          sx={{
            // width: "100%",
            minWidth: 0,
            minHeight: { xs: 200, sm: 240 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderRadius: 2,
            // p: 2,
          }}></Box>
        <Box
          id={id + "3"}
          className="echart-container"
          sx={{
            // width: "100%",
            minWidth: 0,
            minHeight: { xs: 200, sm: 240 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderRadius: 2,
            // p: 2,
          }}></Box>
        <Box
          id={id + "4"}
          className="echart-container"
          sx={{
            // width: "100%",
            minWidth: 0,
            minHeight: { xs: 200, sm: 240 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderRadius: 2,
            // p: 2,
          }}></Box>
      </Box>
    </Box>
  );
}
