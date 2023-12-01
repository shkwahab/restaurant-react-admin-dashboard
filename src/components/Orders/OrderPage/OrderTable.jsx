import React, { useState, useEffect } from 'react'
import state from '../../../proxyState/store'
import { useSnapshot } from 'valtio'


export const orderList = [
    {
        orderId: "#5552375",
        date: "1 December 2023",
        customerName: "Emilia Johanson",
        location: "67 St. John’s Road London",
        amount: "72.5",
        statusOrder: "On Delivery"
    },
    {
        orderId: "#5552376",
        date: "2 December 2023",
        customerName: "John Doe",
        location: "68 St. Road London",
        amount: "420.15",
        statusOrder: "New Order"
    },
    {
        orderId: "#5552377",
        date: "1 December 2023",
        customerName: "Peter Doe",
        location: "9 Park Avenue London",
        amount: "321",
        statusOrder: "Delivered"
    },
    {
        orderId: "#5552378",
        date: "1 December 2023",
        customerName: "Neha Johanson",
        location: "King Street, Melbourne",
        amount: "215",
        statusOrder: "Cancelled"
    },
    {
        orderId: "#5552379",
        date: "1 December 2023",
        customerName: "Xavier Pentel",
        location: "Barrack Road, London",
        amount: "651.16",
        statusOrder: "New Order"
    },
    {
        orderId: "#5552380",
        date: "1 December 2023",
        customerName: "Irina Shayk",
        location: "Penfold Drive, London",
        amount: "521.16",
        statusOrder: "On Delivery"
    },

]
const OrderTable = () => {
    const snap = useSnapshot(state)
    state.filterOrderLength = orderList.length;
    const [filterOrderList, setFilterOrderList] = useState([]);
    const [filterStatusOrderList, setFilterStatusOrderList] = useState([]);

    const MonthNames = [
        {
            key: 1,
            name: "January"
        },
        {
            key: 2,
            name: "February"
        },
        {
            key: 3,
            name: "March"
        },
        {
            key: 4,
            name: "April"
        },
        {
            key: 5,
            name: "May"
        },
        {
            key: 6,
            name: "June"
        },
        {
            key: 7,
            name: "July"
        },
        {
            key: 8,
            name: "August"
        },
        {
            key: 9,
            name: "September"
        },
        {
            key: 10,
            name: "October"
        },
        {
            key: 11,
            name: "November"
        },
        {
            key: 12,
            name: "December"
        },
    ]
    let currentMonth = new Date().getMonth();
    let currentMonthName = MonthNames.filter((month) => month.key === currentMonth + 1)[0].name;
    let dateFilterDAte = snap.defaultOrderFilterData;
    const currentDate = new Date().getDate() + " " + currentMonthName + " " + new Date().getFullYear();
    if (dateFilterDAte === "Today" || dateFilterDAte === "today") {
        dateFilterDAte = currentDate
    }
    let singleDate = undefined;
    let singleDateFilter = null;
    let rangeDateFilter = null;
    if (snap.defaultOrderFilterData.includes("-")) {
        rangeDateFilter = snap.defaultOrderFilterData
        const startDate = rangeDateFilter.split("-")[0];
        const endDate = rangeDateFilter.split("-")[1];
        const startDateMonth = startDate.split("/")[0];
        const startDateDay = startDate.split("/")[1];
        const startDateYear = startDate.split("/")[2];
        const endDateMonth = endDate.split("/")[0];
        const endDateDay = endDate.split("/")[1];
        const endDateYear = endDate.split("/")[2];
        let startDateMonthName = undefined;
        let endDateMonthName = undefined;
        for (let i = 0; i < MonthNames.length; i++) {
            if (MonthNames[i].key === parseInt(startDateMonth)) {
                startDateMonthName = MonthNames[i].name
            }
            if (MonthNames[i].key === parseInt(endDateMonth)) {
                endDateMonthName = MonthNames[i].name
            }
        }
        rangeDateFilter = startDateDay + " " + startDateMonthName + " " + startDateYear + "-" + endDateDay + " " + endDateMonthName + " " + endDateYear;
    } else {
        singleDate = snap.defaultOrderFilterData
        const singleDateMonth = singleDate.split("/")[0];
        const singleDateDay = singleDate.split("/")[1];
        const singleDateYear = singleDate.split("/")[2];
        let singleDateMonthName = undefined;
        for (let i = 0; i < MonthNames.length; i++) {
            if (MonthNames[i].key === parseInt(singleDateMonth)) {
                singleDateMonthName = MonthNames[i].name
            }
        }
        singleDateFilter = singleDateDay + " " + singleDateMonthName + " " + singleDateYear;
    }
    useEffect(() => {
        let tempFilterOrderList = null;
        let tempFilterStatusOrderList = null;

        if (snap.orderStatusFilterCriteria === "All Status") {
            tempFilterOrderList = orderList
                .filter((order) => {
                    const endDate = String(rangeDateFilter).toLowerCase().split("-")[1]
                    return order.date === dateFilterDAte
                        || order.date === singleDateFilter || order.date.toLowerCase().includes(String(rangeDateFilter).toLowerCase().split("-")[0])
                        || order.date.split(" ")[0] <= endDate
                });

            setFilterOrderList(tempFilterOrderList);
        } else {
            tempFilterStatusOrderList = orderList
                .filter((order) => {
                    const endDate = String(rangeDateFilter).toLowerCase().split("-")[1]
                    return (order.statusOrder === snap.orderStatusFilterCriteria) && (order.date === dateFilterDAte
                        || order.date === singleDateFilter || order.date.toLowerCase().includes(String(rangeDateFilter).toLowerCase().split("-")[0])
                        || order.date.split(" ")[0] <= endDate
                    )
                });

            setFilterStatusOrderList(tempFilterStatusOrderList);
        }
    }, [snap.orderStatusFilterCriteria, dateFilterDAte, singleDateFilter, rangeDateFilter]);

    useEffect(() => {
        state.filterOrderLength=filterOrderList.length;
        state.filterOrderStatusLength=filterStatusOrderList.length
    }, [filterOrderList,filterStatusOrderList]);

    

    return (
        <div>
            <div className="flex flex-col mt-6 font-primary">
                <div className="overflow-x-auto rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 ">
                                <thead className="bg-gray-50 font-bold ">
                                    <tr>
                                        <th scope="col" className="p-4 text-xs sm:text-base font-bold tracking-wider text-left text-gray-800 uppercase ">
                                            Order ID
                                        </th>
                                        <th scope="col" className="p-4 text-xs sm:text-base font-bold tracking-wider text-left text-gray-800 uppercase ">
                                            Date
                                        </th>
                                        <th scope="col" className="p-4 text-xs sm:text-base font-bold tracking-wider text-left text-gray-800 uppercase ">
                                            Customer Name
                                        </th>
                                        <th scope="col" className="p-4 text-xs sm:text-base font-bold tracking-wider text-left text-gray-800 uppercase ">
                                            Location
                                        </th>
                                        <th scope="col" className="p-4 text-xs sm:text-base font-bold tracking-wider text-left text-gray-800 uppercase ">
                                            Amount
                                        </th>
                                        <th scope="col" className="p-4 text-xs sm:text-base font-bold tracking-wider text-left text-gray-800 uppercase ">
                                            Status Order
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white ">
                                    {
                                        snap.orderStatusFilterCriteria === "All Status" ?
                                            filterOrderList.map((order, index) => {
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
                                            }) :
                                            filterStatusOrderList.map((order, index) => {
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
                                    {/* <FilterOrderList /> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderTable
