// TabelAction.js
import show from "/public/icon/show.svg";
import edit from "/public/icon/edit.svg";
import hapus from "/public/icon/delete.svg";
import s from "./tabel.module.css";

export default function TabelAction({ onView, onEdit, onDelete, showButtons = { view: true, edit: true, delete: true } }) {
  return (
    <div className={s.action}>
      {showButtons.view && (
        <button onClick={onView}>
          <img src={show} alt="show" />
        </button>
      )}
      {showButtons.edit && (
        <button onClick={onEdit}>
          <img src={edit} alt="edit" />
        </button>
      )}
      {showButtons.delete && (
        <button onClick={onDelete}>
          <img src={hapus} alt="hapus" />
        </button>
      )}
    </div>
  );
}
