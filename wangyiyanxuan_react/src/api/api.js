import { get, post} from './http'

export const apiAddress = p => get('/auth/user/1', p)

// class API extends Server{
//     /**
//      * 用途：获取记录数据
//      * @url 
//      * 返回200表示成功
//      * @method get
//      * @return {priomise}
//      */
//     async getRecord(params = {}){
//         try{
//             let result = await this.axios('get', `/home`);
//             if (result && (result.data instanceof Object) && result.http_code === 200){
//                 return result.data;
//             }
//             else 
//             {
//                 let err = {
//                     tip:'获取记录数据失败',
//                     response: result,
//                     data: params,
//                     url: 'https://www.easy-mock.com/mock/5d1f0408b5f8726241d2fd95/wangyiyanxuan/home'
//                 }
//                 throw err;
//             }
//         } 
//         catch(err)
//         {
//             throw err;
//         }
//     }
// }