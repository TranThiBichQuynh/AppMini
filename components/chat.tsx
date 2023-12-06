import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import StaffLayout from './staffLayout';
export function Chat({params} : {params : {id: string}}) {
    const [staff, setStaff] = useState(undefined);
   return(
       <StaffLayout staff={staff}>
           <div className="flex w-auto h-auto">
               <div>
                   <TextField
                       id="outlined-textarea"
                       label="Chat"
                       placeholder="どうなさいました？"
                       multiline
                       style={{width: '800px', margin: '30px 0px'}}
                   />
               </div>
               <div>
                   <Button variant="outlined">送信</Button>
               </div>
           </div>
       </StaffLayout>

   )
}