import React from "react";
import { Grid, TextField, InputAdornment, IconButton } from "@mui/material";
import {Visibility,VisibilityOff } from "@mui/icons-material";
const Input = ({
  half,
  type,
  label,
  name,
  handleChange,
  autoFocus,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        type={type}
        autoFocus={autoFocus}
        onChange={handleChange}
        variant="outlined"

        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
