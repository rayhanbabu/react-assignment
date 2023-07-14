import { useState } from "react";
import Items from "./Items";

function PackingList(props) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems; 
    if (sortBy === "input") sortedItems = props.items;

    if (sortBy === "description")
    sortedItems = props.items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));

  if(sortBy === "packed")
    sortedItems = props.items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));

    
    return (
        <div>
             
            
                {sortedItems.map((item) => (
                    <Items
                        item={item}
                        onDeleteItem={props.onDeleteItem}
                        onToggleItem={props.onToggleItem}
                        key={item.id}
                    />
                ))}
           

            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={props.onClearList}>Clear list</button>
            </div>
           
        </div>
    )
}

export default PackingList
