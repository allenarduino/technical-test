import React from "react";

interface SupportButtonProps { }

const SupportButton: React.FC<SupportButtonProps> = () => {
    return (
        <button className="border-[1px] border-blue-500 md:px-8 md:py-2 px-5 py-2 rounded-full font-medium">
            Support
        </button>
    )
}

export default SupportButton;