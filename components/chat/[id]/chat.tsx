import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

export function Chat({params} : {params : {id: string}}) {
   return(
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
   )
}