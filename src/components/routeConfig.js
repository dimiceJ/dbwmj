import Hotshow from './Hotshow.vue'
import Awaits from './Awaits.vue'
import Search from './Search.vue'
import Moviemsg from './Moviemsg.vue'
export default[
{
    path:'/hotshow',
    component:Hotshow
},
{
    path:'/awaits',
    component:Awaits
},
{
    path:'/search',
    component:Search
},
{
    path:'/movie/:id',
    component:Moviemsg
},
{
    path:'/',
     redirect:'/hotshow'
    // redirect:Moviemsg

},{
    path:'*',
     redirect:'/hotshow'
    // redirect:Moviemsg

}
]