interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
}

const variantClasses = {
  default: 'bg-gray-100 text-gray-800',
  primary: 'bg-blue-100 text-blue-800',
  secondary: 'bg-green-100 text-green-800'
};

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}