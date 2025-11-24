import React from "react";
import { SmallTagProps } from "./small-tag.types";

const SmallTag: React.FC<SmallTagProps> = ({ tag_type, children }) => {
    
    const tagClasses: Record<string, string> = {
        success: "bg-green-700",
        danger: "bg-red-600",
        warning: "bg-yellow-500",
    };

    const defaultText: Record<string, string> = {
        success: "New",
        danger: "Hot",
        warning: "",
    };

    return (
        <span className={`label w-fit rounded-2xl px-3 py-1 text-sm text-white ${tagClasses[tag_type] || "bg-gray-500"}`}>
            {children || defaultText[tag_type]}
        </span>
    );
};

export default SmallTag;









// import React from 'react'
// import { SmallTagProps } from './small-tag.type'

// const SmallTag: React.FC<SmallTagProps> = ({ tag_type, children }) => {
//     return (
//         <span
//             className={`label w-fit rounded-2xl px-3 py-1 text-sm text-white 
//             ${tag_type === 'success' ? 'bg-green-700' : ''} 
//             ${tag_type === 'danger' ? 'bg-red-600' : ''} 
//             ${tag_type === 'warning' ? 'bg-warning' : ''}`}
//         >
//             {tag_type === 'success' && (
//                 <span className="">{children || 'New'}</span>
//             )}
//             {tag_type === 'danger' && (
//                 <span className="">{children || 'Hot'}</span>
//             )}
//             {tag_type === 'warning' && <span className="">{children}</span>}
//         </span>
//     )
// }

// export default SmallTag
