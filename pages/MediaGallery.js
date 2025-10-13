import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MediaGallery() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 px-6 md:px-12 bg-gradient-to-br from-[#e6f4ea] via-white to-[#f0fdf4]">
        
        {/* Animated Hero Section */}
        <section className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
              <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
          </div>
          
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 mb-4 tracking-tight">
            Visual Stories
          </h1>
          <div className="h-1.5 w-24 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6 rounded-full shadow-lg" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the journey of <span className="font-bold text-green-700">Aawaz e Khalq Foundation</span> through our visual narratives
          </p>
        </section>

        {/* Floating YouTube Cards */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Channel Visit Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-red-100 transform group-hover:scale-[1.02] transition-all duration-500">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition duration-500">
                    <svg className="w-10 h-10 text-white group-hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816z"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Our Channel</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Dive into our collection of inspiring videos showcasing community transformation, educational initiatives, and humanitarian work.
                  </p>
                  <a 
                    href="https://www.youtube.com/@AwazEKhalq-v9p" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816z"/>
                    </svg>
                    Visit YouTube Channel
                  </a>
                </div>
              </div>
            </div>

            {/* Subscribe Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-green-100 transform group-hover:scale-[1.02] transition-all duration-500">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition duration-500">
                    <svg className="w-10 h-10 text-white group-hover:scale-110 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Community</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Be the first to watch our latest videos and stay updated with our ongoing projects and community initiatives.
                  </p>
                  <a 
                    href="https://www.youtube.com/@AwazEKhalq-v9p?sub_confirmation=1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                    </svg>
                    Subscribe Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Feature Showcase */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-2xl p-12 border border-green-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 mb-4">
                What You'll Discover
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our channel brings you closer to the heart of our mission through engaging visual content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Witness real stories of transformation and positive change in communities we serve
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Educational Content</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn about our educational programs and their impact on children's futures
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Volunteer Stories</h3>
                <p className="text-gray-600 leading-relaxed">
                  Meet the incredible people behind our initiatives and their inspiring journeys
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="max-w-3xl mx-auto text-center mb-20">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-6">Ready to Be Inspired?</h2>
              <p className="text-lg text-green-100 mb-8 leading-relaxed">
                Join thousands of viewers who are already following our journey of making a difference
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.youtube.com/@AwazEKhalq-v9p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816z"/>
                  </svg>
                  Start Watching
                </a>
                <a 
                  href="https://www.youtube.com/@AwazEKhalq-v9p?sub_confirmation=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  Subscribe & Follow
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      
    </>
  )
}