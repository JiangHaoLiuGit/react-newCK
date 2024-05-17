
export async function getAllStudents(){
    return await fetch("https://api-hmugo-web.itheima.net/api/public/v1/goods/search")
        .then(resp => {
            return resp.json();
        }).then(resp => {
            console.log(resp)
            return resp
            
        })
}
export async function getStudents({pageSize = 10,pageNum = 1}){
    return await fetch(`https://api-hmugo-web.itheima.net/api/public/v1/goods/search?pagesize=${pageSize}&pagenum=${pageNum}`)
    .then(resp => {
        return resp.json()
    }).then(res => {
        return res
    })
}
