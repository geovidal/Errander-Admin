'use client'

import { useState } from 'react'
import { 
  Filter, 
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Sidebar from '../components/Sidebar'
import StatusBadge from '../components/StatusBadge'
import ActionMenu from '../components/ActionMenu'
import DeliveryDetailsModal from '../components/DeliveryDetailsModal'
import DeliveryStatusModal from '../components/DeliveryStatusModal'

// Mock data based on Figma design
const initialDeliveries: Array<{
  id: number
  orderNumber: string
  sender: string
  receiver: string
  errander: string
  itemName: string
  status: 'pending' | 'in-transit' | 'delivered' | 'cancelled'
}> = [
  {
    id: 1,
    orderNumber: '890-482-842',
    sender: 'Khalid Ibrahim',
    receiver: 'Aishat Oluyole',
    errander: 'John Doe',
    itemName: 'Power Bank',
    status: 'pending'
  },
  {
    id: 2,
    orderNumber: '890-482-842',
    sender: 'Khalid Ibrahim',
    receiver: 'Aishat Oluyole',
    errander: 'John Doe',
    itemName: 'Power Bank',
    status: 'pending'
  },
  {
    id: 3,
    orderNumber: '890-482-842',
    sender: 'Khalid Ibrahim',
    receiver: 'Aishat Oluyole',
    errander: 'John Doe',
    itemName: 'Power Bank',
    status: 'pending'
  },
  {
    id: 4,
    orderNumber: '890-482-842',
    sender: 'Khalid Ibrahim',
    receiver: 'Aishat Oluyole',
    errander: 'John Doe',
    itemName: 'Power Bank',
    status: 'pending'
  },
  {
    id: 5,
    orderNumber: '890-482-842',
    sender: 'Khalid Ibrahim',
    receiver: 'Aishat Oluyole',
    errander: 'John Doe',
    itemName: 'Power Bank',
    status: 'pending'
  },
  {
    id: 6,
    orderNumber: '890-482-842',
    sender: 'Khalid Ibrahim',
    receiver: 'Aishat Oluyole',
    errander: 'John Doe',
    itemName: 'Power Bank',
    status: 'cancelled'
  },
  {
    id: 7,
    orderNumber: '890-482-842',
    sender: 'Khalid Ibrahim',
    receiver: 'Aishat Oluyole',
    errander: 'John Doe',
    itemName: 'Power Bank',
    status: 'in-transit'
  },
  {
    id: 8,
    orderNumber: '890-482-842',
    sender: 'Khalid Ibrahim',
    receiver: 'Aishat Oluyole',
    errander: 'John Doe',
    itemName: 'Power Bank',
    status: 'delivered'
  }
]

export default function DeliveriesPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [deliveries, setDeliveries] = useState(initialDeliveries)
  const [selectedDelivery, setSelectedDelivery] = useState<typeof initialDeliveries[number] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false)

  const handleAction = (action: string, deliveryId: number) => {
    if (action === 'view') {
      const delivery = deliveries.find(d => d.id === deliveryId) || null
      setSelectedDelivery(delivery)
      setIsModalOpen(!!delivery)
    } else if (action === 'status') {
      const delivery = deliveries.find(d => d.id === deliveryId) || null
      setSelectedDelivery(delivery)
      setIsStatusModalOpen(!!delivery)
    } else {
      console.log(`${action} delivery ${deliveryId}`)
    }
  }

  const closeModal = () => { setIsModalOpen(false); setSelectedDelivery(null) }
  const closeStatusModal = () => { setIsStatusModalOpen(false); setSelectedDelivery(null) }

  const updateStatus = (next: 'pending' | 'in-transit' | 'delivered' | 'cancelled') => {
    if (!selectedDelivery) return
    setDeliveries(prev => prev.map(d => d.id === selectedDelivery.id ? { ...d, status: next } : d))
  }

  const visible = deliveries.filter(d => selectedFilter === 'all' ? true : d.status === selectedFilter)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 ml-56 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Deliveries</h1>
          <p className="text-gray-600">Overview of your business performance</p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Status</span>
            </div>
            
            <select 
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-transit">In-Transit</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Date</span>
            </div>
            
            <input 
              type="date" 
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />

            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Today
            </button>
          </div>
        </div>

        {/* Deliveries Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">S/N</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Order Number</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Sender</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Receiver</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Errander</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Item Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {visible.map((delivery, index) => (
                  <tr key={delivery.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{delivery.orderNumber}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{delivery.sender}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{delivery.receiver}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{delivery.errander}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{delivery.itemName}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={delivery.status} />
                    </td>
                    <td className="px-6 py-4">
                      <ActionMenu 
                        itemId={delivery.id} 
                        onAction={handleAction}
                        context="delivery"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-gray-700">
            Showing 1 to {visible.length} of {deliveries.length} results
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      <DeliveryDetailsModal delivery={selectedDelivery} isOpen={isModalOpen} onClose={closeModal} />
      <DeliveryStatusModal
        isOpen={isStatusModalOpen}
        currentStatus={(selectedDelivery?.status ?? 'pending') as any}
        orderNumber={selectedDelivery?.orderNumber ?? ''}
        name={selectedDelivery?.sender ?? ''}
        onClose={closeStatusModal}
        onChange={updateStatus}
      />
    </div>
  )
}
