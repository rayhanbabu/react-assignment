import { useState } from "react";
const Content=()=> {
     const [display, setDisplay] = useState('');
     const [text, setText] = useState('');
    
      
          const textBtn=()=>{
               setDisplay(text) 
             }

             const TextArea=(e)=>{
                 setText(e.target.value)
             }

        

    return (
        <div>
              <br></br>
             <div className="container shadow p-2">
                  <p className="text-center">Enter Content </p>
                <p className="text-center m-3">
                    <textarea onChange={TextArea}></textarea>
                 </p>
                <p className="text-center p-3"><button onClick={textBtn} className="btn btn-success">Click here to show Content</button></p>
                    <h2 className="text-center">{display}</h2> 
               </div>
               <br></br>
        </div>
    )
}

export default Content
