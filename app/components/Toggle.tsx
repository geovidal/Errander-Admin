"use client"

import { useState } from 'react'
import { cn } from '../lib/utils'

export default function Toggle({ checked, onChange, label, description }: { checked?: boolean; onChange?: (v: boolean) => void; label?: string; description?: string }) {
  const [internal, setInternal] = useState(!!checked)
  const isControlled = typeof checked === 'boolean'
  const value = isControlled ? !!checked : internal

  const setValue = (v: boolean) => {
    if (!isControlled) setInternal(v)
    onChange?.(v)
  }

  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div>
        {label && <p className="text-sm font-medium text-gray-900">{label}</p>}
        {description && <p className="text-xs text-gray-500">{description}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        onClick={() => setValue(!value)}
        className={cn(
          'relative inline-flex h-6 w-11 items-center rounded-full transition-colors border',
          value ? 'bg-primary-500 border-primary-500' : 'bg-gray-200 border-gray-300'
        )}
      >
        <span
          className={cn(
            'inline-block h-5 w-5 transform rounded-full bg-white transition-transform',
            value ? 'translate-x-5' : 'translate-x-1'
          )}
        />
      </button>
    </div>
  )
}
