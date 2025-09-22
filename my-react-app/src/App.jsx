import React from 'react'
// import { BrowserRouter,useRoutes } from 'react-router-dom'
// import ProductList from './component/ProductList'
// import Car from './component/Car'
// import Home from './component/HomePage'
// import Navbar from './component/Navbar'
import Count from './component/Counter'

// const AppRoutes = ()=>{
//   let route = useRoutes([
//     {path:'/', element:<Home />},
//     {
//       path:'/navbar', element:<Navbar />,
//         children:[
//           {path:'car',element:<Car />},
//           {path:'productList', element:<ProductList />}
//         ]
//     }
//   ]);
//   return route;
// }

function App() {
  return (
  //  < BrowserRouter >
  //     <AppRoutes />
  //     <Counter />
  //  </BrowserRouter>
  <div>
    <Count />
  </div>
  )
}

export default App