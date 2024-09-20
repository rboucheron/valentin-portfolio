import {ReactNode} from "react";


function PhoneCard({
                       children,
                       srcImage,
                       altImage,
                       reverse,
                   }: {
    children: ReactNode;
    srcImage: string;
    altImage: string;
    reverse: boolean;
}) {


    return (
        <div

            className={`my-20 flex flex-col ${reverse ? 'md:flex-row-reverse justify-around' : 'md:flex-row justify-start'}    items-start md:items-center p-4 mt-10 space-x-6 space-y-8 md:space-y-0 md:space-x-8`}
        >
            <div
                className="ml-4"
            >
                <img
                    src={srcImage}
                    alt={altImage}
                    className="w-1/3 lg:w-3/5 m-auto rounded-lg shadow-lg"
                />
            </div>
            <div
                className="md:w-2/3 lg:w-1/2 space-y-5 "
            >

                {children}
            </div>
        </div>
    );
}

export default PhoneCard;