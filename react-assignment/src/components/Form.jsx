import { useState } from "react"

function Form(props) {
        const [quantity,setQuantity]=useState(1);
        const [description,setDescription]=useState("");

         const handleSubmit=(e)=>{
                e.preventDefault();
                if(!description) return;

                const newItem = { description, quantity, packed: false, id: Date.now() };
                //console.log(newItem);
                props.onAddItems(newItem);
           } 

     return (
        <div>
             <br></br>
           
  <div className="container text-center shadow p-2">
  <form  onSubmit={handleSubmit}>
     <div className="row">
       <div className="col-sm-5">
              <h3>What do you need for your 😍 trip?</h3>
       </div>
        <div className="col-sm-2">
             <select className="form-control"
                  value={quantity}
                  onChange={(e)=>setQuantity(Number(e.target.value))}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option  value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
        </div>
        <div className="col-sm-3">
             <input
                type="text"
                placeholder="Item..."
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div className="col-sm-2">
        <button className="btn btn-success">Add</button>
        </div>
              </div>

        </form>
        <br></br>
         </div>
        </div>
    )
}

export default Form
