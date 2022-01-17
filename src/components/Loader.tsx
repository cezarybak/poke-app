type Sizes = "xs" | "sm" | "md" | "lg" | "xl";
type Colors = "gray";

const colorMap = {
  gray: "text-gray-300",
};

const sizeMap = {
  xs: "h-6 w-6",
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-14 w-14",
};

export const Loader = ({
  screen = false,
  color = "gray",
  size = "md",
}: {
  screen?: boolean;
  color?: Colors;
  size?: Sizes;
}) => (
  <div
    className={`grid w-full z-40 ${
      screen ? "h-screen" : "h-full"
    } overflow-hidden place-items-center`}
  >
    <svg
      className={`animate-spin ${sizeMap[size]} ${colorMap[color]}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </div>
);
