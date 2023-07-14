
function Items(props) {
    

    return (
        <div>
            <div className="container text-center shadow p-2">
            <li>
            <input
                  type="checkbox"
                  value={props.item.packed}
                  onChange={() => props.onToggleItem(props.item.id)}
            />
            <span style={props.item.packed ? { textDecoration: "line-through" } : {}}>
                    {props.item.quantity} {props.item.description}
            </span>

            

            <button onClick={() => props.onDeleteItem(props.item.id)}>❌</button>

            </li>

          
            </div>
              
        </div>
    )
}

export default Items
