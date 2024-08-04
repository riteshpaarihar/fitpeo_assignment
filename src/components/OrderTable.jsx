import React from 'react';

const OrderTable = ({ orders }) => {
  const statusColors = {
    Delivered: 'bg-green-500',
    Pending: 'bg-yellow-500',
    Cancelled: 'bg-red-500',
    // Default color for unknown statuses
    Unknown: 'bg-gray-500'
  };

  const getStatusClass = (status) => {
    return statusColors[status] || statusColors.Unknown;
  };

  return (
    <div className="bg-[#1f2029] p-4 rounded-lg">
      <h2 className="text-white text-lg font-bold mb-4">Recent Orders</h2>
      <table className="w-full border-collapse">
        <thead className='test-s'>
          <tr>
            <th className="text-left text-white py-2 px-4 border-b">Customer</th>
            <th className="text-left text-white py-2 px-4 border-b">Order No.</th>
            <th className="text-left text-white py-2 px-4 border-b">Amount</th>
            <th className="text-left text-white py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody className='text-xs'>
          {orders.map((order) => {
            const statusClass = getStatusClass(order.status); // Compute status class here
            return (
              <tr key={order.id}>
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center">
                    {/* Replace with actual customer image */}
                    <img src={order.customerImage} alt={order.customerName} className="w-8 h-8 rounded-full mr-2" />
                    <span className="text-white">{order.customerName}</span>
                  </div>
                </td>
                <td className="text-white py-2 px-4 border-b">{order.orderNo}</td>
                <td className="text-white py-2 px-4 border-b">${order.amount.toFixed(2)}</td>
                <td className={`text-white py-2 px-4 border-b  `}> <span className={`${statusClass} rounded-lg p-1`}>
                {order.status}
                </span></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;