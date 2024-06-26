import show from "/icon/show.svg";
import ttd from '/ttd.svg'
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
