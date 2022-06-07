import React, {useState, useEffect} from 'react'
 import styled from 'styled-components'
 

 import dragArea from "../styles/dragArea.css"
 
const DragArea = ({setImagePrevious, imagePrevious, state, setState}) => {
const [hidde, setHidde] = useState(false);

const changeImage = (e) => {
  const reader = new FileReader();
  
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = (e) => {
    e.preventDefault();
    setImagePrevious(e.target.result);
  }
}



const changeState = ()=>{
  setState(true);
  setHidde(true);
}

useEffect( ()=>{

  if(state === true){
  const timer = setTimeout( ()=> 
      {
        setState(false)
      },2000);

 return () => clearTimeout(timer);
}
},[state])


  return (
    <div>

        <div className='StyledragArea'>

        <br />
        <div className={`image-upload-wrap ${hidde && 'hidde'} `}  >
          <input className='file-upload-input'
          type="file"
          accept="image/*"
          multiple
          onChange={ e => {
              changeImage(e);

          }}
          />
          <div className='text-information'>
              <h3>Drag and Drop a file or select add multiple images</h3>
          </div>
        </div>

        <div className='render_images'>
          <img src={imagePrevious} alt="" height="100px" width="200px" />
        </div>


        <button className={`button_finish ${hidde && 'hidde'}`}
        onClick={changeState}
        >
            Finish!
        </button>

        </div>

    </div>
  )
}

export default DragArea;

/* const Toast = styled.button`

.button_finish{
  margin: 8px;
  width: 80px;
  padding: 8px;
  font-size: 14px;
  font-family: sans-serif;
  cursor: pointer;
}

.hidde{
  display:none !important;
}
 */

/* const StyleDragArea = styled.div`

width: 40%;
height: 40%;

.hidde{
  display:none !important;
}

.button_finish{
  margin: 8px;
  width: 80px;
  padding: 8px;
  font-size: 14px;
  font-family: sans-serif;
  cursor: pointer;
}
` */

/* 

 const StyleDragArea = styled.div`
  height: 100%;
  width: 100%;
  
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  .file-upload-content{
    display:none;
    text-align: center;
  }
  .file-upload-input{
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }
  .image-upload-wrap{
    position: relative;
    height: 100% !important;
    width: 100% !important;
    border: 4px solid #d0d7de;
    margin-left: 10px;
    margin-right: 10px;
    
  }
  .hidde{
    display:none !important;
  }

  .image-upload-wrap:hover{
    background-color: transparent;
    border: 4px dashed #d0d7de;
  }
  .text-information{
    margin-top: 30px;
    text-align: center;
  }
  .render_images{
    margin-top: 10px;
  }

  .button_finish{
    margin: 8px;
    width: 80px;
    padding: 8px;
    font-size: 14px;
    font-family: sans-serif;
    cursor: pointer;
  }

`
    */