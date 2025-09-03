'use client'

import { useState, useRef, useEffect } from 'react'
import { MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react'
import { cn } from '../lib/utils'

interface ActionMenuProps {
  itemId: number
  onAction: (action: string, itemId: number) => void
  className?: string
  context?: 'delivery' | 'customer' | 'errander'
}

export default function ActionMenu({ itemId, onAction, className, context = 'delivery' }: ActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleAction = (action: string) => {
    onAction(action, itemId)
    setIsOpen(false)
  }

  const getContextLabels = () => {
    switch (context) {
      case 'customer':
        return { view: 'View Details', edit: 'Edit Customer', delete: 'Delete Customer', deleteAction: 'delete' }
      case 'errander':
        return { view: 'View Details', edit: null as any, delete: 'Deactivate Errander', deleteAction: 'deactivate' }
      default:
        return { view: 'View Details', edit: 'Edit Delivery', delete: 'Delete Delivery', deleteAction: 'delete' }
    }
  }

  const labels = getContextLabels()

  const isDelivery = context === 'delivery'

  return (
    <div className={cn('relative', className)} ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Open actions menu"
      >
        <MoreHorizontal className="w-4 h-4 text-gray-500" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
          <div className="py-1">
            <button
              onClick={() => handleAction('view')}
              className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>{labels.view}</span>
            </button>
            {isDelivery && (
              <button
                onClick={() => handleAction('status')}
                className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Edit className="w-4 h-4" />
                <span>Change Status</span>
              </button>
            )}
            {labels.edit && (
              <button
                onClick={() => handleAction('edit')}
                className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Edit className="w-4 h-4" />
                <span>{labels.edit}</span>
              </button>
            )}
            <button
              onClick={() => handleAction(labels.deleteAction)}
              className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>{labels.delete}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
