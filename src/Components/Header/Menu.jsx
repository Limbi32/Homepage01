import { useRef } from "react"


export function Menu({Menu1,onclick}){
const iconref=useRef(null)



    return     <img  
      ref={iconref}
       onClick={onclick} 
       className="img1" 
       alt=""
        src={Menu1}
        />

   
}