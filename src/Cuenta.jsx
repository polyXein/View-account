import React, {useEffect, useState} from 'react'
import './Cuenta.css'
import DragArea from './components/DragArea'
import { Modal } from './components/Modal.jsx'; 
import Card from './components/Card'
import personal from './assets/icons8-card-128 1.png'
import trash from './assets/icons8-trash-128 1.png'
import check from './assets/icons8-check-64 1.png'
import Toast from "./components/Toast"

import Footer from "./components/Footer"

const Cuenta = () => {


  const [deleteAccount, setDeleteAccount] = useState(false);
  const [validateCuenta, setValidateCuenta] = useState(false);
  const [uploadImage, setUploadImage] = useState(false);
  const [imagePrevious, setImagePrevious] = useState(null);

  const [showToast, setShowToast] = useState(false);

  const changeState = () =>{
    setUploadImage(!uploadImage);
}

const handleModalDialogClick = (e)=>{
  e.stopPropagation();
}

/* call API mockable.io */

const[info, setInfo] = useState("");

/* Api fake mockable.io */

const Api = "https://demo0035314.mockable.io/";

useEffect(() => {
      fetch(Api)
      .then(res => res.json())
      .then((data) => {
        setInfo(data);
      })
    }, [])


    useEffect( ()=>{

      if(showToast === true){
      const timer = setTimeout( ()=> 
          {
            setShowToast(false)
          },2000);
    
     return () => clearTimeout(timer);
    }
    },[showToast]); 


    const changeState2 = () =>{
      setShowToast(true);
    }

  return (

<>
<div className='box_allCards_mainContent'>

    <div className='container_personal_info_datos'>
      <h1 className='title_cuenta_viewAccount'>Cuenta</h1>
      <p className='user_and_email_ofuser'>
         {info.name},  
        {info.email}
        </p>
    </div>

    <div className='Cuenta'>

         <Card
          logo={personal}
          title="Informacion personal"
          description="Proporciona tus datos personales e indicanos como podemos ponernos en contacto contigo."
        />
        
        <Card
          logo={check}
          title="Validacion de la cuenta"
          description="Valida tu cuenta."
          state={validateCuenta}
          setState={setValidateCuenta}
        />

        <Card
          state={deleteAccount}
          setState={setDeleteAccount}

          logo={trash}
          title="Elimina tu cuenta"
          description="Si ya no quieres hacer uso de tu cuenta."
        />

        <Modal 
         state={validateCuenta}
         setState={setValidateCuenta}
         
         title="Valida tu cuenta"
         description="Estás segura que deseas validar tu cuenta?"
        >
          <div className='container_index_validateAccount'>
          <div className='box_descripttive_continuos'>
            <p>Here you can validate your account to be able to have access of private features and to persist your info.</p>
          </div>

           <div className="buttons">
                <button
               onClick={()=>{ setValidateCuenta(false)}}
               >Cancel</button>
               <button 
                className='button_confirm_popupValidate'
                onClick={changeState}> Confirm</button>

              
          </div>
          </div>
        </Modal>

          <Modal
           state={uploadImage}
           setState={setUploadImage}
           
           title="Upload an image"
           description="Here should to be your identification"
          >
             <DragArea
             imagePrevious={imagePrevious}
             setImagePrevious={setImagePrevious}
            state={showToast}
            setState={setShowToast}
             >
               
             </DragArea>
          </Modal>    



        <Modal 
        onClick={handleModalDialogClick}
         state={deleteAccount}
         setState={setDeleteAccount}
         title="Eliminar cuenta"
         description="Esta segura que deseas eliminar tu cuenta"
        >
       <div className='container_index_validateAccount'>
          <div className='box_descripttive_continuos'>
            <p>Once you delete your information, All of your data goes to delete in the database.</p>
          </div>

           <div className="buttons">
                <button
               onClick={()=>{ setDeleteAccount(false)}}
               >Cancel</button>
          <button
          className={`button_confirm_popupValidate ${showToast && 'hidde'}`}
          onClick={changeState2}
        >
            Confirm!
        </button>

              
          </div>
          </div>
        </Modal>

        <Toast
      state={showToast}
      setState={setShowToast}

        logo={check}
        name="Correct"
        color="#20ea15"
        />
        
      {/*   <Toast
        logo={trash}
        name="Wrong"
        color="#F51720"
        />
        
        <Toast
        logo={personal}
        name="!!!"
        color="#F8D210"
        />
 */}
    </div>

</div>

</>

  )
}

export default Cuenta;