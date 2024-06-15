import show from "/public/icon/show.svg";
import ttd from '/public/ttd.svg'
import s from "./tabel.module.css";

export default function TabelActionKalab({ onView, onTTD, showButtons = { ttd: true, view: true } }) {
  return (
    <div className={s.action}>
      {showButtons.ttd && (
        <button onClick={onTTD}>
          <img src={ttd} alt="ttd" />
        </button>
      )}
      {showButtons.view && (
        <button onClick={onView}>
          <img src={show} alt="show" />
        </button>
      )}
    </div>
  );
}
