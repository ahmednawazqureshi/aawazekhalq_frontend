import Protected from '../../components/Protected'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
  DocumentTextIcon, 
  CalendarIcon, 
  UsersIcon,
  ChartBarIcon,
  EyeIcon,
  PlusIcon
} from '@heroicons/react/24/outline'

export default function Dashboard() {
  const [stats, setStats] = useState({ projects: 0, events: 0 })
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_API_URL
    Promise.all([
      axios.get(url + '/projects'),
      axios.get(url + '/events')
    ])
      .then(([p, e]) => {
        setStats({ 
          projects: p.data.length, 
          events: e.data.length 
        })
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  const handleLogout = () => {
    // Clear any authentication tokens or user data here
    localStorage.removeItem('authToken') // Example: remove token from localStorage
    // Redirect to login page
    router.push('/admin/login')
  }

  return (
    <Protected>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Admin Dashboard
            </h1>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl">
              Welcome back! Here's an overview of your NGO's activities.
            </p>
          </div>

          {/* Logout Button - Separated from header and placed below */}
          <div className="flex justify-end mb-8">
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors shadow-md"
            >
              <span className="mr-2">←</span> Logout
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {/* Projects Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                  <DocumentTextIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Projects</p>
                  {loading ? (
                    <div className="h-8 w-16 bg-gray-200 animate-pulse rounded mt-1"></div>
                  ) : (
                    <p className="text-2xl font-bold text-gray-900">{stats.projects}</p>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <Link href="/admin/projects">
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                    <EyeIcon className="h-4 w-4 mr-2" />
                    View Projects
                  </button>
                </Link>
              </div>
            </div>

            {/* Events Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  <CalendarIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Events</p>
                  {loading ? (
                    <div className="h-8 w-16 bg-gray-200 animate-pulse rounded mt-1"></div>
                  ) : (
                    <p className="text-2xl font-bold text-gray-900">{stats.events}</p>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <Link href="/admin/events">
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                    <EyeIcon className="h-4 w-4 mr-2" />
                    View Events
                  </button>
                </Link>
              </div>
            </div>

            {/* Additional Stat Card 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-amber-100 p-3 rounded-lg">
                  <UsersIcon className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Community Reach</p>
                  {loading ? (
                    <div className="h-8 w-16 bg-gray-200 animate-pulse rounded mt-1"></div>
                  ) : (
                    <p className="text-2xl font-bold text-gray-900">1.2K+</p>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                  View Analytics
                </button>
              </div>
            </div>

            {/* Additional Stat Card 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                  <ChartBarIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Performance</p>
                  {loading ? (
                    <div className="h-8 w-16 bg-gray-200 animate-pulse rounded mt-1"></div>
                  ) : (
                    <p className="text-2xl font-bold text-gray-900">98%</p>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors">
                  View Reports
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link href="/admin/projects">
                <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors group">
                  <div className="bg-green-100 p-2 rounded-lg mb-3 group-hover:bg-green-200 transition-colors">
                    <DocumentTextIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Manage Projects</span>
                </button>
              </Link>
              
              <Link href="/admin/events">
                <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                  <div className="bg-blue-100 p-2 rounded-lg mb-3 group-hover:bg-blue-200 transition-colors">
                    <CalendarIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Manage Events</span>
                </button>
              </Link>
              
              <Link href="/admin/projects?action=create">
                <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-amber-300 hover:bg-amber-50 transition-colors group">
                  <div className="bg-amber-100 p-2 rounded-lg mb-3 group-hover:bg-amber-200 transition-colors">
                    <PlusIcon className="h-6 w-6 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Add Project</span>
                </button>
              </Link>
              
              <Link href="/admin/events?action=create">
                <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors group">
                  <div className="bg-purple-100 p-2 rounded-lg mb-3 group-hover:bg-purple-200 transition-colors">
                    <PlusIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Add Event</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Protected>
  )
}