type CardVariant = 'default' | 'featured';

interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variantStyles = {
    default: 'bg-white dark:bg-gray-800 shadow-md',
    featured: 'bg-white dark:bg-gray-800 shadow-lg border-2 border-blue-500',
  };

  const baseStyles = 'rounded-2xl p-6 md:p-8 h-full';

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return <div className={finalClassName}>{children}</div>;
};