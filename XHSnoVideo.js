let obj = JSON.parse($response.body);

if (obj.data && Array.isArray(obj.data)) {
  obj.data = obj.data.filter(item => item.type !== "video");
}

$done({ body: JSON.stringify(obj) });