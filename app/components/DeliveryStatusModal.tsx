'use client'

import { X, CheckCircle2 } from 'lucide-react'

type DeliveryStatus = 'pending' | 'in-transit' | 'delivered' | 'cancelled'

interface DeliveryStatusModalProps {
  isOpen: boolean
  currentStatus: DeliveryStatus
  orderNumber: string
  name: string
  onClose: () => void
  onChange: (next: DeliveryStatus) => void
}

const OPTIONS: { value: DeliveryStatus; label: string }[] = [
  { value: 'pending', label: 'Pending' },
  { value: 'in-transit', label: 'In-Transit' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'cancelled', label: 'Cancelled' },
]

export default function DeliveryStatusModal({ isOpen, currentStatus, orderNumber, name, onClose, onChange }: DeliveryStatusModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md m-4">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Change Delivery Status</h3>
            <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="mt-1 text-sm text-gray-600">
            <span className="font-medium text-gray-900">Order:</span> #{orderNumber}
            <span className="mx-2">•</span>
            <span className="font-medium text-gray-900">Name:</span> {name}
          </div>
        </div>
        <div className="px-6 py-5 space-y-3">
          {OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => { onChange(opt.value); onClose() }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-colors ${
                currentStatus === opt.value
                  ? 'border-accent-500 bg-accent-50 text-accent-700'
                  : 'border-gray-200 hover:bg-gray-50 text-gray-800'
              }`}
            >
              <span className="text-sm font-medium">{opt.label}</span>
              {currentStatus === opt.value && <CheckCircle2 className="w-5 h-5" />}
            </button>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end">
          <button onClick={onClose} className="btn-secondary">Close</button>
        </div>
      </div>
    </div>
  )
}
