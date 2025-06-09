interface IconProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
  className?: string;
}

export default function UsersIcon({ 
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
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z"
        fill={fill}
      />
      <path
        d="M16.5 12c1.38 0 2.49-.59 2.49-2 0-1.38-1.11-2.5-2.49-2.5-.17 0-.33.02-.5.05.63.89 1 1.98 1 3.17 0 .38-.04.75-.12 1.1.21.11.42.18.62.18zm0 1c-.74 0-2.18-.32-3.03-.8.85.6 2.29.8 3.03.8.74 0 2.18-.2 3.03-.8-.85.48-2.29.8-3.03.8zm0-8c1.1 0 2 .9 2 2 0 .74-.4 1.38-1 1.72v-.22c0-.78-.29-1.5-.77-2.05.24-.27.49-.45.77-.45z"
        fill={fill}
      />
    </svg>
  );
} 