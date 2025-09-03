'use client'

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Toggle from '../components/Toggle'
import RoleBadge, { type Role } from '../components/RoleBadge'
import RoleSelect from '../components/RoleSelect'

type User = {
  id: number
  email: string
  joined: string
  role: Role
}

const initialUsers: User[] = [
  { id: 1, email: 'suleimanol@gmail.com', joined: '05/08/2025', role: 'admin' },
  { id: 2, email: 'idris@restoneer.com', joined: '05/08/2025', role: 'staff' },
  { id: 3, email: 'idris@restoneer.com', joined: '05/08/2025', role: 'staff' },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'user' | 'prefs' | 'password'>('user')
  const [users, setUsers] = useState<User[]>(initialUsers)

  const updateRole = (id: number, role: Role) => {
    setUsers(prev => prev.map(u => (u.id === id ? { ...u, role } : u)))
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 ml-56 p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage organization, preferences, users and security</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button onClick={() => setActiveTab('user')} className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab==='user'?'border-accent-500 text-accent-600':'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>User Management</button>
            <button onClick={() => setActiveTab('prefs')} className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab==='prefs'?'border-accent-500 text-accent-600':'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Preferences</button>
            <button onClick={() => setActiveTab('password')} className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab==='password'?'border-accent-500 text-accent-600':'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Change Password</button>
          </nav>
        </div>

        {activeTab === 'user' && (
          <section className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">User Management</h2>
                <p className="text-sm text-gray-600">Manage and user roles</p>
              </div>
              <button className="btn-primary">Add New User</button>
            </div>

            <ul className="space-y-6">
              {users.map((u) => (
                <li key={u.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900 flex items-center gap-3">
                      {u.email}
                      <RoleBadge role={u.role} />
                    </p>
                    <p className="text-xs text-gray-500">Joined {u.joined}</p>
                  </div>
                  <RoleSelect value={u.role} onChange={(r) => updateRole(u.id, r)} />
                </li>
              ))}
            </ul>
          </section>
        )}

        {activeTab === 'prefs' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Organization */}
            <section className="card p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Organization</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Company Name</label>
                  <input className="input-field mt-1" placeholder="Errander Limited" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Support Email</label>
                  <input className="input-field mt-1" placeholder="support@errander.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Default Currency</label>
                  <select className="input-field mt-1">
                    <option>NGN (₦)</option>
                    <option>USD ($)</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Preferences */}
            <section className="card p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Preferences</h2>
              <div className="space-y-2">
                <Toggle label="Dark Mode" description="Use dark theme across the app" />
                <Toggle label="Compact Table Density" description="Reduce row heights for dense data" />
                <Toggle label="Enable Keyboard Shortcuts" description="Power-user shortcuts for actions" />
              </div>
            </section>

            {/* Notifications */}
            <section className="card p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Notifications</h2>
              <div className="space-y-2">
                <Toggle label="Delivery Status Updates" description="Receive notifications for delivery events" />
                <Toggle label="Weekly Reports" description="Email weekly performance summaries" />
                <Toggle label="Customer Activity" description="Notify on new customer signups" />
              </div>
            </section>

            {/* Security */}
            <section className="card p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Security</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Two-Factor Authentication</label>
                  <Toggle description="Require 2FA for admin sign in" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Session Timeout (minutes)</label>
                  <input className="input-field mt-1" placeholder="30" />
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'password' && (
          <section className="card p-6 max-w-xl">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Change Password</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Current Password</label>
                <input type="password" className="input-field mt-1" placeholder="••••••••" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">New Password</label>
                <input type="password" className="input-field mt-1" placeholder="••••••••" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Confirm New Password</label>
                <input type="password" className="input-field mt-1" placeholder="••••••••" />
              </div>
              <div className="flex justify-end pt-2">
                <button className="btn-secondary mr-3">Cancel</button>
                <button className="btn-primary">Update Password</button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
