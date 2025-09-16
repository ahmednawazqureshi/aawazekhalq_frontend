import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'

const Slider = dynamic(() => import('react-slick'), { ssr: false })

export default function ProjectDetails({ project }) {
  const router = useRouter()
  const [imageLoading, setImageLoading] = useState(true)
  if (router.isFallback) return <div>Loading...</div>

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  // Format budget with commas
  const formatBudget = (budget) => {
    if (!budget) return 'PKR ---'
    return `PKR ${parseInt(budget).toLocaleString()}`
  }

  return (
    <>
      <Header />

      <main className="bg-gradient-to-br from-[#f7fdf8] via-white to-[#ecf8ef] text-gray-800 min-h-screen py-8 md:py-12 px-4 md:px-8">

        {/* Breadcrumb Navigation */}
        <div className="max-w-6xl mx-auto mb-8">
          <nav className="flex text-sm text-green-700 mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500 truncate">{project.title || 'Project Details'}</span>
          </nav>
        </div>

        {/* Project Header */}
        <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-8 text-center mb-10 border border-green-100">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 font-playfair">{project.title || 'Community Uplift Initiative'}</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed font-poppins">
            {project.shortDescription || 'Empowering underserved families through food, education, and shelter.'}
          </p>
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
            project.status === 'Completed' 
              ? 'bg-green-100 text-green-800' 
              : project.status === 'In Progress'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-amber-100 text-amber-800'
          }`}>
            {project.status || 'Active'}
          </span>
        </section>

        {/* Image Carousel - Optimized for mixed aspect ratios */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg border border-green-100 bg-gray-100">
            <Slider {...sliderSettings}>
              {(project.images && project.images.length > 0 ? project.images : ['/images/project-placeholder.jpg']).map((img, i) => (
                <div key={i} className="relative group">
                  <div className="flex items-center justify-center min-h-[300px] md:min-h-[450px] max-h-[500px] w-full">
                    <div className="relative w-full h-full max-w-full max-h-full flex items-center justify-center">
                      <Image
                        src={img}
                        alt={`Project image ${i + 1}`}
                        width={800}
                        height={600}
                        className="object-scale-down max-h-[450px] w-auto mx-auto"
                        priority={i === 0}
                        onLoadingComplete={() => setImageLoading(false)}
                      />
                      {imageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                          <div className="animate-pulse bg-gray-300 h-full w-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* White Cards with Green Accents */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-5 md:p-6 text-center border border-green-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2 font-poppins">Start Date</h3>
            <p className="text-xl font-bold text-gray-800 font-poppins">{formatDate(project.startDate)}</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-5 md:p-6 text-center border border-green-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2 font-poppins">Volunteers</h3>
            <p className="text-xl font-bold text-gray-800 font-poppins">{project.volunteers || '0'}+</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-5 md:p-6 text-center border border-green-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2 font-poppins">Total Budget</h3>
            <p className="text-xl font-bold text-gray-800 font-poppins">{formatBudget(project.totalBudget)}</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-5 md:p-6 text-center border border-green-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2 font-poppins">Location</h3>
            <p className="text-xl font-bold text-gray-800 font-poppins">{project.location || 'Location not specified'}</p>
          </div>
        </section>

        {/* Full Description - Enhanced Typography */}
        <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-12 border border-green-100">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center font-playfair">About This Project</h2>
          <div className="text-gray-700">
            <p className="text-justify leading-relaxed md:leading-loose text-lg md:text-xl font-poppins font-light tracking-wide">
              {project.description || `This initiative focuses on uplifting vulnerable communities by providing essential resources such as food, clean water, and education. Our team of volunteers works tirelessly to ensure every family receives the support they need to thrive. With your help, we aim to expand our reach and deepen our impact across the region.`}
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-2xl mx-auto bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-10 text-center mb-12 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-playfair">Make a Difference Today</h2>
          <p className="text-green-100 mb-6 text-lg font-poppins">
            Your support can help us continue this important work and expand our impact.
          </p>
          <Link href="/donation">
            <button className="bg-white text-green-700 font-bold text-lg px-8 py-4 rounded-full shadow-md hover:bg-green-50 transition-colors duration-300 font-poppins">
              Donate Now
            </button>
          </Link>
        </section>

        {/* Back Navigation */}
        <div className="text-center py-6">
          <Link href="/projects" className="inline-flex items-center text-green-700 hover:text-green-800 font-medium transition-colors font-poppins">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Projects
          </Link>
        </div>

      </main>

     

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }

        /* Custom slider styles */
        .slick-prev, .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9) !important;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        .slick-prev:hover, .slick-next:hover {
          background: white !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .slick-prev { left: 15px; }
        .slick-next { right: 15px; }

        .slick-prev:before, .slick-next:before {
          color: #16a34a;
          font-size: 20px;
        }

        .slick-dots {
          bottom: 15px;
        }

        .slick-dots li button:before {
          color: #16a34a;
          font-size: 10px;
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${params.id}`)
    
    if (!res.ok) {
      return { notFound: true }
    }
    
    const project = await res.json()

    if (!project || !project._id) {
      return { notFound: true }
    }

    return {
      props: { project },
    }
  } catch (error) {
    console.error('Error fetching project:', error)
    return { notFound: true }
  }
}