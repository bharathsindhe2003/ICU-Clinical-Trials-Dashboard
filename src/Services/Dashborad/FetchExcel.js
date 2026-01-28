import axios from "axios";
import db from "../Firebase/config.js";
// Fetch Excel from google sheets
export default async function FetchExcel() {
  try {
    const response = await axios.get("https://docs.google.com/spreadsheets/u/1/d/1uDEjj-PEJ4npkX3HVIPSiS6WjrwfUdKMzm7YJkfXORw/htmlview?pli=1");
    console.log("response", response);
    return response.data.length ? response.data : [];
  } catch (error) {
    console.error("Error fetching Excel data:", error);
    return [];
  }
}
