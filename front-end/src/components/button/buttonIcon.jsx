import { Button } from "@material-tailwind/react";


export default function ButtonIcon ({ label, onClick, className, type, icon }){
    return (
        <>
        <div className="flex items-center">
            <Button
                type={type}
                className={`p-2 items-center border font-bold text-center text-white ${className} rounded-lg`} 
                onClick={onClick}
            >
                <div className="flex">
                    <img src={icon} alt="" className="pe-2"/>
                    <p className="pe-2 pt-1">{label}</p>
                </div>
            </Button>
        </div>
        </>
    )
}