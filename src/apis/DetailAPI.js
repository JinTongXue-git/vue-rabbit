
import httpInstance from '@/utils/http'


export function getDetailApi(id){
  return httpInstance({
    url: '/goods',
    method: 'GET',
    params: {
      id: id
    }
  })
}

