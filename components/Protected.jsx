import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Protected({ children }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('aawaz_token')
    if (!token) {
      router.replace('/admin/login')
    } else {
      setLoading(false) // Once token is found, stop loading
    }
  }, [router])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl text-gray-600">Loading...</span>
      </div>
    )
  }

  return <>{children}</>
}
