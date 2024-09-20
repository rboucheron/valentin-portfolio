import {ReactNode} from "react";


const ComputerCard = ({imageSrc, imageAlt, children}: {imageSrc: string, imageAlt: string, children: ReactNode}) => {
    return (
        <div className="flex flex-col space-y-5 p-2 my-20">
            <div className="w-4/5 m-auto">
                <img src={imageSrc} alt={imageAlt} style={{width: "100%"}}/>
            </div>
            <div className='w-3/4 m-auto space-y-4'>
                {children}
            </div>
        </div>
    );
}

export default ComputerCard;