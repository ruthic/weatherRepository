const router=require('express').Router();
const user=require('../controllers/user')
const search=require('../controllers/search')
// router.get('/getUser/:email/:password',user.getUser);
router.post('/getUser',user.getUser);

router.post('/newUser',user.addUser);
router.get('/getAllUsers',user.getAll);
router.get('/getUserById/:id',user.getById);
// router.put('/updateUserById',user.updateById)
// router.get('getallSearchesHistory',search.getAll);
router.post('/addSearch',search.addSearch);
router.post('/getAllSearches',search.getAll);
// router.delete('/deleteSearchById',search.deleteById);
module.exports = router;

