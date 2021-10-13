import { useEffect, useState } from 'react'

/* eslint-disable camelcase */
export interface DeBankTvlResponse {
  url: string
  type: string
}

export const useGetNews = () => {
  const [data, setData] = useState<DeBankTvlResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.airtable.com/v0/appjvmJqlLc4cm9CM/Table%201?api_key=keycGySWvM9Wh654X',
        ).then((res) => {
          console.log(res)
          const url = res.url
          const type = res.type

          setData({ type, url })
        })
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}
