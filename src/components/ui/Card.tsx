interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div 
      className={`rounded-xl shadow-lg p-6 ${className}`}
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      {children}
    </div>
  );
}
