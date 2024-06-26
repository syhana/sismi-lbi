// TabelAction.js
import show from "/icon/show2.svg";
import accept from "/success.svg"
import decline from "/decline.svg"
import send from "/send.svg"
import s from "./tabel.module.css";

export default function TabelActionAsisten({ onView, onAcc, onDecline, onSend, showButtons = { acc: true, decline: true, send: true , view:true} }) {
  return (
    <div className={s.action}>
        {showButtons.acc && (
        <button onClick={onAcc}>
          <img src={accept} alt="show" />
        </button>
      )}
       {showButtons.decline && (
        <button onClick={onDecline}>
          <img src={decline} alt="show" />
        </button>
      )}
      {showButtons.send && (
        <button onClick={onSend}>
          <img src={send} alt="show" />
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
