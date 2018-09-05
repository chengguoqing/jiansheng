exports.time_er = function (val) {
    var crtTime = new Date(val);
    return dateFtt("yyyy/MM/dd", crtTime);
}


function dateFtt(fmt, date) { //author: meizz
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}



var sc = {
    xz: function (title, call_back) {
        if (mui.os.plus) {
            mui.confirm(" ", (title || '上传头像'), ['相册', '拍照'], function (e) {
                if (e.index == 1) { //拍照
                    sc.pai(call_back); //拍照
                } else { //相册
                    sc.xiang(call_back); //相册
                }

            }, 'div')
        }
    },
    pai: function (call_back) {
        var sd_sdsd = ""
        var c = plus.camera.getCamera();
        c.captureImage(function (e) {
            plus.io.resolveLocalFileSystemURL(e, function (entry) {
                var s = entry.toLocalURL() + "?version=" + new Date().getTime();
                uploadHead(s, function (url) {
                    call_back(url)
                }, true)

            }, function (e) {
                console.log("读取拍照文件错误：" + e.message);
            });
        }, function (s) {
            console.log("error" + s);
        }, {
            filename: "_doc/head.png"
        })

        return sd_sdsd
    },
    xiang: function (call_back) {
        var sd_sdsd = ""
        plus.gallery.pick(function (a) {
            plus.io.resolveLocalFileSystemURL(a, function (entry) {
                plus.io.resolveLocalFileSystemURL("_doc/", function (root) {
                    root.getFile("head.png", {}, function (file) {
                        file.remove(function () {
                            entry.copyTo(root, 'head.png', function (e) {
                                    var e = e.fullPath + "?version=" + new Date().getTime();
                             
                                    uploadHead(e, function (url) {
                                     
                                        call_back(url)
                                    }, true);
                                },
                                function (e) {
                                    alert('copy image fail:' + e.message);
                                });
                        }, function () {
                           alert("delete image fail:" + e.message);
                        });
                    }, function () {
                        entry.copyTo(root, 'head.png', function (e) {
                                var path = e.fullPath + "?version=" + new Date().getTime();
                         
                                uploadHead(path, function (url) {
                                    call_back(url)
                                }, true); /*上传图片*/
                            },
                            function (e) {
                                alert('copy image fail:' + e.message);
                            });
                    });
                }, function (e) {
                   alert("get _www folder fail");
                })
            }, function (e) {
                alert("读取拍照文件错误：" + e.message);
            });

        }, function (a) {}, {
            filter: "image"
        })
        return
    }
}



//上传图片 
function uploadHead(imgPath, cllblack, sd_sdf) {
    var image = new Image();
    image.src = imgPath;
    
	image.crossOrigin = '';
    alert(JSON.stringify(image))
    var imgData = ""
    image.onload = function () {
        imgData = ""
        if (sd_sdf) {
            imgData = getBase64Imageer(image);
        } else {
            imgData = getBase64Image(image);
        }

        cllblack(imgData)
        var sd_sdff = {}
        sd_sdff.logo = imgData
    }
}


//将图片压缩转成base64 
function getBase64Imageer(img) {
    var canvas = document.createElement("canvas");
    var width = img.width;
    var height = img.height;
    // calculate the width and height, constraining the proportions 
    if (width > height) {
        if (width > 640) {
            height = Math.round(height *= 640 / width);
            width = 640;
        }
    } else {
        if (height > 640) {
            width = Math.round(width *= 640 / height);
            height = 640;
        }
    }
    canvas.width = width; /*设置新的图片的宽度*/
    canvas.height = height; /*设置新的图片的长度*/
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height); /*绘图*/
    var dataURL = canvas.toDataURL("image/png", 0.8);
    return dataURL.replace("data:image/png;base64,", "");
}

exports.sc = sc
