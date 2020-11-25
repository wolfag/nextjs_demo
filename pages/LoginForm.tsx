import React, { useState } from 'react';
import Modal from '../components/modal';

export default function LoginForm() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Modal isVisible={toggle}>
        <h2>Hello form</h2>
        <form>
          <input type='text' />
        </form>
      </Modal>
      <button onClick={() => setToggle(!toggle)}>Open modal</button>
    </div>
  );
}
