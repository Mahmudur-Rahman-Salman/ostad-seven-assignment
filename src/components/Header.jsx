import { useState } from "react";

const Header = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addToList = () => {
    list.push(item);
    setList([...list]);
  };
  const removeItem = (index) => {
    list.splice(index, 1); 
    setList([...list]); 
  }
  return (
    <div>
      <table>
        <tbody>
            {
                list.length !== 0 
                ?
                (
                    list.map((element,index)=>{
                        return(
                            <tr>
                                <td>{element}</td>
                                <td><button onClick={()=>removeItem(index)}>Remove</button></td>
                            </tr>
                        )
                    })
                )
                : 
                (<tr></tr>)
            }
        </tbody>
      </table>
      <input
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder="item"
      />
      <button onClick={addToList}>Add item</button>
    </div>
  );
};

export default Header;
