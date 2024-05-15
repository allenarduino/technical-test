import React from "react";

interface LogoTextProps { }

const LogoText: React.FC<LogoTextProps> = () => {


    return (

        <div className="flex items-center">
            <a href="#" className="text-xl font-medium text-gray-700">
                FRANCHAIN
            </a>
        </div>
    )

}
export default LogoText