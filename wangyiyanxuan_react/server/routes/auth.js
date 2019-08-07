const auth = require('../controllers/user.js')
const KoaRouter = require('koa-router')

const router = KoaRouter()  

router.get('/user/:id', auth.getUserInfo); // 定义url的参数是id,用user的auth方法引入router。后面是执行的方法
router.post('/user', auth.postUserAuth); 

module.exports =  router// 把router规则暴露出去
