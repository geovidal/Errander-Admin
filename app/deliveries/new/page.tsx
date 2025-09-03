"use client"

import Sidebar from '../../components/Sidebar'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function NewDeliveryPage() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      router.push('/deliveries')
    }, 800)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 ml-56 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">New Delivery</h1>
            <p className="text-gray-600">Create a new delivery order</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6 max-w-6xl">
          {/* Sender / Receiver */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="card p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Sender Details</h2>
              <div className="space-y-3">
                <div>
                  <label htmlFor="senderName" className="text-sm font-medium text-gray-700">Sender Name</label>
                  <input id="senderName" className="input-field mt-1" placeholder="e.g., Khalid Ibrahim" required />
                </div>
                <div>
                  <label htmlFor="senderPhone" className="text-sm font-medium text-gray-700">Sender Phone</label>
                  <input id="senderPhone" className="input-field mt-1" placeholder="e.g., +234 801 234 5678" required />
                </div>
                <div>
                  <label htmlFor="pickupAddress" className="text-sm font-medium text-gray-700">Pickup Address</label>
                  <input id="pickupAddress" className="input-field mt-1" placeholder="Street, City" required />
                </div>
              </div>
            </section>

            <section className="card p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Receiver Details</h2>
              <div className="space-y-3">
                <div>
                  <label htmlFor="receiverName" className="text-sm font-medium text-gray-700">Receiver Name</label>
                  <input id="receiverName" className="input-field mt-1" placeholder="e.g., Aishat Oluyole" required />
                </div>
                <div>
                  <label htmlFor="receiverPhone" className="text-sm font-medium text-gray-700">Receiver Phone</label>
                  <input id="receiverPhone" className="input-field mt-1" placeholder="e.g., +234 802 345 6789" required />
                </div>
                <div>
                  <label htmlFor="dropoffAddress" className="text-sm font-medium text-gray-700">Dropoff Address</label>
                  <input id="dropoffAddress" className="input-field mt-1" placeholder="Street, City" required />
                </div>
              </div>
            </section>
          </div>

          {/* Package / Schedule */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="card p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Package</h2>
              <div className="space-y-3">
                <div>
                  <label htmlFor="itemName" className="text-sm font-medium text-gray-700">Item Name</label>
                  <input id="itemName" className="input-field mt-1" placeholder="e.g., Power Bank" required />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1">
                    <label htmlFor="weight" className="text-sm font-medium text-gray-700">Weight (kg)</label>
                    <input id="weight" className="input-field mt-1" placeholder="e.g., 1.2" />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="category" className="text-sm font-medium text-gray-700">Item Category</label>
                    <select id="category" className="input-field mt-1">
                      <option value="">Select category</option>
                      <option>Documents</option>
                      <option>Electronics</option>
                      <option>Groceries</option>
                      <option>Clothing</option>
                      <option>Fragile</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="notes" className="text-sm font-medium text-gray-700">Notes</label>
                  <textarea id="notes" className="input-field mt-1" placeholder="Optional instructions" rows={3} />
                </div>
              </div>
            </section>

            <section className="card p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Schedule</h2>
              <div className="space-y-3">
                <div>
                  <label htmlFor="date" className="text-sm font-medium text-gray-700">Preferred Date</label>
                  <input id="date" type="date" className="input-field mt-1" required />
                </div>
                <div>
                  <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Level</label>
                  <select id="service" className="input-field mt-1">
                    <option>Standard</option>
                    <option>Express</option>
                  </select>
                </div>
              </div>
            </section>
          </div>

          {/* Assignment & Pricing */}
          <section className="card p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-3">Assignment & Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <label htmlFor="errander" className="text-sm font-medium text-gray-700">Assign Errander</label>
                <select id="errander" className="input-field mt-1" required>
                  <option value="">Select errander</option>
                  <option value="1">John Doe</option>
                  <option value="2">Jane Smith</option>
                  <option value="3">Mike Johnson</option>
                  <option value="4">Sarah Wilson</option>
                </select>
              </div>
              <div>
                <label htmlFor="deliveryFee" className="text-sm font-medium text-gray-700">Delivery Fee (₦)</label>
                <input id="deliveryFee" type="number" min="0" step="0.01" className="input-field mt-1" placeholder="e.g., 2500" required />
              </div>
              <div>
                <label htmlFor="deliveryFeeCommission" className="text-sm font-medium text-gray-700">Delivery Fee Commission (₦)</label>
                <input id="deliveryFeeCommission" type="number" min="0" step="0.01" className="input-field mt-1" placeholder="e.g., 500" required />
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex justify-end">
            <button type="button" onClick={() => router.back()} className="btn-secondary mr-3">Cancel</button>
            <button type="submit" className="btn-primary" disabled={submitting}>{submitting ? 'Creating...' : 'Create Delivery'}</button>
          </div>
        </form>
      </main>
    </div>
  )
}
