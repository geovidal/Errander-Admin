'use client'

import { 
  LayoutDashboard, 
  Package, 
  Users, 
  User, 
  Settings, 
  LogOut 
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Deliveries', href: '/deliveries', icon: Package },
  { name: 'Customers', href: '/customers', icon: Users },
  { name: 'Erranders', href: '/erranders', icon: User },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-28 h-8 relative">
            <Image src="/brand/Logo%20(1).png" alt="Errander" fill sizes="112px" className="object-contain" priority />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-accent-50 text-accent-600 border-r-2 border-accent-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-gray-200">
        <div className="mb-4">
          <p className="text-xs font-medium text-gray-900 break-words">suleimanolokoba10@gmail.com</p>
          <p className="text-xs text-brand-500">Errander Limited</p>
        </div>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
          <LogOut className="w-4 h-4" />
          <span className="text-sm font-medium">Log out</span>
        </button>
      </div>
    </aside>
  )
}
