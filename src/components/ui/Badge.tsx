import { cn } from '@lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'primary';
}

export default function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        {
          'bg-primary/10 text-primary': variant === 'default',
          'border border-primary/30 text-primary': variant === 'outline',
          'bg-primary text-white': variant === 'primary',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
