'use client'

import { X, Phone, Mail, MapPin, Package, Calendar, Clock } from 'lucide-react'
import CustomerStatusBadge, { type CustomerStatus } from './CustomerStatusBadge'

type Customer = {
  id: number
  name: string
  email: string
  phone: string
  address: string
  totalOrders: number
  status: CustomerStatus
  joinDate: string
  lastOrder: string
  totalSpent: number
}

type CustomerDetailsModalProps = {
  customer: Customer | null
  isOpen: boolean
  onClose: () => void
}

export default function CustomerDetailsModal({ customer, isOpen, onClose }: CustomerDetailsModalProps) {
  if (!isOpen || !customer) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Customer Details</h2>
            <p className="text-gray-600">View complete customer information</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-600">
                {customer.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{customer.name}</h3>
              <div className="flex items-center space-x-4">
                <CustomerStatusBadge status={customer.status} />
                <span className="text-sm text-gray-500">Customer ID: #{customer.id}</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <section className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Contact Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-900">{customer.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{customer.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg md:col-span-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium text-gray-900">{customer.address}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Order Statistics</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-900">{customer.totalOrders}</p>
                <p className="text-sm text-blue-600">Total Orders</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <div className="w-8 h-8 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">₦</span>
                </div>
                <p className="text-2xl font-bold text-green-900">₦{customer.totalSpent.toLocaleString()}</p>
                <p className="text-sm text-green-600">Total Spent</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-lg font-bold text-purple-900">{customer.joinDate}</p>
                <p className="text-sm text-purple-600">Member Since</p>
              </div>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Recent Activity</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Last Order</span>
                </div>
                <span className="text-sm font-medium text-gray-900">{customer.lastOrder}</span>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Close
          </button>
          <button className="px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded-lg transition-colors">
            Edit Customer
          </button>
        </div>
      </div>
    </div>
  )
}
