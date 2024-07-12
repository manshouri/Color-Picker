import { useState } from "react"

const ColorPicker = ()=>{

    const [color,setColor] = useState("#FFFFFF");
    const handleColorChange = (event)=>{
       setColor(event.target.value);
    }
    return(
        <div className="color-container">
            <h1>COLOR PICKER</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>The color is {color}</p>


            </div>
            <label htmlFor="">Pick a color</label>
            <input type="color" onChange={handleColorChange} />
        </div>
    )
}
export default ColorPicker;
