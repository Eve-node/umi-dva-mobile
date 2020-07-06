// https://www.npmjs.com/package/umi-request
import { extend } from 'umi-request';

const request = extend({
    timeout: 20000, //请求超时设置为20秒吧, 有时候硬件网络环境很差
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    responseType: 'json'
});

const baseUrl = process.env.BASEURL;

export function get(url) {
    return param => {
        return request.get(baseUrl + url, { params: param });
    };
}
export function post(url) {
    return param => {
        return request.post(baseUrl + url, { data: param });
    };
}

export default {
    //获取商品列表接口
    getProduct: post('product/get_product')
};
