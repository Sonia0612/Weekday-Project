import * as React from "react";
import { TextField, Autocomplete } from "@mui/material";

export default function SingleSelectComponent({
  label,
  value,
  onChange,
  options,
  placeholder,
  work=false
}) {
  let optionValues = [];
  if (Array.isArray(options)) {
    optionValues = options;
  } else {
    if(work){
      optionValues = Object.entries(options).map(([key, value]) => ({
        label: key,
        value: value
      }));
    }
    else{ optionValues = Object.keys(options)?.map((key) => ({
      label: options[key],
      value: options[key],
    }));}
  }
  const selectedValue = optionValues?.find((option) => ((option.value) == value ));

  return (
    <Autocomplete
      fullWidth
      value={selectedValue}
      disablePortal
      onChange={(event, newValue) => {
        onChange(newValue );
      }}
      groupBy={(option) => option.category}
      id="combo-box-demo"
      options={optionValues}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField {...params} label={label}
      placeholder={placeholder}
                 InputLabelProps={{ shrink: false }}
      />}
    />
  );
}
