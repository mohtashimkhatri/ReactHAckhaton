import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


type inputCompProps = {
textFieldId: string,
textFieldLabel: string,
textFieldVariant: any,
type: string
}


export default function InputComp( props: inputCompProps) {
    return(
        <>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField type={props.type} id={props.textFieldId} label={props.textFieldLabel} variant={props.textFieldVariant} className='w-100'/>

    </Box>
        </>
    )
}