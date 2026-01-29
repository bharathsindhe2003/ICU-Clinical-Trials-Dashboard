import * as echarts from "echarts";

function plotPCDNOP(main_pie, data_nop) {
  try {
    if (!main_pie || !data_nop) return;

    const male = Number(data_nop.Male) || 0;
    const female = Number(data_nop.Female) || 0;

    // const total = male + female;

    const chart = echarts.getInstanceByDom(main_pie) || echarts.init(main_pie, null, { renderer: "canvas" });

    const option = {
      title: {
        text: "Patients by Sex",
        // subtext: total ? `Total: ${total}` : "",
        left: "center",
        top: 5,
        textStyle: {
          fontSize: 14,
        },
        subtextStyle: {
          fontSize: 11,
        },
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
        top: "middle",
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
          fontSize: 11,
        },
        data: ["Male", "Female"],
      },
      series: [
        {
          name: "Patients",
          type: "pie",
          // Match Section 1 main pie size
          radius: ["60%", "85%"],
          center: ["65%", "55%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: male, name: "Male", itemStyle: { color: "#03A3FF" } },
            { value: female, name: "Female", itemStyle: { color: "#EC49A7" } },
          ],
        },
      ],
    };

    chart.setOption(option, true);
  } catch (error) {
    console.error("Error in plotPCDNOP:", error);
  }
}

function plotPCDADMF(main_bar, data_adm, data_adf) {
  try {
    if (!main_bar || !data_adm || !data_adf) return;

    const ageBands = ["< 40 ages", "40-49 ages", "50-59 ages", "60-69 ages", "70-79 ages", "> 79 ages"]; // fixed order

    const maleValues = ageBands.map((band) => Number(data_adm[band]) || 0);
    const femaleValues = ageBands.map((band) => Number(data_adf[band]) || 0);

    const chart = echarts.getInstanceByDom(main_bar) || echarts.init(main_bar, null, { renderer: "canvas" });

    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        top: 10,
        data: ["Male", "Female"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ageBands,
        name: "Age Group",
        axisTick: { alignWithLabel: true },
      },
      yAxis: {
        type: "value",
        name: "Patient Count",
        min: 0,
      },
      series: [
        {
          name: "Male",
          type: "bar",
          data: maleValues,
          itemStyle: {
            color: "#03A3FF",
          },
          barGap: 0,
        },
        {
          name: "Female",
          type: "bar",
          data: femaleValues,
          itemStyle: {
            color: "#EC49A7",
          },
        },
      ],
    };

    chart.setOption(option, true);
  } catch (error) {
    console.error("Error in plotPCDADMF:", error);
  }
}
export { plotPCDNOP, plotPCDADMF };
