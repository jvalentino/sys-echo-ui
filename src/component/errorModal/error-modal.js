import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

function display(message) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="react-confirm-alert">
          <div className="react-confirm-alert-body">
            <h1 className="alert__title">Error</h1>
            <p className="alert__body">{message}</p>

            <div className="react-confirm-alert-button-group">
              <button onClick={onClose}>Okay</button>
            </div>
          </div>
        </div>
      );
    }
  });
}

export { display };
