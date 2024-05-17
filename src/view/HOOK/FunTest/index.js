import React ,{useEffect , useState , useRef} from 'react'
import {getStudents} from '../../../serveices/students'
import StudentContainer from "./studentContainer.js"
import PagePesParent from '../../../component/Pages/PagesParent.js'
export default function FunTest(props){
    let [date , setDate] = useState([])
    let [pageSize , setPageSize] = useState(15)
    let [total , settotal] = useState(100)
    let totalRef = useRef(0)
    // let total = useRef(0)
    let [pageNum , setPageNum] = useState(1)
    useEffect(()=>{
        // 请求分页数据
        (async() =>{
            let str = await getStudents({
                pageSize,
                pageNum
            })
                setDate(str.message.goods)//[]
                console.log("数据返回个数",str.message.total)//57330
                settotal(str.message.total)
                // settotal(vl => {
                //     return {...vl,value:vl.value+str.message.total}
                // })
                // total.current = str.message.total
                console.log("目前total值",total)//0
        })()
    },[pageSize,pageNum])
    return <>
        <StudentContainer uls={date} />
        
        <PagePesParent current={pageNum} key={total} total={total} limit={pageSize} onPageNum={newPage => {
            setPageNum(newPage)
        }}/>
        <div>
            每页显示的条数: <input type="number" value={pageSize} onChange={e=>{
                setPageSize(parseInt(e.target.value))
            }} />
        </div>
        <div>
            总数: <input type="number" value={total} onChange={e=>{
                settotal(parseInt(e.target.value))
            }} />
        </div>
    </>
}