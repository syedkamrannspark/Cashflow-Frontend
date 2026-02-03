type ConnectionCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    badge?: string;
    supported?: string[];
    ctaLabel: string;
    disabled?: boolean;
    accent: "green" | "blue" | "purple" | "pink" | "yellow";
    onAction?: () => void;
};

const getAccentClasses = (accent: "green" | "blue" | "purple" | "pink" | "yellow") => {
    const colorMap = {
        green: {
            bg: "bg-emerald-50",
            text: "text-emerald-600",
            border: "border-emerald-200",
            hover: "hover:border-emerald-300",
            buttonBgColor: "#059669",
            buttonHoverColor: "#047857",
            shadowColor: "rgba(16, 185, 129, 0.2)",
        },
        blue: {
            bg: "bg-blue-50",
            text: "text-blue-600",
            border: "border-blue-200",
            hover: "hover:border-blue-300",
            buttonBgColor: "#2563eb",
            buttonHoverColor: "#1d4ed8",
            shadowColor: "rgba(37, 99, 235, 0.2)",
        },
        purple: {
            bg: "bg-purple-50",
            text: "text-purple-600",
            border: "border-purple-200",
            hover: "hover:border-purple-300",
            buttonBgColor: "#9333ea",
            buttonHoverColor: "#7e22ce",
            shadowColor: "rgba(147, 51, 234, 0.2)",
        },
        pink: {
            bg: "bg-pink-50",
            text: "text-pink-600",
            border: "border-pink-200",
            hover: "hover:border-pink-300",
            buttonBgColor: "#ec4899",
            buttonHoverColor: "#db2777",
            shadowColor: "rgba(236, 72, 153, 0.2)",
        },
        yellow: {
            bg: "bg-yellow-50",
            text: "text-yellow-600",
            border: "border-yellow-200",
            hover: "hover:border-yellow-300",
            buttonBgColor: "#eab308",
            buttonHoverColor: "#ca8a04",
            shadowColor: "rgba(234, 179, 8, 0.2)",
        },
    };
    return colorMap[accent];
};

export function ConnectionCard({
    title,
    description,
    icon,
    badge,
    supported,
    ctaLabel,
    disabled = false,
    accent,
    onAction
}: ConnectionCardProps) {
    const colors = getAccentClasses(accent);

    return (
        <div
            className={`
        relative rounded-2xl flex flex-col items-start p-4 w-full
        bg-white
        border ${colors.border}
        transition-all duration-200 
        ${!disabled && `${colors.hover} hover:shadow-md`}
        ${disabled && "opacity-60 cursor-not-allowed"}
      `}
        >
            {/* Badge */}
            {/* {badge && (
                <span className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full
          bg-gray-100 text-gray-700 font-medium`}>
                    {badge}
                </span>
            )} */}

            {/* Icon */}
            <div
                className={`
          w-10 h-10 flex items-center justify-center rounded-lg mb-4
          ${colors.bg} ${colors.text}
        `}
            >
                {icon}
            </div>

            {/* Content */}
            <h3 className="text-gray-900 font-semibold text-base mb-1">
                {title}
            </h3>

            <p className="text-gray-600 text-sm mb-4">
                {description}
            </p>

            {/* Supported */}
            {supported && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {supported.map((item) => (
                        <span
                            key={item}
                            className={`text-xs px-2 py-1 rounded-md
                bg-gray-100 text-gray-700`}
                        >
                            {item}
                        </span>
                    ))}
                </div>
            )}

            {/* CTA */}
            {!disabled ? (
                <button
                    className={`
              w-full rounded-lg py-2 px-3 text-sm font-medium text-white
              transition-all duration-300 transform hover:scale-105 active:scale-95
            `}
                    style={{
                        backgroundColor: colors.buttonBgColor,
                        boxShadow: `0 10px 25px -5px ${colors.shadowColor}`,
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = colors.buttonHoverColor;
                        e.currentTarget.style.boxShadow = `0 20px 35px -5px ${colors.shadowColor}`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = colors.buttonBgColor;
                        e.currentTarget.style.boxShadow = `0 10px 25px -5px ${colors.shadowColor}`;
                    }}
                    onClick={() => onAction?.()}
                >
                    {ctaLabel}
                </button>
            ) : (
                <button
                    disabled
                    className="w-full rounded-lg py-2 px-3 text-sm font-medium text-white
              bg-gray-300 text-gray-500 cursor-not-allowed
            "
                >
                    {ctaLabel}
                </button>
            )}
        </div>
    );
}
