import { cn } from '../lib/utils'

export type CustomerStatus = 'active' | 'inactive' | 'suspended'

const statusConfig: Record<CustomerStatus, { label: string; className: string }> = {
  active: { label: 'Active', className: 'bg-success-50 text-success-600 border-success-500' },
  inactive: { label: 'Inactive', className: 'bg-gray-100 text-gray-600 border-gray-300' },
  suspended: { label: 'Suspended', className: 'bg-error-50 text-error-600 border-error-500' },
}

export default function CustomerStatusBadge({ status, className }: { status: CustomerStatus; className?: string }) {
  const config = statusConfig[status]
  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border', config.className, className)}>
      {config.label}
    </span>
  )
}
