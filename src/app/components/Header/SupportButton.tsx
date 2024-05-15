import React from "react";

interface SupportButtonProps { }

const SupportButton: React.FC<SupportButtonProps> = () => {
    return (
        <button className="border-[1px] border-blue-500 px-8 py-2 rounded-full font-medium">
            Support
        </button>
    )
}

export default SupportButton;