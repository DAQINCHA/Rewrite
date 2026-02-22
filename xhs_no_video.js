// 获取原始响应体
let body = $response.body;

if (body) {
    try {
        // 解析 JSON
        let obj = JSON.parse(body);
        
        // 确保 data 存在且是数组，然后过滤掉 type 为 "video" 的元素
        if (obj.data && Array.isArray(obj.data)) {
            obj.data = obj.data.filter(item => item.type !== "video");
        }
        
        // 重新转回字符串
        body = JSON.stringify(obj);
    } catch (e) {
        console.log("小红书响应体解析失败: " + e);
    }
}

// 返回修改后的结果
$done({ body });
