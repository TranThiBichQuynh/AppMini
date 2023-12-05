import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

export function Chat() {
   return(
       <div className="grid-rows-2 gap-5">
           <div className="mb-5">
               <TextField
                   id="outlined-textarea"
                   label="Chat"
                   placeholder="どうなさいました？"
                   multiline
                   style={{width: '800px'}}
               />
           </div>
           <div className="mt-10">
               <Button variant="outlined">送信</Button>
           </div>
       </div>
   )
}