import axios from 'axios';
import QS from 'qs';//引入qs模块，用来序列化pst类型的数据


// 环境的切换
// if (process.env.NODE_ENV == 'development') {    
//     axios.defaults.baseURL = 'https://www.baidu.com';} 
// else if (process.env.NODE_ENV == 'debug') {    
//     axios.defaults.baseURL = 'https://www.ceshi.com';
// } 
// else if (process.env.NODE_ENV == 'production') {    
//     axios.defaults.baseURL = 'https://www.production.com';
// }

axios.defaults.baseURL = 'http://localhost:8889';//基础网址
axios.defaults.timeout = 10000; //设置请求超时时间10s
//默认请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


// 响应拦截
// axios.interceptors.response.use(
//     response => {
//         //如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
//         //否则的话抛出错误
//         if (response.status === 200) {
//             return Promise.resolve(response);
//         }else {
//             return Promise.reject(response);
//         }
//     },
//     error => {
//         if (error.response.status) {
//             switch (error.response.status) {

//             }
//         }
//     }
// )


/**
 * get方法，对应get请求
 * @param {String} url 
 * @param {Object} params 
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    })
}
// qs模块来序列化我们的参数。
export function post(url, params){
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            reject(err.data)
        })
    })
}
// 这里有个小细节说下，axios.get()方法和axios.post()在提交数据时参数的书写方式还是有区别的。区别就是，get的第二个参数是一个{}，
// 然后这个对象的params属性值是一个参数对象的。而post的第二个参数就是一个参数对象。两者略微的区别要留意哦！

