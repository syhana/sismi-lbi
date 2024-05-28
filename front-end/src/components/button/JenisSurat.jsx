export default function JenisSurat ({ label, id, onClick }) {
    return (
        <>
            <button className="bg-secondary w-fit rounded-2xl" type="button" onClick={onClick}>
                <p className="font-extrabold text-2xl text-white p-5" id={id}>{label}</p>
            </button>
        </>
    )
}
