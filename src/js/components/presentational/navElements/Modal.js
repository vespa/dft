import React from "react";
import PropTypes from "prop-types";
const Modal = ({action, id, message}) => {
    return <div>
            <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="modalLabel">Confirmação</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {message}
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancela</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={action}>Confirma</button>
                  </div>
                </div>
              </div>
            </div>
        </div>

};
export default Modal;
Modal.propTypes = {
   id: PropTypes.string.isRequired,
   action: PropTypes.func.isRequired,
}