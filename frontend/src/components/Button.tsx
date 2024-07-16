import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <div className='bg-primary p-2 pr-4 pl-4 text-sm mt-4 rounded-full text-success font-sans'>
            {children}
        </div>
    );
}

export default Button;