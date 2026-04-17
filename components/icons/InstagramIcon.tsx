interface IconProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  className?: string;
}

export default function InstagramIcon({ 
  width = "24", 
  height = "24", 
  fill = "currentColor",
  className = "" 
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 8.877A3.123 3.123 0 1 0 15.123 12 3.127 3.127 0 0 0 12 8.877Zm0 5.123A2 2 0 1 1 14 12 2 2 0 0 1 12 14Z"
        fill={fill}
      />
      <path
        d="M17.5 7.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z"
        fill={fill}
      />
      <path
        d="M16 2H8A6.006 6.006 0 0 0 2 8v8a6.006 6.006 0 0 0 6 6h8a6.006 6.006 0 0 0 6-6V8a6.006 6.006 0 0 0-6-6ZM20 16a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4Z"
        fill={fill}
      />
    </svg>
  );
} 