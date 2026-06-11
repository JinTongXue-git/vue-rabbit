import httpInstance from '@/utils/http'

export function loginApi({account,password}){
  return httpInstance({
    url: '/login',
    method: 'POST',
    data:{
      account : account.trim(),
      password : password.trim()
    }
  })
}