'use client'

import { useState } from 'react'
import { Filter, Search, MoreHorizontal } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import ErranderStatusBadge, { type ErranderStatus } from '../components/ErranderStatusBadge'
import ActionMenu from '../components/ActionMenu'
import ErranderDetailsModal from '../components/ErranderDetailsModal'
import Link from 'next/link'

type Errander = {
  id: number
  name: string
  email: string
  phone: string
  address: string
  status: ErranderStatus
  totalDeliveries: number
  joinDate: string
  lastActive: string
  earnings: number
}

const erranders: Errander[] = [
  { 
    id: 1, 
    name: 'John Doe', 
    email: 'john@example.com', 
    phone: '+234 801 234 5678', 
    address: '123 Main Street, Victoria Island, Lagos',
    status: 'available',
    totalDeliveries: 45,
    joinDate: 'Jan 2023',
    lastActive: '2 hours ago',
    earnings: 125000
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    email: 'jane@example.com', 
    phone: '+234 802 345 6789', 
    address: '456 Oak Avenue, Ikeja, Lagos',
    status: 'on-trip',
    totalDeliveries: 32,
    joinDate: 'Mar 2023',
    lastActive: '30 minutes ago',
    earnings: 89000
  },
  { 
    id: 3, 
    name: 'Mike Johnson', 
    email: 'mike@example.com', 
    phone: '+234 803 456 7890', 
    address: '789 Pine Road, Lekki, Lagos',
    status: 'offline',
    totalDeliveries: 28,
    joinDate: 'Jun 2023',
    lastActive: '1 day ago',
    earnings: 67000
  },
  { 
    id: 4, 
    name: 'Sarah Wilson', 
    email: 'sarah@example.com', 
    phone: '+234 804 567 8901', 
    address: '321 Elm Street, Surulere, Lagos',
    status: 'available',
    totalDeliveries: 67,
    joinDate: 'Dec 2022',
    lastActive: '1 hour ago',
    earnings: 189000
  },
]

export default function ErrandersPage() {
  const [statusFilter, setStatusFilter] = useState<'all' | ErranderStatus>('all')
  const [query, setQuery] = useState('')
  const [selectedErrander, setSelectedErrander] = useState<Errander | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filtered = erranders.filter((e) => {
    const matchesStatus = statusFilter === 'all' || e.status === statusFilter
    const matchesQuery = [e.name, e.email, e.phone].some((v) => v.toLowerCase().includes(query.toLowerCase()))
    return matchesStatus && matchesQuery
  })

  const handleAction = (action: string, id: number) => {
    if (action === 'view') {
      const errander = erranders.find(e => e.id === id)
      if (errander) {
        setSelectedErrander(errander)
        setIsModalOpen(true)
      }
    } else if (action === 'deactivate') {
      console.log('deactivate', id)
      // Here you could call an API to deactivate the errander and update state
      alert('Errander deactivated')
    } else {
      console.log(action, id)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedErrander(null)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 ml-56 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Erranders</h1>
            <p className="text-gray-600">Manage errander profiles and performance</p>
          </div>
          <Link href="/erranders/new" className="btn-primary">New Errander</Link>
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
              <option value="available">Available</option>
              <option value="on-trip">On Trip</option>
              <option value="offline">Offline</option>
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
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Total Deliveries</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filtered.map((e, index) => (
                  <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{e.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{e.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{e.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{e.totalDeliveries}</td>
                    <td className="px-6 py-4">
                      <ErranderStatusBadge status={e.status} />
                    </td>
                    <td className="px-6 py-4">
                      <ActionMenu itemId={e.id} onAction={handleAction} context="errander" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Errander Details Modal */}
        <ErranderDetailsModal
          errander={selectedErrander}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </main>
    </div>
  )
}
