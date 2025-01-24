
// export const getAllUsers = (req, res) => {
//   res.json(users);  
// };

// export const getUserById = (req, res) => {
//   const user = users.find(u => u.id == req.params.userId);
//   if (!user) {
//     return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
//   }
//   res.json(user);
// };

// export const registerUser = (req, res) => {
//   const { name, email, password } = req.body;

//   const newUser = { id: Date.now(), name, email, password };  

//   res.status(201).json({
//     message: "Foydalanuvchi ro'yxatdan o'tdi",
//     user: newUser
//   });
// };


// export const updateUser = (req, res) => {
//   const { name, email } = req.body;
//   const user = users.find(u => u.id == req.params.userId);
//   if (!user) {
//     return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
//   }

//   user.name = name || user.name;
//   user.email = email || user.email;

//   res.json(user);
// };

// export const deleteUser = (req, res) => {
//   const index = users.findIndex(u => u.id == req.params.userId);
//   if (index === -1) {
//     return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
//   }

//   users.splice(index, 1);
//   res.json({ message: 'Foydalanuvchi o\'chirildi' });
// };

let users = []; 

export const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser); 

  res.status(201).json({
    message: "Foydalanuvchi ro'yxatdan o'tdi",
    user: newUser
  });
};

export const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

export const getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.userId));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Foydalanuvchi topilmadi" });
  }
};

export const updateUser = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.userId));
  if (user) {
    const { name, email, password } = req.body;
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;

    res.status(200).json({
      message: "Foydalanuvchi yangilandi",
      user: user
    });
  } else {
    res.status(404).json({ message: "Foydalanuvchi topilmadi" });
  }
};

export const deleteUser = (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.userId));
  if (index !== -1) {
    users.splice(index, 1); 
    res.status(200).json({ message: "Foydalanuvchi o'chirildi" });
  } else {
    res.status(404).json({ message: "Foydalanuvchi topilmadi" });
  }
};
