interface ButtonProps {
  children: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  onClick: () => void;
}

function Button({ children, onClick, color = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={'btn btn-' + color}>
      {children}
    </button>
  );
}

export default Button;
