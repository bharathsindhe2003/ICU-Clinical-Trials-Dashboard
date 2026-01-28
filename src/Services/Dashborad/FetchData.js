import { database } from "../Firebase/config";
import { ref, query, limitToLast, get } from "firebase/database";
import { plotVDPCOT, plotVDPVC, plotVDPHR, plotVDPSPO2, plotVDPRR, plotVDPBP } from "./Echarts/VDP/PlotVDPcharts.js";
import { plotPCDNOP, plotPCDADMF } from "./Echarts/PCD/PlotPCDcharts.js";
export default async function FetchDatafromFB() {
  try {
    const dashStatsRef = ref(database, "/dash_stats");
    const dashStatsQuery = query(dashStatsRef, limitToLast(1));

    const snapshot = await get(dashStatsQuery);
    const snapshotVal = snapshot.val();
    const data = snapshotVal[Object.keys(snapshotVal)[0]];
    computeSection1Data(data);
    computeSection2Data(data);
    computeSection3Data(data);

    return data;
  } catch (error) {
    console.error("Error fetching data from Firebase:", error);
    return;
  }
}

function computeSection1Data(data) {
  console.log("Computing Section 1 Data", data);
  const tgt = data?.ovr?.tgt ?? 2000; // target value (defaults to 2000)
  const min_c = data?.ovr?.min_c; // min completion value for least-complete vital
  const time_dist = data?.ovr?.time_dist; // time distribution data perweek

  console.log("tgt:", tgt, "min_c:", min_c);

  const main_pie = document.getElementById("VDPCOT");
  plotVDPCOT(main_pie, { tgt, min_c });

  const main_bar = document.getElementById("VDPVC");
  plotVDPVC(main_bar, { time_dist });

  const data_hr = {
    Normal: data?.v_cats?.hr?.norm, // count of normal heart rate readings
    Bradycardia: data?.v_cats?.hr?.brady, // count of bradycardia readings
    Tachycardia: data?.v_cats?.hr?.tachy, // count of tachycardia readings
    Total: data?.v_cats?.hr?.tot, // total heart rate readings
  };
  const small_pie_hr = document.getElementById("VDPHR");
  plotVDPHR(small_pie_hr, data_hr);

  const data_spo2 = {
    Normal: data?.v_cats?.spo2?.norm, // count of normal SpO2 readings
    Low: data?.v_cats?.spo2?.low, // count of low SpO2 readings
    Total: data?.v_cats?.spo2?.tot, // total SpO2 readings
  };
  const small_pie_spo2 = document.getElementById("VDPSPO2");
  plotVDPSPO2(small_pie_spo2, data_spo2);

  const data_rr = {
    Eupnea: data?.v_cats?.rr?.eup, // count of normal respiratory rate readings
    Bradypnea: data?.v_cats?.rr?.brady, // count of bradypnea readings
    Tachypnea: data?.v_cats?.rr?.tachy, // count of tachypnea readings
    Total: data?.v_cats?.rr?.tot, // total respiratory rate readings
  };
  const small_pie_rr = document.getElementById("VDPRR");
  plotVDPRR(small_pie_rr, data_rr);

  const data_bp = {
    "Lower than normal": data?.v_cats?.bp?.low, // count of low blood pressure readings
    Normal: data?.v_cats?.bp?.norm, // count of normal blood pressure readings
    Elevated: data?.v_cats?.bp?.elv, // count of elevated blood pressure readings
    "High (1)": data?.v_cats?.bp?.h1, // count of high stage 1 blood pressure readings
    "High (2)": data?.v_cats?.bp?.h2, // count of high stage 2 blood pressure readings
    Total: data?.v_cats?.bp?.tot, // total blood pressure readings
  };
  const small_pie_bp = document.getElementById("VDPBP");
  plotVDPBP(small_pie_bp, data_bp);
}
function computeSection2Data(data) {
  // Placeholder for Section 2 data computation logic
  console.log("Computing Section 2 Data", data);
  const data_nop = {
    Male: data?.cohort?.m_count,
    Female: data?.cohort?.f_count,
    Total: data?.cohort?.m_count + data?.cohort?.f_count,
  };
  const main_pie = document.getElementById("PCDNOP");
  plotPCDNOP(main_pie, data_nop);

  const data_adm = {
    "<40": data?.cohort?.age_dist?.m?.g1, // count of males under 40
    "40-49": data?.cohort?.age_dist?.m?.g2, //  count of males 40-49
    "50-59": data?.cohort?.age_dist?.m?.g3, // count of males 50-59
    "60-69": data?.cohort?.age_dist?.m?.g4, // count of males 60-69
    "70-79": data?.cohort?.age_dist?.m?.g5, // count of males 70-79
    ">79": data?.cohort?.age_dist?.m?.g6, // count of males over 79
  };
  const data_adf = {
    "<40": data?.cohort?.age_dist?.f?.g1, // count of females under 40
    "40-49": data?.cohort?.age_dist?.f?.g2, // count of females 40-49
    "50-59": data?.cohort?.age_dist?.f?.g3, // count of females 50-59
    "60-69": data?.cohort?.age_dist?.f?.g4, // count of females 60-69
    "70-79": data?.cohort?.age_dist?.f?.g5, // count of females 70-79
    ">79": data?.cohort?.age_dist?.f?.g6, // count of females over 79
  };
  const main_bar = document.getElementById("PCDADMF");
  plotPCDADMF(main_bar, data_adm, data_adf);
}
function computeSection3Data(data) {
  // Placeholder for Section 3 data computation logic
  console.log("Computing Section 3 Data", data);
}
