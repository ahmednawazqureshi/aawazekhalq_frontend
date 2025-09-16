import Protected from '../../components/Protected'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { 
  CalendarIcon, 
  MapPinIcon, 
  PencilIcon, 
  TrashIcon, 
  PlusIcon,
  ArrowPathIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function AdminEvents() {
  const [list, setList] = useState([])
  const [form, setForm] = useState({
    title: '', 
    description: '', 
    date: '', 
    location: '',
    time: ''
  })
  const [editingId, setEditingId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const authHeader = () => ({ 
    headers: { Authorization: 'Bearer ' + localStorage.getItem('aawaz_token') } 
  })

  const load = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/events')
      setList(response.data)
    } catch (error) {
      console.error('Error loading events:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const submit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Format date and time
      const dateTime = form.time ? 
        `${form.date}T${form.time}:00` : 
        `${form.date}T00:00:00`
      
      const payload = {
        ...form,
        date: new Date(dateTime).toISOString()
      }
      
      if (editingId) {
        await axios.put(
          process.env.NEXT_PUBLIC_API_URL + '/events/' + editingId, 
          payload, 
          authHeader()
        )
        setEditingId(null)
      } else {
        await axios.post(
          process.env.NEXT_PUBLIC_API_URL + '/events', 
          payload, 
          authHeader()
        )
      }
      
      setForm({ title: '', description: '', date: '', location: '', time: '' })
      await load()
    } catch (error) {
      console.error('Error saving event:', error)
      alert('Error saving event. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const edit = (ev) => {
    setEditingId(ev._id)
    const eventDate = ev.date ? new Date(ev.date) : new Date()
    setForm({ 
      title: ev.title, 
      description: ev.description || '', 
      date: eventDate.toISOString().substring(0, 10), 
      location: ev.location || '',
      time: eventDate.toTimeString().substring(0, 5)
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setForm({ title: '', description: '', date: '', location: '', time: '' })
  }

  const del = async (id) => {
    if (confirm('Are you sure you want to delete this event? This action cannot be undone.')) {
      try {
        await axios.delete(
          process.env.NEXT_PUBLIC_API_URL + '/events/' + id, 
          authHeader()
        )
        await load()
      } catch (error) {
        console.error('Error deleting event:', error)
        alert('Error deleting event. Please try again.')
      }
    }
  }

  const formatEventDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const formatEventTime = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const isPastEvent = (dateString) => {
    return new Date(dateString) < new Date()
  }

  return (
    <Protected>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {editingId ? 'Edit Event' : 'Create New Event'}
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              {editingId ? 'Update your event details' : 'Add a new event to your NGO calendar'}
            </p>
          </div>

          {/* Event Form */}
          <form
            onSubmit={submit}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <span>Event Title</span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Enter event title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-2 text-gray-400" />
                  Location
                </label>
                <input
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Event location"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2 text-gray-400" />
                  Date
                </label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2 text-gray-400" />
                  Time (Optional)
                </label>
                <input
                  type="time"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                rows="4"
                placeholder="Event description and details"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <ArrowPathIcon className="h-5 w-5 animate-spin mr-2" />
                ) : editingId ? (
                  <PencilIcon className="h-5 w-5 mr-2" />
                ) : (
                  <PlusIcon className="h-5 w-5 mr-2" />
                )}
                {isSubmitting ? 'Processing...' : editingId ? 'Update Event' : 'Create Event'}
              </button>
              
              {editingId && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          {/* Events List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">All Events</h2>
              <span className="text-sm text-gray-500">
                {list.length} event{list.length !== 1 ? 's' : ''}
              </span>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <ArrowPathIcon className="h-8 w-8 text-green-600 animate-spin" />
              </div>
            ) : list.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <CalendarIcon className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                <p>No events scheduled yet</p>
                <p className="text-sm mt-1">Create your first event to get started</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {list.map(ev => {
                  const isPast = isPastEvent(ev.date)
                  return (
                    <div
                      key={ev._id}
                      className={`border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow ${
                        isPast ? 'opacity-75' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-gray-900 text-lg">{ev.title}</h3>
                        {isPast && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            Past Event
                          </span>
                        )}
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          {formatEventDate(ev.date)}
                        </div>
                        {ev.date && (
                          <div className="flex items-center text-sm text-gray-600">
                            <ClockIcon className="h-4 w-4 mr-2" />
                            {formatEventTime(ev.date)}
                          </div>
                        )}
                        {ev.location && (
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPinIcon className="h-4 w-4 mr-2" />
                            {ev.location}
                          </div>
                        )}
                      </div>

                      {ev.description && (
                        <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                          {ev.description}
                        </p>
                      )}

                      <div className="flex gap-2">
                        <button
                          onClick={() => edit(ev)}
                          className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                        >
                          <PencilIcon className="h-4 w-4 mr-1" />
                          Edit
                        </button>
                        <button
                          onClick={() => del(ev._id)}
                          className="flex items-center px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
                        >
                          <TrashIcon className="h-4 w-4 mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Protected>
  )
}