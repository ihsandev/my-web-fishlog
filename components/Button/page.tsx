interface IButton {
  onClick?: () => void;
  title?: string;
  className?: string;
}

export default function Button({ onClick, title, className }: IButton) {
  return (
    <button
      className={`py-2 px-10 bg-white text-blue-900 rounded-full ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
