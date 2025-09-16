import Protected from '../../components/Protected'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { 
  PencilIcon, 
  TrashIcon, 
  PlusIcon, 
  EyeIcon,
  PhotoIcon,
  ArrowPathIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

export default function AdminProjects() {
  const [list, setList] = useState([])
  const [form, setForm] = useState({
    title: '',
    shortDescription: '',
    description: '',
    images: [],
    status: 'In Progress',
    startDate: '',
    totalBudget: '',
    location: '',
    volunteers: ''
  })
  const [editingId, setEditingId] = useState(null)
  const [statusFilter, setStatusFilter] = useState('All')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploading, setUploading] = useState(false)

  const authHeader = () => ({
    headers: { 
      Authorization: 'Bearer ' + localStorage.getItem('aawaz_token'),
      'Content-Type': 'multipart/form-data'
    }
  })

  const load = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/projects')
      setList(response.data)
    } catch (error) {
      console.error('Error loading projects:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return

    setUploading(true)
    try {
      const uploadPromises = files.map(async (file) => {
        const formData = new FormData()
        formData.append('images', file)

        const response = await axios.post(
          process.env.NEXT_PUBLIC_API_URL + '/projects/upload',
          formData,
          authHeader()
        )
        return response.data.urls ? response.data.urls[0] : response.data.url
      })

      const uploadedUrls = await Promise.all(uploadPromises)
      setForm(prev => ({
        ...prev,
        images: [...prev.images, ...uploadedUrls]
      }))
    } catch (error) {
      console.error('Error uploading images:', error)
      alert('Error uploading images. Please try again.')
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  const removeImage = (index) => {
    setForm(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const formData = new FormData()
      formData.append('title', form.title)
      formData.append('shortDescription', form.shortDescription)
      formData.append('description', form.description)
      formData.append('status', form.status)
      formData.append('startDate', form.startDate)
      formData.append('totalBudget', form.totalBudget)
      formData.append('location', form.location)
      formData.append('volunteers', form.volunteers)
      
      form.images.forEach(url => {
        formData.append('images', url)
      })

      if (editingId) {
        await axios.put(
          process.env.NEXT_PUBLIC_API_URL + '/projects/' + editingId,
          formData,
          authHeader()
        )
        setEditingId(null)
      } else {
        await axios.post(
          process.env.NEXT_PUBLIC_API_URL + '/projects',
          formData,
          authHeader()
        )
      }
      
      setForm({
        title: '',
        shortDescription: '',
        description: '',
        images: [],
        status: 'In Progress',
        startDate: '',
        totalBudget: '',
        location: '',
        volunteers: ''
      })
      await load()
    } catch (error) {
      console.error('Error saving project:', error)
      alert('Error saving project. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const edit = (p) => {
    setEditingId(p._id)
    setForm({
      title: p.title,
      shortDescription: p.shortDescription || '',
      description: p.description || '',
      images: p.images || [],
      status: p.status || 'In Progress',
      startDate: p.startDate || '',
      totalBudget: p.totalBudget || '',
      location: p.location || '',
      volunteers: p.volunteers || ''
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setForm({
      title: '',
      shortDescription: '',
      description: '',
      images: [],
      status: 'In Progress',
      startDate: '',
      totalBudget: '',
      location: '',
      volunteers: ''
    })
  }

  const del = async (id) => {
    if (confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      try {
        await axios.delete(
          process.env.NEXT_PUBLIC_API_URL + '/projects/' + id,
          { headers: { Authorization: 'Bearer ' + localStorage.getItem('aawaz_token') } }
        )
        await load()
      } catch (error) {
        console.error('Error deleting project:', error)
        alert('Error deleting project. Please try again.')
      }
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800'
      case 'In Progress': return 'bg-blue-100 text-blue-800'
      case 'Planned': return 'bg-amber-100 text-amber-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filtered = statusFilter === 'All'
    ? list
    : list.filter((p) => p.status === statusFilter)

  return (
    <Protected>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {editingId ? 'Edit Project' : 'Add New Project'}
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              {editingId ? 'Update your project details' : 'Create a new project for your NGO'}
            </p>
          </div>

          {/* Project Form */}
          <form
            onSubmit={submit}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-12"
            encType="multipart/form-data"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <span>Project Title</span>
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Enter project title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Planned">Planned</option>
                </select>
              </div>
            </div>

            {/* New Fields: Start Date, Budget, Location, Volunteers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  value={form.startDate}
                  onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Total Budget (PKR)</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Enter total budget"
                  value={form.totalBudget}
                  onChange={(e) => setForm({ ...form, totalBudget: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Enter project location"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-2">Volunteers</label>
                <input
                  type="number"
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Number of volunteers"
                  value={form.volunteers}
                  onChange={(e) => setForm({ ...form, volunteers: e.target.value })}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2">Short Description</label>
              <input
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                placeholder="Brief summary (max 150 characters)"
                maxLength={150}
                value={form.shortDescription}
                onChange={(e) => setForm({ ...form, shortDescription: e.target.value })}
              />
              <div className="text-xs text-gray-500 mt-1 text-right">
                {form.shortDescription.length}/150 characters
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                rows="5"
                placeholder="Detailed project description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                <PhotoIcon className="h-5 w-5 mr-2 text-gray-400" />
                Upload Images
              </label>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                  disabled={uploading}
                />
                <label
                  htmlFor="image-upload"
                  className={`cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center ${
                    uploading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <PlusIcon className="h-5 w-5 mr-2" />
                  {uploading ? 'Uploading...' : 'Select Images'}
                </label>
                <p className="text-sm text-gray-500 mt-2">
                  Upload up to 5 images (JPEG, PNG, GIF, WEBP) - Max 5MB each
                </p>
                {uploading && (
                  <div className="mt-4 flex items-center justify-center text-green-600">
                    <ArrowPathIcon className="h-5 w-5 animate-spin mr-2" />
                    Uploading...
                  </div>
                )}
              </div>

              {/* Image Preview */}
              {form.images.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Images:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {form.images.map((url, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.src = '/images/image-placeholder.jpg'
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 transition-colors"
                        >
                          <XMarkIcon className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting || uploading}
                className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <ArrowPathIcon className="h-5 w-5 animate-spin mr-2" />
                ) : editingId ? (
                  <PencilIcon className="h-5 w-5 mr-2" />
                ) : (
                  <PlusIcon className="h-5 w-5 mr-2" />
                )}
                {isSubmitting ? 'Processing...' : editingId ? 'Update Project' : 'Create Project'}
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

          {/* Projects List */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold text-gray-900">All Projects</h2>
              
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-gray-700">Filter by status:</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                >
                  <option value="All">All Projects</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Planned">Planned</option>
                </select>
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <ArrowPathIcon className="h-8 w-8 text-green-600 animate-spin" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <PhotoIcon className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                <p>No projects found{statusFilter !== 'All' ? ` with status "${statusFilter}"` : ''}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p) => (
                  <div
                    key={p._id}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="h-48 bg-gray-100 overflow-hidden relative">
                      {p.images && p.images.length > 0 ? (
                        <img
                          src={p.images[0]}
                          className="w-full h-full object-cover"
                          alt={p.title}
                          onError={(e) => {
                            e.target.src = '/images/project-placeholder.jpg'
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                          <PhotoIcon className="h-12 w-12 text-gray-300" />
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 line-clamp-1">{p.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(p.status)}`}>
                          {p.status}
                        </span>
                      </div>
                      
                      {/* Display new fields in project cards */}
                      <div className="text-xs text-gray-500 mb-2">
                        {p.location && <div className="mb-1">📍 {p.location}</div>}
                        {p.startDate && <div className="mb-1">📅 {new Date(p.startDate).toLocaleDateString()}</div>}
                        {p.volunteers && <div className="mb-1">👥 {p.volunteers} volunteers</div>}
                        {p.totalBudget && <div className="mb-1">💰 PKR {parseInt(p.totalBudget).toLocaleString()}</div>}
                      </div>
                      
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                        {p.shortDescription || 'No description available'}
                      </p>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => edit(p)}
                          className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
                        >
                          <PencilIcon className="h-4 w-4 mr-1" />
                          Edit
                        </button>
                        <button
                          onClick={() => del(p._id)}
                          className="flex items-center px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
                        >
                          <TrashIcon className="h-4 w-4 mr-1" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Protected>
  )
}