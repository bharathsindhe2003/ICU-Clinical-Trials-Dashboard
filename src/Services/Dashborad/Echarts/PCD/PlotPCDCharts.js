import * as echarts from "echarts";

function plotPCDNOP(main_pie, data_nop) {
	if (!main_pie || !data_nop) return;

	const male = Number(data_nop.Male) || 0;
	const female = Number(data_nop.Female) || 0;

	const total = male + female;

	const chart = echarts.getInstanceByDom(main_pie) || echarts.init(main_pie, null, { renderer: "canvas" });

	const option = {
		title: {
			text: "Patients by Sex",
			subtext: total ? `Total: ${total}` : "",
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
				radius: ["45%", "75%"],
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
					{ value: male, name: "Male" },
					{ value: female, name: "Female" },
				],
			},
		],
	};

	chart.setOption(option, true);
}

function plotPCDADMF(main_bar, data_adm, data_adf) {
	// To be implemented: age distribution by sex bar chart
}

export { plotPCDNOP, plotPCDADMF };