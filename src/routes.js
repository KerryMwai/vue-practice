import ShowBlogs from './components/ShowBlog'
import AddBlog from './components/AddBlog'
import FormOne from './components/FormOne'
import FormTwo from './components/FormTwo'
import FormHelper from './components/FormHelper'
import ListBlogs from './components/ListBlogs'
import SingleBlog from './components/SingleBlog'
export default [
    { path:'/', component: ShowBlogs},
    { path: '/add', component: AddBlog },
    {path:'/formone', component: FormOne},
    {path:'/formtwo', component: FormTwo},
    {path:'/formhelper', component: FormHelper},
    {path:'/listblogs', component: ListBlogs},
    {path:'/blog/:id', component: SingleBlog},
]