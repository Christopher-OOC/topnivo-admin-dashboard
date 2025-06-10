import { MoreHorizontal } from 'lucide-react'
import React from 'react'

const PaymentOption = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-6">PAYMENT OPTION</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-600 text-white p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-sm">CARD PAYMENT</span>
                        <MoreHorizontal className="w-5 h-5" />
                    </div>
                    <p className="text-xl font-bold mb-2">$85,400.00 USD</p>
                    <p className="text-sm opacity-80 mb-4">•••• •••• •••• 3814</p>
                    <div className="flex justify-between items-center">
                        <span className="text-sm">VISA</span>
                        <span className="text-sm">Ada Emmanuel</span>
                    </div>
                </div>

                <div className="bg-green-600 text-white p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="text-sm block">Gift Card</span>
                            <span className="text-sm block">Mastercard</span>
                        </div>
                        <MoreHorizontal className="w-5 h-5" />
                    </div>
                    <p className="text-xl font-bold mb-2">$87,583.00 USD</p>
                    <p className="text-sm opacity-80 mb-4">•••• •••• •••• 1761</p>
                    <div className="flex justify-between items-center">
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded"></div>
                        <span className="text-sm">Ada Emmanuel</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOption
