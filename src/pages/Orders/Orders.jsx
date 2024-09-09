/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './Orders.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Orders = ({ Url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${Url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error("Failed to fetch orders: " + response.data.message); // Providing more specific error message
      }
    } catch (error) {
      toast.error("Network error: " + error.message); // Handling network or other errors
    }
  };

  const statusHandler = async (event,orderId)=>{
    const response = await axios.post(Url+"/api/order/status",{
      orderId,
      status:event.target.value
    });
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []); 
  return (
    <div className='order add'>
      <h3>Order Pages</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={order.id || index} className='order-item'> {/* Use order ID if possible for keys */}
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, idx) => (
                  `${item.name} x ${item.quantity}` + (idx < order.items.length - 1 ? ', ' : '')
                )).join(' ')}
              </p>
              <p className='order-item-name'>{order.address.firstName+ " " + order.address.lastName}</p>
              <div className='order-item-address'>
                <p>{order.address.street+" , "}</p>
                <p>{order.address.city+" , " + order.address.state+" , " + order.address.country+" , " + order.address.zipCode}</p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
