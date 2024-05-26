import show from "/public/icon/show.svg";
import edit from "/public/icon/edit.svg";
import hapus from "/public/icon/delete.svg";
import s from "./tabel.module.css";
import { useLocation } from "react-router-dom";



export default function TabelAction(props) {
  const { onView, onEdit, onDelete } = props;

  const location = useLocation();
  const path = location.pathname;

  const pathArr = [
    "/kelolaPostingan",
    "/kelolaTim",
  ];
  const showIcon = pathArr.includes(path);

  return (
    <div className={s.action}>
      {showIcon ? (
        <>
           <button onClick={onView}>
        <img src={show} alt="show" />
      </button>
      <button onClick={onEdit}>
        <img src={edit} alt="edit" />
      </button>
      <button onClick={onDelete}>
        <img src={hapus} alt="hapus" />
      </button>
        </>
      ):(
     <>
     <button onClick={onView}>
        <img src={show} alt="edit" />
      </button>
        <button onClick={onEdit}>
        <img src={edit} alt="edit" />
      </button>
      <button onClick={onDelete}>
        <img src={hapus} alt="hapus" />
      </button>
     </>
      )}
   
    </div>
  );
}
