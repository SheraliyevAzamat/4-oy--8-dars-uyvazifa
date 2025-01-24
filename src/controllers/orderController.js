let orders = []; 
export const getAllOrders = (req, res) => {
  res.status(200).json(orders);
};

export const getOrderById = (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.orderId));
  if (!order) {
    return res.status(404).json({ message: 'Buyurtma topilmadi' });
  }
  res.status(200).json(order);
};

export const createOrder = (req, res) => {
  const { userId, productId, total, status } = req.body;

  if (!userId || !productId || !total || !status) {
    return res.status(400).json({ message: 'Iltimos, barcha ma\'lumotlarni to\'ldiring.' });
  }

  const newOrder = {
    id: Date.now(),
    userId,
    productId,
    total,
    status
  };

  orders.push(newOrder);  

  res.status(201).json({
    message: 'Buyurtma muvaffaqiyatli yaratildi',
    order: newOrder
  });
};

export const updateOrder = (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.orderId));

  if (!order) {
    return res.status(404).json({ message: 'Buyurtma topilmadi' });
  }

  const { userId, productId, total, status } = req.body;

  order.userId = userId || order.userId;
  order.productId = productId || order.productId;
  order.total = total || order.total;
  order.status = status || order.status;

  res.status(200).json({
    message: 'Buyurtma muvaffaqiyatli yangilandi',
    order
  });
};

export const deleteOrder = (req, res) => {
  const orderIndex = orders.findIndex(o => o.id === parseInt(req.params.orderId));

  if (orderIndex === -1) {
    return res.status(404).json({ message: 'Buyurtma topilmadi' });
  }

  orders.splice(orderIndex, 1); 

  res.status(200).json({ message: 'Buyurtma muvaffaqiyatli o\'chirildi' });
};
