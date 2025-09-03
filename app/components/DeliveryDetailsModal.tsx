'use client'

import { X, Package, User, Truck, Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react'
import StatusBadge from './StatusBadge'

export type Delivery = {
  id: number
  orderNumber: string
  sender: string
  receiver: string
  errander: string
  itemName: string
  status: 'pending' | 'in-transit' | 'delivered' | 'cancelled'
}

interface DeliveryDetailsModalProps {
  delivery: Delivery | null
  isOpen: boolean
  onClose: () => void
}

export default function DeliveryDetailsModal({ delivery, isOpen, onClose }: DeliveryDetailsModalProps) {
  if (!isOpen || !delivery) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl m-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Delivery #{delivery.orderNumber}</h3>
            <div className="mt-1"><StatusBadge status={delivery.status} /></div>
          </div>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5 space-y-6 overflow-y-auto flex-1">
          {/* Item */}
          <section>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Item</h4>
            <div className="flex items-center space-x-3 text-sm text-gray-700">
              <Package className="w-4 h-4 text-gray-500" />
              <span>{delivery.itemName}</span>
            </div>
          </section>

          {/* Item Description */}
          <section>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Item Description</h4>
            <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
              <p>This is a detailed description of the item being delivered. It includes specifications, dimensions, and any relevant details about the package contents.</p>
            </div>
          </section>

          {/* Special Instructions */}
          <section>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Special Instructions</h4>
            <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
              <p>Handle with care. Deliver between 9 AM - 5 PM. Contact recipient before delivery. Signature required upon receipt.</p>
            </div>
          </section>

          {/* Parties */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card p-4">
              <h5 className="text-sm font-semibold text-gray-900 mb-3">Sender</h5>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center space-x-2"><User className="w-4 h-4 text-gray-500" /><span>{delivery.sender}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-gray-500" /><span>sender@example.com</span></div>
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-gray-500" /><span>Phone 1: +234 800 000 0000</span></div>
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-gray-500" /><span>Phone 2: +234 800 000 0001</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-gray-500" /><span>Sender address, City</span></div>
              </div>
            </div>
            <div className="card p-4">
              <h5 className="text-sm font-semibold text-gray-900 mb-3">Receiver</h5>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center space-x-2"><User className="w-4 h-4 text-gray-500" /><span>{delivery.receiver}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-gray-500" /><span>receiver@example.com</span></div>
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-gray-500" /><span>+234 811 111 1111</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-gray-500" /><span>Receiver address, City</span></div>
              </div>
            </div>
          </section>

          {/* Assignment */}
          <section className="card p-4">
            <h5 className="text-sm font-semibold text-gray-900 mb-3">Assignment</h5>
            <div className="flex items-center justify-between text-sm text-gray-700">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-gray-500" />
                <span>Assigned Errander:</span>
              </div>
              <span className="font-medium text-gray-900">{delivery.errander}</span>
            </div>
          </section>

          {/* Timeline */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>Created: 2024-06-01</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-700">
              <Clock className="w-4 h-4 text-gray-500" />
              <span>ETA: 2h 30m</span>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end space-x-3 flex-shrink-0">
          <button onClick={onClose} className="btn-secondary">Close</button>
        </div>
      </div>
    </div>
  )
}
