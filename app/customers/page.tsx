'use client'

import { useState } from 'react'
import { Filter, Search, MoreHorizontal } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import CustomerStatusBadge, { type CustomerStatus } from '../components/CustomerStatusBadge'
import ActionMenu from '../components/ActionMenu'
import CustomerDetailsModal from '../components/CustomerDetailsModal'

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

const customers: Customer[] = [
  { 
    id: 1, 
    name: 'Khalid Ibrahim', 
    email: 'khalid@example.com', 
    phone: '+234 801 234 5678', 
    address: '123 Main Street, Victoria Island, Lagos',
    totalOrders: 23, 
    status: 'active',
    joinDate: 'Jan 2023',
    lastOrder: '2 days ago',
    totalSpent: 125000
  },
  { 
    id: 2, 
    name: 'Aishat Oluyole', 
    email: 'aishat@example.com', 
    phone: '+234 802 345 6789', 
    address: '456 Oak Avenue, Ikeja, Lagos',
    totalOrders: 12, 
    status: 'inactive',
    joinDate: 'Mar 2023',
    lastOrder: '1 week ago',
    totalSpent: 67000
  },
  { 
    id: 3, 
    name: 'John Doe', 
    email: 'john@example.com', 
    phone: '+234 803 456 7890', 
    address: '789 Pine Road, Lekki, Lagos',
    totalOrders: 5, 
    status: 'suspended',
    joinDate: 'Jun 2023',
    lastOrder: '3 weeks ago',
    totalSpent: 28000
  },
  { 
    id: 4, 
    name: 'Jane Smith', 
    email: 'jane@example.com', 
    phone: '+234 804 567 8901', 
    address: '321 Elm Street, Surulere, Lagos',
    totalOrders: 31, 
    status: 'active',
    joinDate: 'Dec 2022',
    lastOrder: '1 day ago',
    totalSpent: 189000
  },
]

export default function CustomersPage() {
  const [statusFilter, setStatusFilter] = useState<'all' | CustomerStatus>('all')
  const [query, setQuery] = useState('')
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filtered = customers.filter((c) => {
    const matchesStatus = statusFilter === 'all' || c.status === statusFilter
    const matchesQuery = [c.name, c.email, c.phone].some((v) => v.toLowerCase().includes(query.toLowerCase()))
    return matchesStatus && matchesQuery
  })

  const handleAction = (action: string, id: number) => {
    if (action === 'view') {
      const customer = customers.find(c => c.id === id)
      if (customer) {
        setSelectedCustomer(customer)
        setIsModalOpen(true)
      }
    } else {
      console.log(action, id)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCustomer(null)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 ml-56 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Customers</h1>
          <p className="text-gray-600">Manage customer profiles and activity</p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Status</span>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>

          <div className="relative max-w-sm w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, email, phone"
              className="input-field pl-9"
            />
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">S/N</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Total Orders</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filtered.map((c, index) => (
                  <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{c.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{c.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{c.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{c.totalOrders}</td>
                    <td className="px-6 py-4">
                      <CustomerStatusBadge status={c.status} />
                    </td>
                    <td className="px-6 py-4">
                      <ActionMenu itemId={c.id} onAction={handleAction} context="customer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Customer Details Modal */}
        <CustomerDetailsModal
          customer={selectedCustomer}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </main>
    </div>
  )
}
