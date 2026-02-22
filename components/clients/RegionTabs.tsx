'use client'

import { useState } from 'react'
import { Globe2 } from 'lucide-react'

interface Tab {
  id: string
  label: string
  count: number
  icon?: string
}

interface RegionTabsProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export default function RegionTabs({ tabs, activeTab, onTabChange }: RegionTabsProps) {
  return (
    <div className="mb-12">
      {/* Desktop Tabs */}
      <div className="hidden md:flex flex-wrap gap-3 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300
              ${activeTab === tab.id
                ? 'bg-green-600 text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-green-50 hover:text-green-600 border border-slate-200'
              }
            `}
          >
            <span className="flex items-center gap-2">
              {tab.icon && <span>{tab.icon}</span>}
              {tab.label}
              <span className={`
                px-2 py-0.5 rounded-full text-xs font-bold
                ${activeTab === tab.id
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-600'
                }
              `}>
                {tab.count}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <select
          value={activeTab}
          onChange={(e) => onTabChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-green-200 bg-white text-slate-700 font-semibold focus:outline-none focus:border-green-500"
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.icon} {tab.label} ({tab.count})
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
