import "./UploadingSpinner.css";
import Spinner from "react-bootstrap/Spinner";
export default function UploadingSpinner() {
  return (
    <div className="spinner-container">
      <Spinner className="spinner" animation="border" role="status">
        <span className="visually-hidden">loading...</span>
      </Spinner>
    </div>
  );
}
