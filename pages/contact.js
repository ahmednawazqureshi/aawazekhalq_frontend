import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-28 px-6 md:px-12 bg-gradient-to-br from-[#e6f4ea] via-white to-[#f0fdf4]">

        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-extrabold text-green-700 mb-2 tracking-tight">Let's Connect</h1>
          <div className="h-1 w-20 bg-green-600 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Reach out to <span className="font-semibold text-green-800">Awaz-e-Khalq</span> — we're here to serve, support, and uplift.
          </p>
        </section>

        {/* Global Offices Section */}
        <section className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Global Offices</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Pakistan Office */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-bold text-lg">PK</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800">Pakistan Office</h3>
                  <p className="text-green-600 font-medium">Registered under SOCITIES REGISTRATION ACT, 1860</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">📍 Main Office Address</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Office no. 2, Al Madina Market, Opposite BHU Jabri Kalish,<br />
                    Shohal Mazullah Tehsil Balakot, District Mansehra, KPK
                  </p>
                </div>
                
                               
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">📞 Contact Numbers</h4>
                  <div className="space-y-1">
                    <p className="text-gray-700 text-sm">+92 (0)344 9513020</p>
                   
                  </div>
                </div>
              </div>
            </div>

            {/* USA Office */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-bold text-lg">US</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-800">USA Office</h3>
                  <p className="text-blue-600 font-medium">Registered in Maryland as Awaz E Khalq Foundation Ltd (D26453126)</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">📍 Office Address</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Briggs Chaney Rd,<br />
                    Silver Spring, MD
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">📞 Contact Numbers</h4>
                  <div className="space-y-1">
                    <p className="text-gray-700 text-sm">+1 (301) 755-8323</p>
                   
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-700 mb-2">🏢 Business Hours</h4>
                  <p className="text-gray-700 text-sm">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Spotlight Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Founder Spotlight */}
            <div className="bg-white border border-green-100 rounded-2xl shadow-[0_10px_40px_rgba(0,128,0,0.1)] p-8 hover:shadow-green-200 transition duration-300 group">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Founder Image */}
                <div className="w-32 h-40 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition duration-300">
                  <img 
                    src="/images/sardar.jpeg" 
                    alt="Sardar Mushtaq Hussain"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Founder Info */}
                <div className="text-center md:text-left flex-1">
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-semibold text-green-600">Founder & Visionary</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">Sardar Mushtaq Hussain</h2>
                  <p className="text-sm text-gray-600 mt-2 mb-4">
                    Village Machipura, Jabri Kalish<br />
                    Tehsil Balakot, District Mansehra, KPK
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                    <p className="text-gray-700 italic text-sm">
                      "Empowering communities through education, health, and dignity."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Manager Spotlight */}
            <div className="bg-white border border-green-100 rounded-2xl shadow-[0_10px_40px_rgba(0,128,0,0.1)] p-8 hover:shadow-green-200 transition duration-300 group">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Project Manager Avatar */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-105 transition duration-300">
                  MT
                </div>

                {/* Project Manager Info */}
                <div className="text-center md:text-left flex-1">
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    <span className="text-sm font-semibold text-purple-600">Project Management</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">Maria Tariq</h2>
                  <p className="text-sm text-gray-600 mt-2 mb-4">
                    Email: mariakhan352023@gmail.com
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                    <p className="text-gray-700 italic text-sm">
                      "Managing projects with dedication and excellence."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="max-w-6xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Quick Contact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Email Card */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl p-6 shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                <p className="text-green-100 text-sm mb-2">Primary Email</p>
                <p className="text-white font-medium text-sm">info.aawazekhalq@gmail.com</p>
                <p className="text-green-100 text-sm mt-3 mb-1">Project Inquiries</p>
                <p className="text-white font-medium text-sm">mariakhan352023@gmail.com</p>
              </div>
            </div>

            {/* Pakistan Phone Card */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl p-6 shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pakistan</h3>
                <p className="text-amber-100 text-sm mb-2">Primary Number</p>
                <p className="text-white font-medium text-sm">+92 (0)344 9513020</p>
                
              </div>
            </div>

            {/* USA Phone Card */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-2xl p-6 shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                  <span className="text-2xl">🌎</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">USA</h3>
                <p className="text-blue-100 text-sm mb-2">Primary Number</p>
                <p className="text-white font-medium text-sm">+1 (301) 755-8323</p>
               
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl p-6 shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 group">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition duration-300">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Locations</h3>
                <p className="text-purple-100 text-sm mb-2">Pakistan Offices</p>
                <p className="text-white text-xs leading-tight">Main Office in Tehsil Balakot, District Mansehra, KP</p>
                <p className="text-purple-100 text-sm mt-3 mb-1">USA Office</p>
                <p className="text-white text-xs leading-tight">Silver Spring, Maryland</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">🚨 Emergency Contact</h2>
            <p className="text-lg mb-4">For urgent matters requiring immediate attention</p>
            <div className="bg-white/20 rounded-xl p-4 inline-block">
              <p className="text-xl font-bold">+92 (0)344 9513020</p>
              <p className="text-sm opacity-90">Available 24/7 for emergencies</p>
            </div>
          </div>
        </section>

      </main>
      
    </>
  )
}
