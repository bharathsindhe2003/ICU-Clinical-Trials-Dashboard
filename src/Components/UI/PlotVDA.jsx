import { useEffect } from "react";
import Box from "@mui/material/Box";
import * as echarts from "echarts";

export default function PLotVDA({ id, isVisible = true }) {
  useEffect(() => {
    if (!isVisible) return;

    for (let i = 1; i <= 4; i += 1) {
      const el = document.getElementById(id + i);
      if (!el) continue;

      const chart = echarts.getInstanceByDom(el);
      if (chart) {
        chart.resize();
      }
    }
  }, [id, isVisible]);

  return (
    <Box
      id={id}
      sx={{
        display: isVisible ? "block" : "none",
      }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
          gap: 2,
        }}>
        <Box
          id={id + "1"}
          sx={{
            // width: "100%",
            minWidth: 0,
            minHeight: { xs: 200, sm: 240 },

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderRadius: 2,
            p: 2,
          }}></Box>
        <Box
          id={id + "2"}
          sx={{
            // width: "100%",
            minWidth: 0,
            minHeight: { xs: 200, sm: 240 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderRadius: 2,
            p: 2,
          }}></Box>
        <Box
          id={id + "3"}
          sx={{
            // width: "100%",
            minWidth: 0,
            minHeight: { xs: 200, sm: 240 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderRadius: 2,
            p: 2,
          }}></Box> 
        <Box
          id={id + "4"}
          sx={{
            // width: "100%",
            minWidth: 0,
            minHeight: { xs: 200, sm: 240 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderRadius: 2,
            p: 2,
          }}></Box>
      </Box>
    </Box>
  );
}
