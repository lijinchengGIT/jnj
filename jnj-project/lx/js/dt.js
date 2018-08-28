var map = new BMap.Map("dt", {
    minZoom: 18,
    maxZoom: 18
});


// 创建地图实例  
var point = new BMap.Point(120.140641, 30.283191);
// 创建点坐标  
map.centerAndZoom(point, 15);
// 初始化地图，设置中心点坐标和地图级别
var marker = new BMap.Marker(point); // 创建标注   

map.addOverlay(marker);

var opts = {
    width: 100, // 信息窗口宽度    
    height: 80, // 信息窗口高度    
    title: "" // 信息窗口标题   
}
var infoWindow = new BMap.InfoWindow("联系我们", opts); // 创建信息窗口对象    
map.openInfoWindow(infoWindow, map.getCenter());