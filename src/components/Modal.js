import React from "react";
import styles from '../styles/Modal.module.css';
export function Modal( {open, children, onClose}) {

    if (!open) return null

    
    return(
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <div>
                    <div className={styles.buttonDiv}>
                        <button className={styles.closeBtn} onClick={onClose}></button>
                    </div>
                    {children}
                </div> 
            </div>
        </div>
    )
}

export default Modal;
