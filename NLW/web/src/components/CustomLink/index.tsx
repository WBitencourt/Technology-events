import {
  Link,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';

import type { LinkProps } from 'react-router-dom';

export function CustomLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  const styles = `${
    match ? 
    "text-white font-bold" 
    : 
    "text-[#a8a8b3] hover:text-white font-normal"
  }`

  return (
    <div>
      <Link
        className={`text-base py-2 pr-4 pl-3 transition duration-700 ${styles}`}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ''}
    </div>
  );
}