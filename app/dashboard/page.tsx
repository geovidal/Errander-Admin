'use client'

import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    revenue: '₦200,450.10',
    customers: '130',
    deliveries: '45',
    growth: '+12.5%'
  })
  const router = useRouter()

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 ml-56 p-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Overview of your business performance</p>
            </div>
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
              <button className="btn-primary" onClick={() => router.push('/deliveries/new')}>New Delivery</button>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
              <span className="text-lg font-bold text-green-600">₦</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.revenue}</div>
            <div className="text-sm text-gray-500">From Today</div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Customers</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.customers}</div>
            <div className="text-sm text-gray-500">Active users</div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Deliveries</h3>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.deliveries}</div>
            <div className="text-sm text-gray-500">This month</div>
          </div>
          
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Growth Rate</h3>
            </div>
            <div className="text-2xl font-bold text-green-600">{stats.growth}</div>
            <div className="text-sm text-gray-500">vs last month</div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <div className="card">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Revenue Overview</h3>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 text-xs rounded-full border border-gray-200 hover:bg-gray-50">7d</button>
                  <button className="px-3 py-1 text-xs rounded-full border border-gray-200 hover:bg-gray-50">30d</button>
                  <button className="px-3 py-1 text-xs rounded-full border border-gray-200 hover:bg-gray-50">90d</button>
                  <button className="px-3 py-1 text-xs rounded-full border border-primary-200 bg-primary-50 text-primary-700">YTD</button>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-600">Total revenue</p>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="text-3xl font-bold text-gray-900">{stats.revenue}</span>
                    <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-50 text-green-700 border border-green-200">{stats.growth}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Compared to last period</p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Orders</p>
                    <p className="text-sm font-semibold text-gray-900">{stats.deliveries}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Customers</p>
                    <p className="text-sm font-semibold text-gray-900">{stats.customers}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Avg/order</p>
                    <p className="text-sm font-semibold text-gray-900">₦4,455</p>
                  </div>
                </div>
              </div>

              {/* Sparkline / Chart placeholder */}
              <div className="h-52 bg-gray-50 rounded-lg border border-dashed border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">Revenue chart coming soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">New delivery completed</p>
                    <p className="text-xs text-gray-500">Order #890-482-842 delivered to Aishat Oluyole</p>
                  </div>
                  <span className="text-xs text-gray-500">2 min ago</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">New customer registered</p>
                    <p className="text-xs text-gray-500">Khalid Ibrahim joined the platform</p>
                  </div>
                  <span className="text-xs text-gray-500">15 min ago</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Payment received</p>
                    <p className="text-xs text-gray-500">₦15,000 payment for delivery #890-482-843</p>
                  </div>
                  <span className="text-xs text-gray-500">1 hour ago</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Errander assigned</p>
                    <p className="text-xs text-gray-500">John Doe assigned to delivery #890-482-844</p>
                  </div>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors" onClick={() => router.push('/deliveries/new')}>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p className="font-medium text-blue-900">Create Delivery</p>
                <p className="text-sm text-blue-600">Add new delivery order</p>
              </div>
            </button>
            
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="font-medium text-green-900">Generate Report</p>
                <p className="text-sm text-green-600">View business analytics</p>
              </div>
            </button>
            
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <p className="font-medium text-purple-900">Manage Users</p>
                <p className="text-sm text-purple-600">Add/edit customers & erranders</p>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
