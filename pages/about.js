import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-[#f0fdf4] via-white to-[#e6f4ea] text-gray-900 min-h-screen py-16 px-6 md:px-12">

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-extrabold text-green-700 mb-2 tracking-tight">About Awaz-e-Khalaq</h1>
          <div className="h-1 w-16 bg-green-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-700 font-medium leading-relaxed">
            Where Every Voice Matters — a grassroots movement transforming rural lives through education, health, infrastructure, and compassion.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          <div className="bg-green-50 rounded-3xl shadow-xl p-10 hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold text-green-700 mb-2">Our Mission</h2>
            <div className="h-1 w-12 bg-green-600 mb-6 rounded-full" />
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide sustainable solutions for community development by engaging local people in education, health, infrastructure, and welfare projects.
            </p>
          </div>
          <div className="bg-green-50 rounded-3xl shadow-xl p-10 hover:shadow-2xl transition">
            <h2 className="text-3xl font-bold text-green-700 mb-2">Our Vision</h2>
            <div className="h-1 w-12 bg-green-600 mb-6 rounded-full" />
            <p className="text-lg text-gray-700 leading-relaxed">
              A self-reliant, educated, and prosperous rural community where every voice is heard and respected.
            </p>
          </div>
        </section>

        {/* Origin Story */}
        <section className="max-w-5xl mx-auto bg-green-50 rounded-3xl shadow-xl p-10 mb-24 text-center hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-green-700 mb-2">How It Started</h2>
          <div className="h-1 w-12 bg-green-600 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-700 leading-relaxed">
            Inspired by humanitarian icons like Abdul Sattar Edhi and Bill Gates, our founder Sardar Mushtaq Hussain began with small acts of service — clearing stones from hilly roads in Machipura, Jabri Kalish. Today, Awaz-e-Khalaq leads projects in education, healthcare, and social welfare across Balakot.
          </p>
        </section>

        {/* Program Highlights */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {[
            { title: 'Road Improvement', desc: '20km of hilly roads cleared and repaired to ensure safe travel for villagers.' },
            { title: 'Educational Support', desc: 'Uniforms, books, and stationery provided to 50+ students from low-income families.' },
            { title: 'School Infrastructure', desc: 'Roofs built for 2 schools to create safe learning environments.' },
            { title: 'Healthcare Awareness', desc: 'Mobile health units and hygiene campaigns launched in rural areas.' },
            { title: 'Women Empowerment', desc: 'Vocational training and skill development programs for rural women.' },
            { title: 'Emergency Relief', desc: 'Rapid response during natural disasters and crises.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-black text-white rounded-2xl p-8 shadow-lg hover:scale-[1.02] transition">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <div className="h-1 w-10 bg-green-400 mb-4 rounded-full" />
              <p className="text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* Legal & Contact Info */}
<section className="max-w-4xl mx-auto bg-green-50 rounded-3xl shadow-xl p-10 mb-24 hover:shadow-2xl transition">
  <h2 className="text-2xl font-bold text-green-700 mb-2 text-center">Legal & Contact Information</h2>
  <div className="h-1 w-12 bg-green-600 mx-auto mb-8 rounded-full" />
  
  <div className="grid md:grid-cols-2 gap-8">
    {/* Pakistan Section */}
    <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
          <span className="text-white text-sm font-bold">PK</span>
        </div>
        <h3 className="text-xl font-semibold text-green-800">Pakistan Office</h3>
      </div>
      
      <div className="space-y-4 text-gray-700">
        <div>
          <p className="font-medium text-green-700 mb-1">Registration</p>
          <p className="text-sm">Registered under SOCIETIES REGISTRATION ACT, 1860</p>
        </div>
        
        <div>
          <p className="font-medium text-green-700 mb-1">Address</p>
          <p className="text-sm">Office no. 2, Al Madina Market, Opposite BHU Jabri Kalish, Shohal Mazullah Tehsil Balakot, District Mansehra, KPK</p>
        </div>
        
        <div>
          <p className="font-medium text-green-700 mb-1">Contact</p>
          <p className="text-sm">+92 (0)344 9513020</p>
        </div>
        
        <div>
          <p className="font-medium text-green-700 mb-1">Founder</p>
          <p className="text-sm">Sardar Mushtaq Hussain</p>
        </div>
      </div>
    </div>

    {/* USA Section */}
    <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
          <span className="text-white text-sm font-bold">US</span>
        </div>
        <h3 className="text-xl font-semibold text-green-800">USA Office</h3>
      </div>
      
      <div className="space-y-4 text-gray-700">
        <div>
          <p className="font-medium text-green-700 mb-1">Registration</p>
          <p className="text-sm">Registered in Maryland, USA as Awaz E Khalq Foundation Ltd (D26453126)</p>
        </div>
        
        <div>
          <p className="font-medium text-green-700 mb-1">Address</p>
          <p className="text-sm">Briggs Chaney Rd, Silver Spring, MD</p>
        </div>
        
        <div>
          <p className="font-medium text-green-700 mb-1">Contact</p>
          <p className="text-sm">+1 (301) 755-8323</p>
        </div>
        
        <div>
          <p className="font-medium text-green-700 mb-1">Status</p>
          <p className="text-sm">International Branch</p>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-8 pt-6 border-t border-green-200 text-center">
    <p className="text-gray-600 text-sm">
      Aawaz e Khalq Foundation is a registered non-profit organization operating internationally to serve communities in need.
    </p>
  </div>
</section>

        {/* CTA */}
        <section className="text-center mb-12">
          <p className="text-lg text-gray-700 mb-4">
            Want to support our mission or collaborate?
          </p>
          <a href="/donation">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-md transition">
              Donate Now
            </button>
          </a>
        </section>

      </main>
      
    </>
  )
}
