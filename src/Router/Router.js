import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Login from '../Pages/Form/Login/Login';
import Register from '../Pages/Form/Register/Register';
import Gaming from '../Pages/Gaming/Gaming';
import Home from '../Pages/Home/Home';
import Marketplace from '../Pages/MarketPlace/Marketplace';
import Profile from '../Pages/Profile/Profile';
import Addcenter from '../Pages/Sidebar/Addcenter/Addcenter';
import Friends from '../Pages/Sidebar/Friends/Friends';
import People from '../Pages/Sidebar/People/People';
import Watch from '../Pages/Watch/Watch';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout className="#faf7f5"></Layout>,
        children:[
         {   path:"",
             element:<Home></Home>,
         },
        
         {   path:"/watch",
             element:<Watch></Watch>
         },
         {   path:"/market",
             element:<Marketplace></Marketplace>
         },
         {   path:"/gruph",
             element:<Gaming></Gaming>
         },
         {   path:"/gaming",
             element:<Gaming></Gaming>
         },
          {   path:"/addcenter",
              element:<Addcenter></Addcenter>
          },
          {
            path:"/login",
            element:<Login></Login>
          },
         {
            path:"/regester",
            element:<Register></Register>
         },
         {
            path:"/profile",
            element:<Profile></Profile>,
         },
         {
            path:"/friend",
            element:<Friends></Friends>
         },
         {
            path:"/people",
            element:<People></People>
         }
         
        ]
    }
])


export default router