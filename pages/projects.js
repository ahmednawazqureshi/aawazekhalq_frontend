import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + '/projects')
      .then((r) => {
        setProjects(r.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Header />
      <main className="bg-[#f0fdf4] py-20 px-6 md:px-12 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-[Merriweather] font-bold text-center text-green-800">
            Our Projects
          </h1>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
            Explore the initiatives transforming lives across Pakistan — from clean water to education and healthcare.
          </p>

          {/* Loading Spinner */}
          {loading ? (
            <div className="flex justify-center items-center mt-12">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-green-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
              {projects.map((p) => (
                <Link key={p._id} href={`/projects/${p._id}`} className="block group">
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-green-100 flex flex-col">
                    <div className="relative w-full h-48">
                      <img
                        src={(p.images && p.images[0]) || '/images/project-placeholder.jpg'}
                        alt={p.title}
                        className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-green-700 mb-2">{p.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 flex-grow">{p.shortDescription}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                            p.status === 'Completed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {p.status}
                        </span>
                        <span className="text-sm text-green-600 font-medium group-hover:underline">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
     
    </>
  )
}
