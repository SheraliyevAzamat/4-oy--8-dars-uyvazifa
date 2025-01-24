// import express from 'express';
// const router = express.Router();



// import { registerUser } from '../controllers/userController.js';  

// router.post('/register', registerUser);
// router.get('/', getAllUsers);
// router.get('/:userId', getUserById);

// export default router;


// router.get('/', getAllUsers);
// router.get('/:userId', getUserById);
// router.post('/', createUser);
// router.put('/:userId', updateUser);
// router.delete('/:userId', deleteUser);


import express from 'express';
import { registerUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();
router.post('/register', registerUser);
router.get('/', getAllUsers);
router.get('/:userId', getUserById);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

export default router;
