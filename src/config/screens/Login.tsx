
import { Box, Typography, Paper, Grid } from "@mui/material";
import InputComp from "../../components/InputComp";
import ButtonComp from "../../components/ButtonComp"; 
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <Box className="bg_img_login" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       
      <Paper className="paperColor"  elevation={3} sx={{ p: 4, maxWidth: 400 }}>
        <Typography variant="h6" className="fw-bold" gutterBottom>
          Login
        </Typography>
        <form>
          <Grid container spacing={2}>
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
            
             <ButtonComp  btnType="button" btnValue="Login" />
             <Typography>
                Don't have an account? <Link to="/SignUp" className="text-light">SingUp</Link>
             </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
