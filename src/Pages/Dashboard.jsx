import { useState, useEffect } from "react";
import FetchExcel from "../Services/Dashborad/FetchExcel";

export default function Dashboard() {
  const [excelData, setExcelData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const result = await FetchExcel();
      setExcelData(result);
    }
    loadData();
  }, []); // run only once when the component mounts

  return <div>Dashboard Page</div>;
}
