import React from 'react';
import './styles.scss';

type ModalProps = {
  isVisible: boolean;
};

const Modal: React.FC<ModalProps> = ({ isVisible, children }) => {
  let classDefault = 'tcl-modal__wrapper';
  if (isVisible) {
    classDefault += ' show';
  }
  return (
    <div className={classDefault}>
      <div className='tcl-mask'></div>
      <div className='tcl-dialog'>
        <div className='tcl-modal__content'>
          <div className='tcl-modal__header'>
            title
            <button className='tcl-modal__close'>X</button>
          </div>
          <div className='tcl-modal__body'>{children}</div>
          <div className='tcl-modal__footer'></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
