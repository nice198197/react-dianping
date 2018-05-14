export default function location() {
    return new Promise((resolve, reject) => {
       
        let geolocation = new BMap.Geolocation();    
        let gc = new BMap.Geocoder();     
        geolocation.getCurrentPosition( function(r) {
               //定位结果对象会传递给r变量  
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {  
                let pt = r.point;    
                gc.getLocation(pt, function(rs){    
                    let addComp = rs.addressComponents;    
                    // 获取位置信息
                    let cityName = addComp.cityName;
                    if(cityName) {
                        resolve(cityName)
                    }  else {
                        reject('重庆市')
                    }
                });  
            } else {  
                switch( this.getStatus() ) {  
                    case 2:  
                        alert( '位置结果未知 获取位置失败.' );  
                    break;  
                    case 3:  
                        alert( '导航结果未知 获取位置失败..' );  
                    break;  
                    case 4:  
                        alert( '非法密钥 获取位置失败.' );  
                    break;  
                    case 5:  
                        alert( '对不起,非法请求位置  获取位置失败.' );  
                    break;  
                    case 6:  
                        alert( '对不起,当前 没有权限 获取位置失败.' );  
                    break;  
                    case 7:  
                        alert( '对不起,服务不可用 获取位置失败.' );  
                    break;  
                    case 8:  
                        alert( '对不起,请求超时 获取位置失败.' );  
                    break;  
                        
                }  
            }          
        },  
        {
            enableHighAccuracy: true
        })
    }); 
}