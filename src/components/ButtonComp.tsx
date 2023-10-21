import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


type buttonProps = {
btnType: any,
btnValue: any,

}
export default function ButtonComp(props: buttonProps){

    const navigate = useNavigate();
let ADpage= ()=>{
navigate(`/adminDashboard`)
}
return(
<>
<Button variant="contained" type={props.btnType} onClick={ADpage} >{props.btnValue}</Button>
</>
)
}