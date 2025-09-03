import { cn } from '../lib/utils'

export type Role = 'admin' | 'staff'

const roleConfig: Record<Role, { label: string; className: string }> = {
  admin: { label: 'Admin', className: 'bg-red-50 text-red-700 border-red-300' },
  staff: { label: 'Staff', className: 'bg-green-50 text-green-700 border-green-300' },
}

export default function RoleBadge({ role, className }: { role: Role; className?: string }) {
  const config = roleConfig[role]
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border', config.className, className)}>
      {config.label}
    </span>
  )
}
