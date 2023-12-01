{
    snap.orderStatusFilterCriteria === "All Status" ? orderList
        .filter((order) => {
            const endDate = String(rangeDateFilter).toLowerCase().split("-")[1]
            return order.date === dateFilterDAte
                || order.date === singleDateFilter || order.date.toLowerCase().includes(String(rangeDateFilter).toLowerCase().split("-")[0])
                || order.date.split(" ")[0] <= endDate
        })
        .map((order, index) => {
            return <tr key={order.orderId} className='my-4'>
                <td className="p-4 text-sm font-normal text-secondary whitespace-nowrap ">
                    {order.orderId}
                </td>
                <td className="p-4 text-sm font-normal text-secondary whitespace-nowrap ">
                    {order.date}
                </td>
                <td className="p-4 text-sm  text-secondary whitespace-nowrap ">
                    {order.customerName}
                </td>
                <td className="p-4 text-sm font-normal text-secondary whitespace-nowrap ">
                    {order.location}
                </td>
                <td className="inline-flex items-center p-4 space-x-2 text-sm font-normal text-secondary whitespace-nowrap ">
                    ${order.amount}
                </td>
                <td className={`p-4 whitespace-nowrap ${order.statusOrder === "On Delivery" ? "text-buttonPrimary" : ""} ${order.statusOrder === "Delivered" ? "text-green-600" : ""} ${order.statusOrder === "Cancelled" ? "text-red-600" : ""} ${order.statusOrder === "New Order" ? "text-pink-500" : ""}`}>
                    {order.statusOrder}
                </td>
            </tr>

        }
        ) :
        <React.Fragment>
            {
                orderList

                    .filter((order) => {
                        const endDate = String(rangeDateFilter).toLowerCase().split("-")[1]
                        return (order.statusOrder === snap.orderStatusFilterCriteria) && (order.date === dateFilterDAte
                            || order.date === singleDateFilter || order.date.toLowerCase().includes(String(rangeDateFilter).toLowerCase().split("-")[0])
                            || order.date.split(" ")[0] <= endDate
                        )
                    })

                    .map((order, index) => {
                        return <tr key={order.orderId} className='my-4'>
                            <td className="p-4 text-sm font-normal text-secondary whitespace-nowrap ">
                                {order.orderId}
                            </td>
                            <td className="p-4 text-sm font-normal text-secondary whitespace-nowrap ">
                                {order.date}
                            </td>
                            <td className="p-4 text-sm  text-secondary whitespace-nowrap ">
                                {order.customerName}
                            </td>
                            <td className="p-4 text-sm font-normal text-secondary whitespace-nowrap ">
                                {order.location}
                            </td>
                            <td className="inline-flex items-center p-4 space-x-2 text-sm font-normal text-secondary whitespace-nowrap ">
                                ${order.amount}
                            </td>
                            <td className={`p-4 whitespace-nowrap ${order.statusOrder === "On Delivery" ? "text-buttonPrimary" : ""} ${order.statusOrder === "Delivered" ? "text-green-600" : ""} ${order.statusOrder === "Cancelled" ? "text-red-600" : ""} ${order.statusOrder === "New Order" ? "text-pink-500" : ""}`}>
                                {order.statusOrder}
                            </td>
                        </tr>

                    })
            }
        </React.Fragment>
}