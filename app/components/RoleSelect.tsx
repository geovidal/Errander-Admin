"use client"

import { useState } from 'react'
import type { Role } from './RoleBadge'

export default function RoleSelect({ value, onChange }: { value: Role; onChange?: (r: Role) => void }) {
  const [internal, setInternal] = useState<Role>(value)
  const setVal = (r: Role) => {
    setInternal(r)
    onChange?.(r)
  }
  return (
    <select
      value={internal}
      onChange={(e) => setVal(e.target.value as Role)}
      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
      <option value="admin">Admin</option>
      <option value="staff">Staff</option>
    </select>
  )
}
