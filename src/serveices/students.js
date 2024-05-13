
export async function getAllStudents(){
    return await fetch("https://api-hmugo-web.itheima.net/api/public/v1/goods/search")
        .then(resp => {
            return resp.json();
        }).then(resp => {
            console.log(resp)
            return resp
            
        })
}