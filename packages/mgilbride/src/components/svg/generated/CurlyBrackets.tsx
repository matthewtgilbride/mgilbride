import * as React from 'react';

function SvgCurlyBrackets(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="#444"
        d="M2.1 3.1c.2 1.3.4 1.6.4 2.9C2.5 6.8 1 7.5 1 7.5v1s1.5.7 1.5 1.5c0 1.3-.2 1.6-.4 2.9-.3 2.1.8 3.1 1.8 3.1H6v-2s-1.8.2-1.8-1c0-.9.2-.9.4-2.9.1-.9-.5-1.6-1.1-2.1.6-.5 1.2-1.1 1.1-2-.3-2-.4-2-.4-2.9C4.2 1.9 6 2 6 2V0H3.9C2.8 0 1.8 1 2.1 3.1zM13.9 3.1c-.2 1.3-.4 1.6-.4 2.9 0 .8 1.5 1.5 1.5 1.5v1s-1.5.7-1.5 1.5c0 1.3.2 1.6.4 2.9.3 2.1-.8 3.1-1.8 3.1H10v-2s1.8.2 1.8-1c0-.9-.2-.9-.4-2.9-.1-.9.5-1.6 1.1-2.1-.6-.5-1.2-1.1-1.1-2 .2-2 .4-2 .4-2.9C11.8 1.9 10 2 10 2V0h2.1c1.1 0 2.1 1 1.8 3.1z"
      />
    </svg>
  );
}

export default SvgCurlyBrackets;
