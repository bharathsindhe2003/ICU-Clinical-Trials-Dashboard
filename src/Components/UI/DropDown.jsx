import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function DorpDown({ selectedVital, onVitalChange, vitals }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Vital</InputLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" value={selectedVital} label="Vital" onChange={onVitalChange}>
        {vitals.map((vital) => (
          <MenuItem key={vital} value={vital}>
            {vital}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
