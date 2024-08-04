import OrderTable from "./OrderTable";
import first from "../../public/dummy-profile-01.png"
import second from "../../public/dummy-profile-02.jpg"
import thrid from "../../public/dummy-profile-03.png"
import forth from "../../public/dummy-profile-04.jpg"
import fifth from "../../public/dummy-profile-05.png"
const PROFILE={
  first,
  second,
  thrid,
  forth,
  fifth
}

const  Orders=()=> {
  const orders = [
    {
      id: 1,
      customerName: "John Doe",
      orderNo: "ORD-001",
      amount: 199.99,
      status: "Delivered",
      customerImage: PROFILE.first,
      orderDate: new Date("2024-07-25"),
      shippingAddress: "123 Main St, Anytown, CA",
      items: [
        { name: "Product A", quantity: 2, price: 49.99 },
        { name: "Product B", quantity: 1, price: 99.99 }
      ]
    },
    {
      id: 2,
      customerName: "Jane Smith",
      orderNo: "ORD-002",
      amount: 99.99,
      status: "Shipped",
      customerImage: PROFILE.second,
      orderDate: new Date("2024-07-22"),
      shippingAddress: "456 Elm St, Othertown, NY",
      items: [
        { name: "Product C", quantity: 3, price: 29.99 }
      ]
    },
    {
      id: 3,
      customerName: "Michael Johnson",
      orderNo: "ORD-003",
      amount: 349.99,
      status: "Delivered",
      customerImage: PROFILE.thrid,
      orderDate: new Date("2024-07-20"),
      shippingAddress: "789 Oak St, Yourtown, TX",
      items: [
        { name: "Product D", quantity: 1, price: 199.99 },
        { name: "Product E", quantity: 2, price: 75.00 }
      ]
    },
    {
      id: 4,
      customerName: "Emily Brown",
      orderNo: "ORD-004",
      amount: 129.99,
      status: "Cancelled",
      customerImage: PROFILE.forth,
      orderDate: new Date("2024-07-18"),
      shippingAddress: "101 Pine St, Somewhere, AZ",
      items: [
        { name: "Product F", quantity: 4, price: 29.99 }
      ]
    },
    {
      id: 5,
      customerName: "David Lee",
      orderNo: "ORD-005",
      amount: 299.99,
      status: "Delivered",
      customerImage: PROFILE.fifth,
      orderDate: new Date("2024-07-15"),
      shippingAddress: "202 Cedar St, Anywhere, CA",
      items: [
        { name: "Product G", quantity: 2, price: 149.99 },
        { name: "Product H", quantity: 1, price: 50.00 }
      ]
    }
  ];
  return (
    <div>
      <OrderTable orders={orders} />
    </div>
  )
}

export default Orders
