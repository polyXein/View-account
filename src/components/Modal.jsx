import React  from "react";
import '../styles/modal.css'

function Modal({title, state, setState, description, children}){

    const changeState = () =>{
        setState(!state);
    }

    const handleModalDialogClick = (e)=>{
         e.stopPropagation();
    }

    return(

        <>
            <div className={` modal ${state && 'modal_open'}  `} onClick={changeState}  >
                <div className="contenedor_modal"  onClick={handleModalDialogClick}>
               
                <div className="wrapper">
                      <div className="encabezado_modal">
                        <h3>{title} </h3>
                    </div>     
                    <button type="button"
                    onClick={changeState}
                    className="cerrar">
                        X
                    </button>
                </div>  
                
                    <div className="content">
                        <p>{description} </p>
                            {children}
                    </div>
                    
                </div>


            </div>
        
        </>

    );
}

export {Modal}