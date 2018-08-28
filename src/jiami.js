import CryptoJS from 'crypto-js/crypto-js'
var key = "Xhr15T8dGd44IU04bd9EfHc9cF782Yt9"
var token = '';
var sign = '';
var url = 'https://www.fitness-partner.cn/jianshen/ssln/client/';

function encryptByDES(data) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(data, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
}

exports.decryptByDES=function(data) {
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(data)
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
 console.log(data);
    return decrypted.toString(CryptoJS.enc.Utf8);
}

function getToken() {
    var token = '';
    if (localStorage.token) {
        token = localStorage.token;
    } else {
        token = '';
    } 
    return token;
}
exports.getRequest=function(service, a, params, call_back) {

    var tokenStr = getToken();
    var time = new Date().getTime().toString();

    if (tokenStr == '' || tokenStr == undefined || tokenStr == 'undefined') {

        token = '';
        var str = 'a=' + a + '&params=' + params + '&timestamp=' + time + '&key=SRp2ED95caZd4adfFL25Q9de0d2E7f0H';
        str = str.replace(/[\r\n]/g, '').replace(/"/g, '').replace(/\s/g, "");
        sign = CryptoJS.MD5(str);
        /* sign = "441f3f24f7fca4409306debb05f9be4d"; */
     

    } else {

        token = encryptByDES(tokenStr).replace(/\+/g, "%2B").replace(/\&/g, "%26");
        var str = 'a=' + a + '&params=' + params + '&t=' + tokenStr + '&timestamp=' + time + '&key=SRp2ED95caZd4adfFL25Q9de0d2E7f0H';
        str = str.replace(/[\r\n]/g, '').replace(/"/g, '').replace(/\s/g, "");
        sign = CryptoJS.MD5(str);
        /* sign = "441f3f24f7fca4409306debb05f9be4d"; */
       
    }
    params = encryptByDES(params).toString().replace(/\+/g, "%2B").replace(/\&/g, "%26");
    a = encryptByDES(a).toString().replace(/\+/g, "%2B").replace(/\&/g, "%26");
    time = encryptByDES(time).replace(/\+/g, "%2B").replace(/\&/g, "%26");
    return url + service + '?a=' + a + '&t=' + token + '&timestamp=' + time + '&params=' + params + '&sign=' + sign
}