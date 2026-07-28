interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}

const variantStyles = {
  default: { backgroundColor: 'var(--color-surface-hover)', color: 'var(--color-text-secondary)' },
  primary: { backgroundColor: 'var(--color-primary)', color: 'white' },
  secondary: { backgroundColor: '#059669', color: 'white' }
};

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span 
      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
      style={variantStyles[variant]}
    >
      {children}
    </span>
  );
}
