import React, { useState } from 'react'
import './CardBtm.css'
import axios from '../axios/axios'
import FolderIcon from '@mui/icons-material/Folder';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import { useEffect } from 'react'
function CardBtm() {
  const [image,SetImage] = useState("")
  useEffect(() => {
    axios.get('/images').then((res)=>{
      console.log(res.data)
      SetImage(res.data)
    })
  }, [])
  
  return (
  <div>
    <div className='BottomCard' >
         <div className='CardOne'>
             <div>
                 <h4 className='Text'>EyeROV Inspection</h4>
                 <img className='Image1' src={image.rovImage}/>
                <div style={{display:'flex'}}>
                <button className='button1'><div style={{display:'flex'}}><FolderIcon/> <span className='Textbtn1'>Open Project</span></div></button>
                 <button className='button2'><div style={{display:'flex'}}><InsertChartIcon/> <span className='Textbtn2'>Report Outcome</span></div></button>
                </div>
             </div>
         </div>
       
        <div>
        </div>
       <div className='CardTwo'>

       <div>
                 <h4 className='MainText'>Diver's Inspection </h4>
                 <img className='Image2' src={image.diverImage}/>
                <div style={{display:'flex'}}>
                <button className='button1'><div style={{display:'flex'}}><FolderIcon/> <span className='Textbtn1'>Open Project</span></div></button>
                 <button className='button2'><div style={{display:'flex'}}><InsertChartIcon/> <span className='Textbtn2'>Report Outcome</span></div></button>
                </div>
             </div>
      </div>
       
    </div>


    <div className='btn'>

    </div>
  </div>
  )
}

export default CardBtm