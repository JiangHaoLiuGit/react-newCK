import Home from './component/Home'
import News from './component/News'
import NewsDetail from './component/NewsDetail'
import NewsSearch from './component/NewsSearch'
import NewsHome from './component/NewsHome'
import User from './component/User'
import UserHome from './component/UserHom'
import UserList from './component/UserList'

export default [
    
    
    {
        path:"/nns",component:News,name:"news",
        children:[
            {path:'/',component:NewsHome,name:"newsHome",exact:true},
            {path:'/detail',component:NewsDetail,name:"newsDetail",exact:true},
            {path:'/search',component:NewsSearch,name:"newsSearch",exact:true},
        ]
    },
    {
        path:"/uu",component:User,name:"user",
        children:[
            {path:'/',component:UserHome,name:"userHome",exact:true},
            {path:'/list',component:UserList,name:"userList",exact:true},
        ]
    },
    {
        path:'/home' , component:Home,name:"home"
    },
]