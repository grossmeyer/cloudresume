import { useRouter } from 'next/router'

export default function ViewCounter() {
  const db = {
    "PAGE#/": {
      "viewCount": 100
    },
    "PAGE#/about": {
      "viewCount": 101
    }
  }
  const router = useRouter()
  const page = router.pathname

  const updateViewCount = page => {
    const pk = db[`PAGE#${page}`]
    pk.viewCount++
    const vcStr = pk.viewCount.toString().padStart(5, '0')
    return vcStr
  }

  const viewCount = updateViewCount(page)

  return (
    <footer className='flex flex-col font-main text-center items-center m-4 p-4'>
      <div className='mt-4 p-2 text-lg text-slate-100 bg-sky-700 rounded-lg w-1/6'>
        <p>Page views: {viewCount}</p>
      </div>
    </footer>
  )
}