import React, { useState } from 'react'
const Temp =()=>{
    const [,setcdata]=useState(" ")
    const [fdata,setfdata]=useState(" ")

       
    const HandleCelcius=(e)=>{
        const c=((e.target.value)*1.8)+32
        setfdata(c)
    }
    const HandleFehrenhite=(e)=>{
        setcdata(e.target.value)
    }
    return(
        <div>
            <div> <h1> Temperature converter </h1> </div>
            
            <div>
                <label htmlFor=''> <b>celcius :</b></label>
                <input type='text' onChange={HandleCelcius}/>
            </div>
            <div>
                <label htmlFor=''> <b>fehrenhite :</b></label>
                <input type='text' value={fdata} onChange={HandleFehrenhite}/>
            </div>
            
        </div>
    )
}
export default Temp;