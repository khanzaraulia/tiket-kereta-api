
import { getServerCookie } from '@/helper/server-cookie'
import React from 'react'
import HistoryCard from './_components/historyCard'
import { History } from '@/app/karyawan/types'
import { axiosIstance } from '@/helper/api'
export const dynamic = "force-dynamic";


const GetDataHistory = async (): Promise<History[]> => {
    try {
        const token = await getServerCookie('token')
        const response: any = await axiosIstance.get('/purchase/customer', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (!response.data.success) return []

        return response.data.data
    } catch (error) {
        console.log(error)
        return []
    }
}

const page = async () => {

    const historyData = await GetDataHistory()

  return (
    <div>
        <h1 className='text-left text-2xl font-bold p-3'>History Pemesanan</h1>
        <div className='flex flex-col p-3'>
            {
                historyData.map((item, index) => (
                    <HistoryCard key={index} item={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default page