import { TextField, textFieldClasses } from '@mui/material'
import React from 'react'

const CustomInput = (props) => {
  return (
    <div>
                  <TextField
                variant={props.variant}
                fullWidth
                margin="dense"
                size="small"
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
                type={props.type}
                select={props.select}
                helperText={props.helperText}
                placeholder={props.placeholder}
                {...props}
                InputLabelProps={{ className: 'textFieldcustomLable' }}
                InputProps={{
                  className: 'customInput', // Add your custom class here
                }}
            >
                {props.content}
            </TextField>
    </div>
  )
}

export default CustomInput
