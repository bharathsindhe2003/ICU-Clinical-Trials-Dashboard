import * as echarts from "echarts";

// Bland-Altman Plot
// data: { pts: [{ x: avg_val, y: diff_val }, ...] }
function plotVDA1(plot, data) {
  //   if (!plot || !data || !Array.isArray(data.pts) || data.pts.length === 0) return;
  const points = data.pts.filter((p) => p != null && typeof p.x === "number" && typeof p.y === "number").map((p) => [p.x, p.y]);

  if (points.length === 0) return;

  const yValues = points.map((p) => p[1]);
  const xValues = points.map((p) => p[0]);

  const n = yValues.length;
  const mean = yValues.reduce((s, v) => s + v, 0) / n;
  let sd = 0;
  if (n > 1) {
    const variance =
      yValues.reduce((s, v) => {
        const d = v - mean;
        return s + d * d;
      }, 0) /
      (n - 1);
    sd = Math.sqrt(variance);
  }

  const lowerLimit = mean - 1.96 * sd;
  const upperLimit = mean + 1.96 * sd;

  const minX = Math.min(...xValues);
  const maxX = Math.max(...xValues);

  const chart = echarts.getInstanceByDom(plot) || echarts.init(plot, null, { renderer: "canvas" });

  const option = {
    title: {
      text: "Bland-Altman Plot",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      formatter(params) {
        const pt = params.find((p) => p.seriesType === "scatter");
        if (!pt) return "";
        return `Avg: ${pt.value[0]}<br/>Diff: ${pt.value[1]}`;
      },
    },
    xAxis: {
      type: "value",
      name: "Average of Methods",
      nameLocation: "middle",
      nameGap: 30,
    },
    yAxis: {
      type: "value",
      name: "Difference (Meas - Ref)",
      nameLocation: "middle",
      nameGap: 40,
    },
    series: [
      {
        name: "Data",
        type: "scatter",
        symbolSize: 6,
        data: points,
        itemStyle: {
          color: "#5470C6",
        },
      },
      {
        name: "Mean Difference",
        type: "line",
        data: [
          [minX, mean],
          [maxX, mean],
        ],
        showSymbol: false,
        lineStyle: {
          type: "solid",
          color: "#91CC75",
        },
      },
      {
        name: "+1.96 SD",
        type: "line",
        data: [
          [minX, upperLimit],
          [maxX, upperLimit],
        ],
        showSymbol: false,
        lineStyle: {
          type: "dashed",
          color: "#EE6666",
        },
      },
      {
        name: "-1.96 SD",
        type: "line",
        data: [
          [minX, lowerLimit],
          [maxX, lowerLimit],
        ],
        showSymbol: false,
        lineStyle: {
          type: "dashed",
          color: "#EE6666",
        },
      },
    ],
  };

  chart.setOption(option, true);
}

// Correlation Plot
// data: { pts: [{ x: ref_val, y: meas_val }, ...] }
function plotVDA2(plot, data) {
  //   if (!plot || !data || !Array.isArray(data.pts) || data.pts.length === 0) return;

  const points = data.pts.filter((p) => p != null && typeof p.x === "number" && typeof p.y === "number").map((p) => [p.x, p.y]);

  if (points.length === 0) return;

  const allVals = [...points.map((p) => p[0]), ...points.map((p) => p[1])];
  const minVal = Math.min(...allVals);
  const maxVal = Math.max(...allVals);

  const chart = echarts.getInstanceByDom(plot) || echarts.init(plot, null, { renderer: "canvas" });

  const option = {
    title: {
      text: "Correlation Plot",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      formatter(params) {
        const pt = params.find((p) => p.seriesType === "scatter");
        if (!pt) return "";
        return `Ref: ${pt.value[0]}<br/>Meas: ${pt.value[1]}`;
      },
    },
    xAxis: {
      type: "value",
      name: "Reference",
      nameLocation: "middle",
      nameGap: 30,
      min: minVal,
      max: maxVal,
    },
    yAxis: {
      type: "value",
      name: "Measured",
      nameLocation: "middle",
      nameGap: 40,
      min: minVal,
      max: maxVal,
    },
    series: [
      {
        name: "Data",
        type: "scatter",
        symbolSize: 6,
        data: points,
        itemStyle: {
          color: "#5470C6",
        },
      },
      {
        name: "Identity Line",
        type: "line",
        data: [
          [minVal, minVal],
          [maxVal, maxVal],
        ],
        showSymbol: false,
        lineStyle: {
          type: "dashed",
          color: "#91CC75",
        },
      },
    ],
  };

  chart.setOption(option, true);
}

// Error Distribution (e.g. smoothed curve over error categories)
// data: { bins: [...], vals: [...] }
function plotVDA3(plot, data) {
  //   if (!plot || !data || !Array.isArray(data.bins) || !Array.isArray(data.vals)) return;

  const bins = data.bins;
  const vals = data.vals.map((v) => Number(v) || 0);

  if (bins.length === 0 || vals.length === 0) return;

  const chart = echarts.getInstanceByDom(plot) || echarts.init(plot, null, { renderer: "canvas" });

  const option = {
    title: {
      text: "Error Distribution",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      name: "Error Category",
      data: bins,
      axisTick: { alignWithLabel: true },
    },
    yAxis: {
      type: "value",
      name: "Count",
      min: 0,
    },
    series: [
      {
        name: "Count",
        type: "line",
        smooth: true,
        data: vals,
        itemStyle: {
          color: "#5470C6",
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
    ],
  };

  chart.setOption(option, true);
}

// Error Histogram (bar chart over error bins)
// data: { bins: [...], vals: [...] }
function plotVDA4(plot, data) {
  //   if (!plot || !data || !Array.isArray(data.bins) || !Array.isArray(data.vals)) return;

  const bins = data.bins;
  const vals = data.vals.map((v) => Number(v) || 0);

  if (bins.length === 0 || vals.length === 0) return;

  const chart = echarts.getInstanceByDom(plot) || echarts.init(plot, null, { renderer: "canvas" });

  const option = {
    title: {
      text: "Error Histogram",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      name: "Error Bin",
      data: bins,
      axisTick: { alignWithLabel: true },
    },
    yAxis: {
      type: "value",
      name: "Count",
      min: 0,
    },
    series: [
      {
        name: "Count",
        type: "bar",
        data: vals,
        itemStyle: {
          color: "#EE6666",
        },
      },
    ],
  };

  chart.setOption(option, true);
}

export { plotVDA1, plotVDA2, plotVDA3, plotVDA4 };
