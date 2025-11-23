import React, { memo } from "react";

const ContactInfo = memo(({ items = [], className = "" }) => {
    return (
        <div className={className}>
            {items.map((item, i) => (
                <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm mb-4"
                >
                    <h3 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                    </h3>
                    <p className="text-neutral-300 text-sm">{item.text}</p>
                </div>
            ))}
        </div>
    );
});

ContactInfo.displayName = "ContactInfo";
export default ContactInfo;