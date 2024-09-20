import {ReactNode} from "react";

function ProjectBtn({link, children}: {link: string, children: ReactNode}) {
    return (

        <a href={link} className="border border-primary bg-success p-2 flex justify-center items-center space-x-2 rounded-full w-40">
            <div className="text-primary font-light text-sm">{children}</div>

            <div>
                <svg width="14" height="16" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 1.5H3C2.46957 1.5 1.96086 1.71071 1.58579 2.08579C1.21071 2.46086 1 2.96957 1 3.5V15.5C1 16.0304 1.21071 16.5391 1.58579 16.9142C1.96086 17.2893 2.46957 17.5 3 17.5H15C15.5304 17.5 16.0391 17.2893 16.4142 16.9142C16.7893 16.5391 17 16.0304 17 15.5V11.5M9 9.5L17 1.5M17 1.5V6.5M17 1.5H12"
                        stroke="#F2E8CF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>


        </a>
    );
}

export default ProjectBtn;