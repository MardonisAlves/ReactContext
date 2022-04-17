import { Button } from "@material-ui/core";
import ButtonCollor from "./context/ButtonCollor";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {css} from 'glamor';


function ButtonCustom()  {
   function notify() {
     toast.info("Protocolo Med Flow foi Iniciado!",{
     position: toast.POSITION.TOP_CENTER,
     bodyClassName: css({
     fontSize: '30px',
     height:'80px'
  }),

   });

 }
    return (
       <>
        <ButtonCollor.Consumer>
        {({color, variant}) => {

           return <> <Button variant={variant} color={color}  onClick={notify}>
              {color}
            </Button>
             </>
        }}
        </ButtonCollor.Consumer>

          <ToastContainer  style={{width:"600px"}}/>
        </>

    )
}

export default ButtonCustom;