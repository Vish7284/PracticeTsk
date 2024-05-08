import { useContext } from "react";
import ReactDOM from "react-dom";
import NoteContext from "../store/note-context";

const ModalOverlays = (props) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">{props.children}</div>
    </div>
  );
};

const BackDrop = (props) => {
   const ctx = useContext(NoteContext)
  return (
    <div
      className="fixed inset-0 bg-black opacity-50"
      onClick={()=> ctx.showAddButton()}
    ></div>
  );
};

const portalPlace = document.getElementById("modal");

const Modal = (props) => {
  const ctx = useContext(NoteContext)
  return (
    <>
      {ReactDOM.createPortal(<BackDrop  />, portalPlace)}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalPlace
      )}
    </>
  );
};

export default Modal;
