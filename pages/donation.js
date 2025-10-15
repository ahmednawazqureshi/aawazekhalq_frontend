import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Donation() {
  const [copied, setCopied] = useState(null)
  const [activeCountry, setActiveCountry] = useState('USA')

  const copyText = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const accounts = {
    Pakistan: {
      flag: '🇵🇰',
      status: 'coming-soon',
      bank: 'Bank Details Coming Soon',
      title: 'Aawaz-e-Khalq Foundation',
      account: 'Account details will be available soon',
      note: 'We are setting up our Pakistani banking facilities. Please check back later or use the USA account for international donations.'
    },
    USA: {
      flag: '🇺🇸',
      status: 'active',
      bank: 'Bank of America',
      title: 'Awazekhalq Foundation',
      routing: '052001633',
      account: '4460 5838 0556',
      note: 'For international transfers, use SWIFT: BOFAUS3N'
    }
  }

  const impactStats = [
    { 
      label: 'Families Supported', 
      value: '1,200+', 
      icon: '👨‍👩‍👧‍👦',
      description: 'Essential aid and resources provided'
    },
    { 
      label: 'Children Educated', 
      value: '350+', 
      icon: '📚',
      description: 'Access to quality education'
    },
    { 
      label: 'Communities Reached', 
      value: '45+', 
      icon: '🌍',
      description: 'Across Pakistan and beyond'
    },
    { 
      label: 'Lives Transformed', 
      value: '5,000+', 
      icon: '✨',
      description: 'Through sustainable initiatives'
    }
  ]

  const recentDonors = [
    { name: 'Ali R.', amount: '₨5,000', time: '2 hours ago' },
    { name: 'Sarah K.', amount: '$50', time: '5 hours ago' },
    { name: 'Anonymous', amount: '$100', time: '1 day ago' },
    { name: 'Fatima A.', amount: '₨10,000', time: '1 day ago' },
    { name: 'Michael T.', amount: '$200', time: '2 days ago' }
  ]

  const donationTiers = [
    {
      amount: '$25',
      title: 'Basic Support',
      description: 'Provides food for a family for one week',
      features: ['Food supplies', 'Basic necessities', 'Immediate impact'],
      popular: false
    },
    {
      amount: '$50',
      title: 'Education Champion',
      description: 'Supports one child\'s education for a month',
      features: ['School supplies', 'Tuition support', 'Educational materials'],
      popular: true
    },
    {
      amount: '$100',
      title: 'Community Builder',
      description: 'Funds healthcare or community development',
      features: ['Medical camps', 'Community projects', 'Sustainable impact'],
      popular: false
    }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 pt-24 pb-20">
        
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <span className="text-sm font-semibold">🌟 Make a Difference Today</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 mb-6">
            Empower Change
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Your generous donation fuels our mission to create lasting impact in communities. 
            Every contribution, big or small, helps us build a better future together.
          </p>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-green-600 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Donation Tiers */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 mb-4">
              Choose Your Impact
            </h2>
            <p className="text-lg text-gray-600">Select a donation tier that matches your giving goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                tier.popular 
                  ? 'border-green-500 ring-4 ring-green-500/20' 
                  : 'border-green-200 hover:border-green-300'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-black text-green-600 mb-2">{tier.amount}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                  <p className="text-gray-600 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl'
                    : 'bg-green-100 text-green-700 hover:bg-green-200 hover:shadow-lg'
                }`}>
                  Donate {tier.amount}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Bank Transfer Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 mb-4">
              Bank Transfer
            </h2>
            <p className="text-lg text-gray-600">Direct bank transfer options for secure donations</p>
          </div>

          {/* Country Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {Object.entries(accounts).map(([country, data]) => (
              <button
                key={country}
                onClick={() => setActiveCountry(country)}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center gap-3 ${
                  activeCountry === country 
                    ? data.status === 'coming-soon'
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl scale-105'
                    : data.status === 'coming-soon'
                      ? 'bg-gray-50 text-gray-400 cursor-not-allowed border-2 border-gray-200'
                      : 'bg-white text-gray-700 border-2 border-green-200 hover:border-green-300 hover:shadow-lg'
                }`}
                disabled={data.status === 'coming-soon'}
              >
                <span className="text-2xl">{data.flag}</span>
                <div className="text-left">
                  <div className="font-semibold">{country}</div>
                  {data.status === 'coming-soon' && (
                    <div className="text-xs opacity-75">Coming Soon</div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Bank Details Card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-green-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 text-white">
              <div className="flex items-center gap-6">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                  <div className="text-4xl">{accounts[activeCountry].flag}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{accounts[activeCountry].bank}</h3>
                  <p className="text-green-100 opacity-90">
                    {accounts[activeCountry].status === 'coming-soon' 
                      ? 'Banking facilities coming soon' 
                      : 'Secure bank transfer details below'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              {accounts[activeCountry].status === 'coming-soon' ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">⏳</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Banking Details Coming Soon</h4>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We are currently setting up our Pakistani banking facilities. 
                    Please use the USA account for international donations or check back later.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {Object.entries(accounts[activeCountry]).map(([key, value]) => {
                      if (['flag', 'status', 'note'].includes(key)) return null
                      return (
                        <div key={key} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 group hover:shadow-lg transition-all duration-300">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </p>
                              <p className="font-mono text-lg font-bold text-gray-900 break-all">
                                {value}
                              </p>
                            </div>
                            <button
                              onClick={() => copyText(value, `${activeCountry}-${key}`)}
                              className="text-green-600 hover:text-green-700 p-2 rounded-xl hover:bg-white transition-all duration-300 group-hover:scale-110"
                              aria-label="Copy to clipboard"
                            >
                              {copied === `${activeCountry}-${key}` ? (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              )}
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {accounts[activeCountry].note && (
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <div className="text-blue-500 text-xl">💡</div>
                        <div>
                          <p className="font-semibold text-blue-800 mb-1">Important Note</p>
                          <p className="text-blue-700 text-sm">{accounts[activeCountry].note}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        {/* Recent Donors */}
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-green-100">
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 mb-6 text-center">
              Recent Supporters
            </h3>
            <div className="space-y-4">
              {recentDonors.map((donor, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {donor.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{donor.name}</div>
                      <div className="text-sm text-gray-500">{donor.time}</div>
                    </div>
                  </div>
                  <div className="text-lg font-black text-green-600">{donor.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-4xl font-black mb-4">Ready to Make an Impact?</h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Your donation today can transform lives tomorrow. Join our community of changemakers and be part of something bigger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Donate Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                Learn More About Impact
              </button>
            </div>
          </div>
        </section>
      </main>
      
    </>
  )
}
