import type { EaseFunctionType } from 'ease-motion';
interface SvgIconProps {
  name: EaseFunctionType;
  fill?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function EaseIcon(props: SvgIconProps) {
  const { name, ...rest } = props;
  const symbolId = `#icon-${name}`;
  if (name === 'easeOutBack') {
    return (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
        <path
          d="M14 89.2796C26.8967 24.7962 37.36 -3.67378 87 16.2796"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    );
  } else {
    return (
      <svg aira-hidden="true" {...rest}>
        <use href={symbolId} />
      </svg>
    );
  }
}
