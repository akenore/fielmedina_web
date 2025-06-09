interface IconProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  className?: string;
}

export default function TiktokIcon({ 
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
        d="M19.321 5.562a5.123 5.123 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.941-1.341-2.321-1.341-3.895V0h-3.714v15.565c0 .4-.033.794-.098 1.178a4.307 4.307 0 0 1-4.609 3.595 4.307 4.307 0 0 1-4.307-4.307c0-2.377 1.93-4.307 4.307-4.307.238 0 .472.019.7.057V8.204c-.235-.033-.473-.05-.714-.05C3.853 8.154 0 12.007 0 16.719s3.853 8.565 8.565 8.565 8.565-3.853 8.565-8.565V8.486a9.63 9.63 0 0 0 5.87 2.015V7.015a6.094 6.094 0 0 1-3.679-1.453z"
        fill={fill}
      />
    </svg>
  );
} 