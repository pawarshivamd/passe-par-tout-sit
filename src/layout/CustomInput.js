import { TextField } from '@mui/material'
import React from 'react'

const CustomInput = (props) => {
  return (
    <div>
                  <TextField
                variant="standard"
                fullWidth
                margin="dense"
                size="small"
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
                type={props.type}
                InputProps={props.InputProps}
                select={props.select}
                helperText={props.helperText}
                {...props}
            >
                {props.content}
            </TextField>
    </div>
  )
}

export default CustomInput
