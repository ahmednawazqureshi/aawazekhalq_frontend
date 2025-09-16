import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + '/events')
      .then((r) => {
        setEvents(r.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-[#f0fdf4] via-white to-[#e6f4ea] min-h-screen py-16 px-6 md:px-12">

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-green-700 mb-2 tracking-tight">Events & Outreach</h1>
          <div className="h-1 w-20 bg-green-600 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover how Awaz-e-Khalaq is creating real change — one event at a time.
          </p>
        </section>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center mt-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600 border-opacity-50" />
          </div>
        ) : (
          <section className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl w-full">
              {events.map((e) => (
                <div
                  key={e._id}
                  className="relative bg-green-50 border-l-4 border-green-600 rounded-3xl shadow-xl p-8 hover:scale-[1.02] hover:shadow-2xl transition duration-300"
                >
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {new Date(e.date).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-green-700 mb-2">{e.title}</h2>
                  <div className="h-1 w-12 bg-green-600 mb-4 rounded-full" />

                  {/* Date & Location */}
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <CalendarIcon className="h-5 w-5 mr-2 text-green-500" />
                    {new Date(e.date).toLocaleDateString(undefined, {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <MapPinIcon className="h-5 w-5 mr-2 text-green-500" />
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {e.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-sm">{e.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    
    </>
  )
}
