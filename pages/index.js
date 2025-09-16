import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from 'react'

export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const url = (process.env.NEXT_PUBLIC_API_URL || '') + '/projects'
    axios.get(url)
      .then(r => setProjects(r.data))
      .catch(err => console.error('Failed to fetch projects:', err))
  }, [])

  return (
    <>
    
      <Head>
        <title>Awaz-e-Khalq | Empowering Communities</title>
        <meta name="description" content="Awaz-e-Khalq is a community-based NGO focused on rural development in Khyber Pakhtunkhwa." />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
<main className="pt-[68px]"> {/* Adjust if header height changes */}
  <main className="font-[Poppins] bg-gradient-to-b from-white via-green-50 to-white text-gray-800">
  {/* Hero Section - Enhanced Responsiveness */}
  <section className="relative w-full text-white px-4 sm:px-6 py-12 md:px-16 lg:px-24 flex items-center justify-center min-h-screen">
    {/* Background with improved mobile handling */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="w-full h-full relative">
        <Image
          src="/images/hero-village.jpg"
          alt="Rural community"
          fill
          sizes="100vw"
          className="object-cover md:object-center object-[center_30%] md:object-[center_center]"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>
    </div>

    {/* Centered Content */}
    <div className="relative z-10 w-full max-w-5xl px-2 sm:px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      
      {/* Left: Heading & CTA */}
      <div className="space-y-6 md:space-y-8 text-center lg:text-left animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          <span className="text-green-500">Empowering</span> Communities,
          <span className="block mt-2"><span className="text-green-500">Transforming</span> Lives</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-md mx-auto lg:mx-0">
          Driving sustainable change through education, clean water, and healthcare in rural Pakistan.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3 sm:gap-4">
          <Link href="/about" className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-green-700 rounded-full font-semibold hover:bg-green-100 transition text-sm sm:text-base">
            Learn More
          </Link>
          <Link href="/donation" className="px-5 py-2.5 sm:px-6 sm:py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base">
            Donate Now
          </Link>
        </div>
      </div>

      {/* Right: Impact Cards - Improved mobile layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-fade-in-delay-2">
        {[
          { icon: "📚", title: "Education", desc: "50+ students supported with supplies & scholarships." },
          { icon: "🚰", title: "Clean Water", desc: "Planned to install 30+ solar-powered water projects." },
          { icon: "🏥", title: "Healthcare", desc: "05+ medical camps offering free treatment." },
          { icon: "🌱", title: "Sustainability", desc: "Community-led farming and eco-initiatives." },
        ].map((card, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-5 shadow-md hover:scale-[1.03] transition w-full max-w-xs mx-auto">
            <h3 className="text-base md:text-lg font-semibold text-green-400 mb-1">{card.icon} {card.title}</h3>
            <p className="text-xs md:text-sm text-white/80">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
</main>

{/* About Section */}
<section className="w-full bg-gradient-to-br from-green-50 to-white py-20 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold font-[Merriweather] text-gray-900 relative inline-block">
        About Awaz-e-Khalq
        <span className="block h-1 w-24 bg-green-500 mx-auto mt-2 rounded-full"></span>
      </h2>
      <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
        Empowering rural communities through education, healthcare, infrastructure, and compassion-driven leadership.
      </p>
    </div>

    {/* Vision & Mission Cards */}
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div className="bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-4">🌱 Our Vision</h3>
        <p className="text-gray-800 leading-relaxed">
          A self-reliant, educated, and prosperous rural society where every voice is heard and respected.
        </p>
      </div>
      <div className="bg-gradient-to-br from-white to-green-50 border border-green-200 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-4">🎯 Our Mission</h3>
        <p className="text-gray-800 leading-relaxed">
          Delivering sustainable solutions through education, health, and community welfare programs.
        </p>
      </div>
    </div>

    {/* Inspiration Section */}
    <div className="bg-gradient-to-br from-white to-green-50 border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
      <h3 className="text-2xl font-extrabold text-green-700 mb-6">
        🌟 Our Inspiration
      </h3>

      {/* Image Holder */}
      <div className="w-64 h-80 mx-auto mb-6 overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
        <img
          src="/images/edhi.jpg"
          alt="Abdul Sattar Edhi"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Quote */}
      <blockquote className="italic text-lg text-gray-700 mb-4">
        “No religion is higher than humanity.”
        <footer className="mt-1 text-sm text-gray-500">— Abdul Sattar Edhi</footer>
      </blockquote>

      {/* Description */}
      <p className="text-base text-gray-800 leading-relaxed max-w-3xl mx-auto">
        We are deeply inspired by the life and legacy of <strong className="text-green-700">Abdul Sattar Edhi</strong> — a humanitarian, philanthropist, and founder of the Edhi Foundation. Known as the “Angel of Mercy,” Edhi dedicated his life to serving humanity without discrimination. His humble lifestyle, unwavering compassion, and commitment to justice continue to guide our values and mission.
      </p>
    </div>
  </div>
</section>



     {/* Programs Section */}
<section className="bg-gradient-to-r from-green-100 to-white py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-center mb-12">
      <h2 className="text-3xl font-[Merriweather] font-bold text-gray-900 px-6 py-2 border-4 border-green-500 rounded-full">
        SCOPE OF WORK
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: 'Road Improvement',
          desc: 'Clearing 20km of hilly roads from Shohal Mazullah to Sarian Danna for safer travel.'
        },
        {
          title: 'Student Support',
          desc: 'Providing uniforms, books, and stationery to 50+ students from low-income families.'
        },
        {
          title: 'School Roofs',
          desc: 'Constructing safe, weather-resistant roofs for two village schools.'
        },
        {
          title: 'Clean Water Access',
          desc: 'Installing hand pumps and filtration systems in underserved areas.'
        },
        {
          title: 'Medical Camps',
          desc: 'Organizing free health checkups and medicine distribution in remote villages.'
        },
        {
          title: 'Women Empowerment',
          desc: 'Vocational training programs for women to promote self-sufficiency.'
        },
        {
          title: 'Disaster Relief',
          desc: 'Providing emergency aid and shelter during floods and landslides.'
        },
        {
          title: 'Community Awareness',
          desc: 'Workshops on hygiene, education, and civic responsibility.'
        },
        {
          title: 'Youth Engagement',
          desc: 'Sports and leadership activities to foster positive growth.'
        },
      ].map((program, idx) => (
        <div
          key={idx}
          className="bg-black rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
        >
          <h3 className="text-white text-xl font-bold mb-3">{program.title}</h3>
          <p className="text-white text-sm">{program.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* Projects Section */}
<section className="relative py-24 px-6 md:px-12 bg-[#f0fdf4] overflow-hidden">
  {/* Optional Background Texture */}
  <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/bg-texture.png')] bg-cover bg-center pointer-events-none"></div>

  <div className="relative z-10 max-w-6xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-[Merriweather] font-bold text-green-800 leading-tight tracking-tight drop-shadow-sm">
        Featured Projects
      </h2>
      <div className="w-16 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        Real impact, real stories — explore how our initiatives are transforming lives across Pakistan.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {projects.length === 0 ? (
        <p className="text-gray-500 text-center col-span-full">Loading projects...</p>
      ) : (
        projects.slice(0, 3).map(p => (
          <div
            key={p._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col group border border-green-100"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={(p.images && p.images[0]) || '/images/project-placeholder.jpg'}
                alt={p.title}
                fill
                sizes="100vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-green-700 mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {p.shortDescription}
              </p>

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
                <Link
                  href={`/projects/${p._id}`}
                  className="text-sm text-green-600 font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</section>




      {/* Testimonials Section */}
<section className="w-full bg-gradient-to-br from-green-50 to-white py-20 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold font-[Merriweather] text-gray-900 relative inline-block">
        Voices from the Community
        <span className="block h-1 w-24 bg-green-500 mx-auto mt-2 rounded-full"></span>
      </h2>
      <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
        Real stories from the people whose lives have been touched by our work.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Testimonial Card */}
      <div className="bg-white border border-green-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <p className="text-gray-800 italic mb-4">
          “Awaz-e-Khalq changed our village's future. Our children now go to school safely.”
        </p>
        <div className="text-green-700 font-semibold">— Resident, Sarian Danna</div>
      </div>

      {/* Testimonial Card */}
      <div className="bg-white border border-green-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <p className="text-gray-800 italic mb-4">
          “The road project helped us connect with nearby towns for trade.”
        </p>
        <div className="text-green-700 font-semibold">— Local Farmer</div>
      </div>
    </div>
  </div>
</section>

      </main>
     
    </>
  )
}
