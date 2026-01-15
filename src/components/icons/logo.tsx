import { type SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      aria-label="PawMe Logo"
      {...props}
    >
      <path fill="currentColor" d="M128 256A128 128 0 1 0 0 128a128 128 0 0 0 128 128Z" />
      <path
        fill="#000"
        d="M128 0a128 128 0 0 0 0 256 128 128 0 0 1 0-256Z"
      />
      <path
        fill="currentColor"
        d="M128 128a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
      />
      <path fill="#000" d="M128 128a32 32 0 1 1-64 0 32 32 0 1 1 64 0Z" />
      <path
        fill="#000"
        d="M152 72a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM184 152a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM160 160a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
    </svg>
  );
}
