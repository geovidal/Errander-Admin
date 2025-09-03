'use client'

import Sidebar from '../../components/Sidebar'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function NewErranderPage() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      alert('Errander created successfully!')
      router.push('/erranders')
    }, 800)
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 ml-56 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Errander</h1>
          <p className="text-gray-600">Fill in the details to add a new errander</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6 max-w-5xl">
          {/* Personal Details */}
          <section className="card p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                <input id="name" className="input-field mt-1" placeholder="e.g., John Doe" required />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input id="email" type="email" className="input-field mt-1" placeholder="e.g., john@example.com" required />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                <input id="phone" className="input-field mt-1" placeholder="e.g., +234 801 234 5678" required />
              </div>
              <div>
                <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
                <input id="address" className="input-field mt-1" placeholder="Street, City" required />
              </div>
            </div>
          </section>

          {/* Identification */}
          <section className="card p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Identification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nin" className="text-sm font-medium text-gray-700">National ID (NIN)</label>
                <input id="nin" className="input-field mt-1" placeholder="e.g., 12345678901" />
              </div>
              <div>
                <label htmlFor="dob" className="text-sm font-medium text-gray-700">Date of Birth</label>
                <input id="dob" type="date" className="input-field mt-1" />
              </div>
              <div>
                <label htmlFor="idCard" className="text-sm font-medium text-gray-700">ID Card Upload</label>
                <input id="idCard" type="file" accept="image/*,.pdf" className="input-field mt-1" />
                <p className="text-xs text-gray-500 mt-1">Upload a clear image or PDF of your ID card</p>
              </div>
              <div>
                <label htmlFor="schoolPortal" className="text-sm font-medium text-gray-700">School Portal Screenshot</label>
                <input id="schoolPortal" type="file" accept="image/*,.pdf" className="input-field mt-1" />
                <p className="text-xs text-xs text-gray-500 mt-1">Upload screenshot or PDF of your school portal</p>
              </div>
            </div>
          </section>

          {/* Employment Details */}
          <section className="card p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Employment Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="startDate" className="text-sm font-medium text-gray-700">Start Date</label>
                <input id="startDate" type="date" className="input-field mt-1" />
              </div>
              <div>
                <label htmlFor="status" className="text-sm font-medium text-gray-700">Status</label>
                <select id="status" className="input-field mt-1">
                  <option value="available">Available</option>
                  <option value="on-trip">On Trip</option>
                  <option value="offline">Offline</option>
                </select>
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex justify-end">
            <button type="button" onClick={() => router.back()} className="btn-secondary mr-3">Cancel</button>
            <button type="submit" className="btn-primary" disabled={submitting}>{submitting ? 'Creating...' : 'Create Errander'}</button>
          </div>
        </form>
      </main>
    </div>
  )
}
