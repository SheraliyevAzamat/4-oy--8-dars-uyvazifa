
let products = [];

export const createProduct = (req, res) => {
  const { name, price, description, stock } = req.body;

  if (!name || !price || !description || !stock) {
    return res.status(400).json({ message: 'Iltimos, barcha ma\'lumotlarni to\'ldiring.' });
  }

  const newProduct = {
    id: Date.now(),  
    name,
    price,
    description,
    stock
  };

  products.push(newProduct);

  res.status(201).json({
    message: 'Mahsulot muvaffaqiyatli yaratildi',
    product: newProduct
  });
};

export const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

export const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.productId));

  if (!product) {
    return res.status(404).json({ message: 'Mahsulot topilmadi' });
  }

  res.status(200).json(product);
};

export const updateProduct = (req, res) => {
  const { name, price, description, stock } = req.body;
  const productId = parseInt(req.params.productId);

  let product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Mahsulot topilmadi' });
  }

  product.name = name || product.name;
  product.price = price || product.price;
  product.description = description || product.description;
  product.stock = stock || product.stock;

  res.status(200).json({
    message: 'Mahsulot muvaffaqiyatli yangilandi',
    product
  });
};

export const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.productId);

  const index = products.findIndex(p => p.id === productId);

  if (index === -1) {
    return res.status(404).json({ message: 'Mahsulot topilmadi' });
  }

  products.splice(index, 1);  

  res.status(200).json({ message: 'Mahsulot muvaffaqiyatli ochirildi' });
};
