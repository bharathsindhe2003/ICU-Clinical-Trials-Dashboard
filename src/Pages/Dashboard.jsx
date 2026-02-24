import Page0 from "../Components/Page0";
import Page1 from "../Components/Page1";
import Page2 from "../Components/Page2";
import Page3 from "../Components/Page3";
export default function Dashboard({ DISPLAY_MODE }) {
  // console.log(DISPLAY_MODE);
  return DISPLAY_MODE === 0 ? (
    <Page0 DISPLAY_MODE={DISPLAY_MODE} />
  ) : DISPLAY_MODE === 1 ? (
    <Page1 DISPLAY_MODE={DISPLAY_MODE} />
  ) : DISPLAY_MODE === 2 ? (
    <Page2 DISPLAY_MODE={DISPLAY_MODE} />
  ) : DISPLAY_MODE === 3 ? (
    <Page3 DISPLAY_MODE={DISPLAY_MODE} />
  ) : null;
}
