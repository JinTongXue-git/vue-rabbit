import httpInstance from '@/utils/http'

export function getLikeListAPI({ limit = 4 }) {
  return httpInstance({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}


