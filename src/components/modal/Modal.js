import React from 'react';
import './Modal.css';

const Modal = () => {

  var modal = document.getElementById("myModal");

  // var span = document.getElementsByClassName("close")[0];

  const onclick = ()=> {
    modal.style({display: "block"});
  }

  const spand = () => {
    modal.style({display: "none"});
  }

  const windo = function(event) {
    if (event.target == modal) {
      modal.style({display: "none"});
    }
  }

  return (
    <div>
      <button onClick={onclick}>Open Modal</button>
      <div onClick={windo}>
        <div class="modal-content">
          <span onClick={spand}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
      <h2>Modal Example</h2>
    </div>
  )
}

export default Modal
