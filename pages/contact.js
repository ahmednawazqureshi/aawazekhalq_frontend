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

        {/* Founder Spotlight */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="bg-white border border-green-100 rounded-3xl shadow-[0_10px_40px_rgba(0,128,0,0.1)] p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-green-200 transition duration-300">
            
            {/* Founder Image */}
            <div className="w-32 h-40 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/sardar.jpeg" 
                alt="Sardar Mushtaq Hussain"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Founder Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-green-700 mb-1">Founder</h2>
              <p className="text-xl font-semibold text-gray-800">Sardar Mushtaq Hussain</p>
              <p className="text-sm text-gray-600 mt-2">
                Village Machipura, Jabri Kalish<br />
                Tehsil Balakot, District Mansehra, KPK
              </p>
              <p className="mt-4 text-gray-700 italic">
                "Empowering communities through education, health, and dignity."
              </p>
            </div>
          </div>
        </section>

        {/* Project Manager Spotlight */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="bg-white border border-green-100 rounded-3xl shadow-[0_10px_40px_rgba(0,128,0,0.1)] p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-green-200 transition duration-300">
            
            {/* Avatar Placeholder for Project Manager */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-green-600 to-green-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              MT
            </div>

            {/* Project Manager Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-green-700 mb-1">Project Manager</h2>
              <p className="text-xl font-semibold text-gray-800">Maria Tariq</p>
              <p className="text-sm text-gray-600 mt-2">
                Email: mariakhan352023@gmail.com
              </p>
              <p className="mt-4 text-gray-700 italic">
                "Managing projects with dedication and excellence."
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {/* Email Card */}
          <div className="bg-black/80 backdrop-blur-md text-white rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition duration-300">
            <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
            <p className="text-sm text-gray-300">aawazekhalq@gmail.com</p>
            
          </div>

          {/* Phone Card */}
          <div className="bg-black/80 backdrop-blur-md text-white rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition duration-300">
            <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
            <p className="text-sm text-gray-300">+92 344 9513020</p>
            
          </div>

          {/* Address Card */}
          <div className="bg-black/80 backdrop-blur-md text-white rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition duration-300">
            <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
            <p className="text-sm text-gray-300">Village Machipura</p>
            <p className="text-sm text-gray-300">Jabri Kalish, Tehsil Balakot</p>
            <p className="text-sm text-gray-300">District Mansehra, KPK</p>
          </div>
        </section>

      </main>

    </>
  )
}