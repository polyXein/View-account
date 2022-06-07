import { createContext } from "react";


const ToastContext = createContext;

export default ToastContext; 



export function ToastContextProvider(children){
    return(

            <ToastContext.Provider value="hola mundos">
                {children}
            </ToastContext.Provider>

    )
}