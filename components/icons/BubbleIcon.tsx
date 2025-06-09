interface IconProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  className?: string;
}

export default function BubbleIcon({ 
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
        d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
        fill={fill}
      />
    </svg>
  );
} 