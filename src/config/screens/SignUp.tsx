
import { Box, Typography, Paper, Grid } from "@mui/material";
import InputComp from "../../components/InputComp";
import ButtonComp from "../../components/ButtonComp"; 
import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <Box className="container"  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       
      <Paper className="paperColor"  elevation={3} sx={{ p: 3, maxWidth: 400 }}>
        <Typography variant="h6" className="fw-bold" gutterBottom>
        SignUp
        </Typography>
        <form>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <InputComp
                textFieldId="email"
                textFieldLabel="Email"
                textFieldVariant="outlined"
                type="email"
                
               
              />
            </Grid>
           
            <Grid item xs={12}>
              <InputComp
                textFieldId="password"
                textFieldLabel="Password"
                textFieldVariant="outlined"
                type="password"
                
               
              />
            </Grid>
            <Grid item xs={12}>
              <InputComp
                textFieldId="password"
                textFieldLabel="Confirm Password"
                textFieldVariant="outlined"
                type="password"
                
               
              />
            </Grid>
            <Grid item xs={12} className="d-flex justigy-content-between align-items-center gap-5">
            
             <ButtonComp  btnType="button" btnValue="SignUp" />
             <Typography>
               Already Signed Up? <Link to="/" >Login</Link>
             </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
