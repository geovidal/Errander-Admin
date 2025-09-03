import { cn } from '../lib/utils'

export type ErranderStatus = 'available' | 'on-trip' | 'offline'

const statusConfig: Record<ErranderStatus, { label: string; className: string }> = {
  available: { label: 'Available', className: 'bg-success-50 text-success-600 border-success-500' },
  'on-trip': { label: 'On-Trip', className: 'bg-purple-50 text-purple-600 border-purple-500' },
  offline: { label: 'Offline', className: 'bg-gray-100 text-gray-600 border-gray-300' },
}

export default function ErranderStatusBadge({ status, className }: { status: ErranderStatus; className?: string }) {
  const config = statusConfig[status]
  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border', config.className, className)}>
      {config.label}
    </span>
  )
}
