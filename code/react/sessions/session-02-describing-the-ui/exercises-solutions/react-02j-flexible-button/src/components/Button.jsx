import './Button.css';

export default function Button({ children, colorScheme, size, variant }) {
  const className = `
    Button
    Button--size-${size || 'md'}
    Button--colorScheme-${colorScheme || 'gray'}
    Button--variant-${variant || 'solid'}
  `;

  return <button className={className}>{children}</button>;
}
