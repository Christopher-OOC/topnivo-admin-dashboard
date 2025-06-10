import React from 'react'

const StatCards = () => {
    const data = [
        { name: 'Ade Emmanuel', email: 'adeemma@email.com', phone: '63723284', address: '123rd Langa Street, Anioch' },
    ]
    return (
        <>
            {/* <Card /> */}
            {/* <Card />
        <Card /> */}
            <Card
                title='Account Info'
                name={data[0].name}
                data={data[0].email}
                secData={data[0].phone}
                btnValue='EDIT ACCOUNT'
            />
            <Card
                title='Account Info'
                name={data[0].name}
                data={data[0].email}
                secData={data[0].phone}
                btnValue='EDIT ACCOUNT'

            />
            <Card
                title='Billing Information'
                name={data[0].name}
                data={data[0].address}
                secData={data[0].email}
                btnValue='EDIT ACCOUNT'

            />
            <BarCard />

        </>
    )
}

export default StatCards



const Card = ({
    title,
    name,
    data,
    secData,
    btnValue
}) => {
    return <div className='p-4 border rounded-lg border-stone-300 col-span-6 lg:col-span-3'>
        <div className='flex mb-4 items-start justify-between'>
            <div>
                <h3 className='text-stone-500 mb-2 text-lg font-semibold'>{title}</h3>
                <p className='text-sm font-semibold'>{name}</p>
            </div>
            <div>

            </div>
            {/* TREND */}

        </div>
        <p className='text-sm'>{data}</p>
        <p className='text-sm'>{secData}</p>
        <button className='text-amber-400 mt-3'>{btnValue}</button>
    </div>
}

const BarCard = () => {
    return <div className="flex flex-wrap gap-2 grid-rows-3 lg:w-[350px]">
        <div className=" h-20 bg-white p-3 rounded-lg shadow-sm flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
            <div className="ml-4">
                <p className="text-lg font-semibold">154</p>
                <p className="text-gray-600 text-sm">Total Orders</p>
            </div>
        </div>

        <div className=" h-20 bg-white p-3 rounded-lg shadow-sm flex items-center">
            <div className="p-3 bg-orange-100 rounded-lg">
                <div className="w-6 h-6 bg-orange-500 rounded"></div>
            </div>
            <div className="ml-4">
                <p className="text-lg font-semibold">05</p>
                <p className="text-gray-600 text-sm">Pending Orders</p>
            </div>
        </div>

        <div className=" h-20 bg-white p-3 rounded-lg shadow-sm flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
            </div>
            <div className="ml-4">
                <p className="text-lg font-semibold">149</p>
                <p className="text-gray-600 text-sm">Completed Orders</p>
            </div>
        </div>
    </div>


}