import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { 
  ClipboardDocumentIcon, 
  CheckIcon, 
  HeartIcon, 
  UsersIcon, 
  AcademicCapIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline'

export default function Donation() {
  const [copied, setCopied] = useState(null)
  const [activeCountry, setActiveCountry] = useState('Pakistan')

  const copyText = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const accounts = {
    Pakistan: {
      flag: '🇵🇰',
      bank: 'Muslim Commercial Bank',
      title: 'Aawaz-e-Khalq',
      account: '0000000000000',
      iban: 'PK00MCBK0000000000000000',
      branch: 'Islamabad'
    },
    USA: {
      flag: '🇺🇸',
      bank: 'Example USA Bank',
      title: 'Aawaz-e-Khalq (US)',
      routing: '012345678',
      account: '1234567890',
      swift: 'EXUSUS33'
    },
    JazzCash: {
      flag: '🇵🇰',
      bank: 'JazzCash / Mobilink Microfinance Bank',
      title: 'Mehfooz Ur Rehman',
      account: '+92(0)300 8366901'
    }
  }

  const impactStats = [
    { label: 'Families Fed', value: '1,200+', icon: HeartIcon },
    { label: 'Children Educated', value: '350+', icon: AcademicCapIcon },
    { label: 'Communities Reached', value: '45+', icon: UsersIcon }
  ]

  const recentDonors = [
    { name: 'Ali R.', amount: '₨5,000' },
    { name: 'Anonymous', amount: '$50' },
    { name: 'Sara K.', amount: '₨2,500' },
    { name: 'Fatima A.', amount: '₨10,000' },
    { name: 'John D.', amount: '$100' }
  ]

  const goal = 500000
  const raised = 250000
  const progress = (raised / goal) * 100

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">

        {/* Hero Section */}
        <section className="text-center py-8">
          <div className="inline-block bg-green-100 px-4 py-1 rounded-full mb-4">
            <span className="text-green-800 text-sm font-semibold">Making a Difference Together</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Your Gift <span className="text-green-600">Changes Lives</span></h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            100% of your donation goes directly to our programs. Every rupee and dollar counts towards creating lasting impact.
          </p>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {impactStats.map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4">
                    <IconComponent className="w-7 h-7 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 mt-1">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Donation Options */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Donation Methods</h2>
            <p className="text-gray-600 mt-2">Select your country to view banking details</p>
          </div>
          
          {/* Country Tabs */}
          <div className="flex justify-center gap-3 mb-10">
            {Object.keys(accounts).map(country => (
              <button
                key={country}
                onClick={() => setActiveCountry(country)}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  activeCountry === country 
                    ? 'bg-green-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-green-50'
                }`}
              >
                <span className="text-xl">{accounts[country].flag}</span>
                {country}
              </button>
            ))}
          </div>

          {/* Bank Details Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <div className="bg-green-600 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="bg-white p-2 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-700 font-bold text-lg">{accounts[activeCountry].flag}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Donate via {activeCountry}</h3>
                  <p className="text-green-100">Use the details below for bank transfer</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 grid md:grid-cols-2 gap-4">
              {Object.entries(accounts[activeCountry]).map(([key, value]) => {
                if (key === 'flag') return null
                return (
                  <div key={key} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500 uppercase">{key}</p>
                        <p className="font-medium text-gray-900 break-all">{value}</p>
                      </div>
                      <button
                        onClick={() => copyText(value, `${activeCountry}-${key}`)}
                        className="text-green-600 hover:text-green-700 p-2 rounded-full hover:bg-green-50 transition"
                        aria-label="Copy to clipboard"
                      >
                        {copied === `${activeCountry}-${key}` ? 
                          <CheckIcon className="w-5 h-5" /> : 
                          <ClipboardDocumentIcon className="w-5 h-5" />
                        }
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="border-t border-gray-200 p-6 flex flex-col items-center">
              <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center w-40 h-40">
                <div className="text-center">
                  <div className="text-4xl mb-2">{accounts[activeCountry].flag}</div>
                  <p className="text-sm text-gray-600">Bank Transfer</p>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4">Use the account details above for bank transfer</p>
            </div>
          </div>
        </section>

        {/* Transfer Guide */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Donate via Bank Transfer</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-700 font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Log in to your online banking or visit your bank branch.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-700 font-bold">2</span>
                  </div>
                  <p className="text-gray-700">Select "Transfer" or "Send Money".</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-700 font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Enter the account details provided above.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-700 font-bold">4</span>
                  </div>
                  <p className="text-gray-700">Confirm the transfer and save your receipt for records.</p>
                </li>
              </ol>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center">
              <div className="text-center">
                <GlobeAltIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Global Support</h4>
                <p className="text-gray-600">We accept donations from around the world. Select your country to see specific banking details.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Donors */}
        <section className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Supporters</h3>
          <div className="divide-y divide-gray-100">
            {recentDonors.map((donor, i) => (
              <div key={i} className="py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <HeartIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">{donor.name}</span>
                </div>
                <span className="font-bold text-green-600">{donor.amount}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 bg-green-50 text-green-700 font-semibold rounded-lg hover:bg-green-100 transition">
            View All Supporters
          </button>
        </section>

        {/* Trust Section - Modified to remove images */}
        <section className="text-center py-10 bg-gray-50 rounded-2xl">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted & Verified</h3>
          <p className="text-gray-600">Registered NGO #123456 | Certified by XYZ Authority</p>
        </section>
      </main>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-600 text-white py-4 text-center font-bold shadow-lg md:hidden z-10">
        <div className="container mx-auto px-4">
          Donate Now and Make a Difference
        </div>
      </div>

    </>
  )
}
