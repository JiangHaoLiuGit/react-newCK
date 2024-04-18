
export async function getAllStudents(){
    return await fetch("http://jsonplaceholder.typicode.com/posts")
        .then(resp => resp.json()).then(resp => resp)
}