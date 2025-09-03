import { cn } from '../lib/utils'

interface StatusBadgeProps {
  status: 'pending' | 'in-transit' | 'delivered' | 'cancelled'
  className?: string
}

const statusConfig = {
  pending: { 
    label: 'Pending', 
    className: 'bg-warning-50 text-warning-600 border-warning-500' 
  },
  'in-transit': { 
    label: 'In-Transit', 
    className: 'bg-purple-50 text-purple-600 border-purple-500' 
  },
  delivered: { 
    label: 'Delivered', 
    className: 'bg-success-50 text-success-600 border-success-500' 
  },
  cancelled: { 
    label: 'Cancelled', 
    className: 'bg-error-50 text-error-600 border-error-500' 
  }
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status]
  
  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border',
      config.className,
      className
    )}>
      {config.label}
    </span>
  )
}
