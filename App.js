import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home"
import Register from "./Components/Register/Register"
import ProductDetails from "./Components/ProductDetails/ProductDetails"
import Cart from "./Components/Cart/Cart";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import Login from "./Components/Login/Login";
import AuthContextProvider from "./Contexts/AuthContext/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoute";
import AuthProtectedRoute from "./Components/ProtectedRoutes/AuthProtectedRoute";
import { ToastContainer } from "react-toastify";
import AddProductToCartProvider, { AddToCartContext } from "./Contexts/AddToCartContext/AddToCartContext";
import Adress from "./Components/Adress/Adress";
import Allorders from "./Components/Allorders/Allorders";
import CartContextProvider from "./Contexts/CartContext/CartContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Products from "./Components/Products/Products";
import CategoriesDetails from "./Components/Categories/CategoriesDetails";
import BrandsDetails from "./Components/Brands/BrandsDetails";
import WishList from "./Components/wishlist/WishList";
import AddProductToWishListProvider from "./Contexts/AddToWishListContext/AddToWishListContext";
import ForgetPassword from "./Components/Forget&ResetPassword/ForgetPassword";
import ResetPassword from "./Components/Forget&ResetPassword/ResetPassword";
import NewPasswordAfterReset from "./Components/Forget&ResetPassword/NewPasswordAfterReset";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import WishListContextProvider from "./Contexts/WishListContext/WishListContext";
import Profile from "./Components/Profile/Profile";
import UpdateProfile from "./Components/Profile/UpdateProfile";
import UpdateUserDataCProvider from "./Contexts/UpdateUserData/UpdateUserData";
import GetLoggedUserAdress from "./Contexts/getLoggedUserAdress/GetLoggedUserAdress";
import GetLoggedUserAdressProvider from "./Contexts/getLoggedUserAdress/GetLoggedUserAdress";
import AddNewAdress from "./Components/Adress/AddNewAdress";



function App() {
  
  const queryClient= new QueryClient()
  const routers = createHashRouter([
    {
      path:"",
      element:<Layout/>, 
      children: [
        {path:"/logIn",element: <AuthProtectedRoute> <Login/> </AuthProtectedRoute>  }, 
        {path:"/forgetPassword",element: <AuthProtectedRoute> <ForgetPassword/> </AuthProtectedRoute>  }, 
        {path:"/resetPassword",element: <AuthProtectedRoute> <ResetPassword/> </AuthProtectedRoute>  }, 
        {path:"/newPasswordAfterReset",element: <AuthProtectedRoute> <NewPasswordAfterReset/> </AuthProtectedRoute>  }, 
        {path:"/Register",element:<AuthProtectedRoute> <Register/> </AuthProtectedRoute> },
        
       {path:"/profile",element: <ProtectedRoute> <Profile/>  </ProtectedRoute> },
       {path:"/",element: <ProtectedRoute> <Navigate to='/home'/> </ProtectedRoute> },
       {path:"/home",element: <ProtectedRoute> <Home/> </ProtectedRoute> },
       {path:"/cart",element: <ProtectedRoute> <Cart/> </ProtectedRoute>  },
       {path:"/adress/:cartId",element: <ProtectedRoute> <Adress/> </ProtectedRoute>  },
       {path:"/addNewAdress",element: <ProtectedRoute> <AddNewAdress/> </ProtectedRoute>  },
       {path:"/allorders",element: <ProtectedRoute> <Allorders/> </ProtectedRoute>  },
       {path:"/products",element: <ProtectedRoute> <Products/> </ProtectedRoute> },
       {path:"/productDetails/:id",element: <ProtectedRoute> <ProductDetails/> </ProtectedRoute>  },
       {path:"/categories",element: <ProtectedRoute> <Categories/> </ProtectedRoute>  },
       {path:"/categoriesDetails/:id",element: <ProtectedRoute> <CategoriesDetails/> </ProtectedRoute>  },
       {path:"/brands",element: <ProtectedRoute> <Brands/> </ProtectedRoute>  },
       {path:"/brandsDetails/:id",element: <ProtectedRoute> <BrandsDetails/> </ProtectedRoute>  },
       {path:"/wishList",element: <ProtectedRoute> <WishList/> </ProtectedRoute> },
       {path:"*",element:  <PageNotFound/> },





    ],
  },
  ]

  );
  return (<>
        <QueryClientProvider client={queryClient} >
       <AuthContextProvider>
       
        <UpdateUserDataCProvider>
         <CartContextProvider>
          <WishListContextProvider>
        <AddProductToCartProvider>
          <AddProductToWishListProvider>
      <RouterProvider router={routers}></RouterProvider>
      </AddProductToWishListProvider>
      </AddProductToCartProvider>
      </WishListContextProvider>
      </CartContextProvider>
      </UpdateUserDataCProvider>

    </AuthContextProvider>
    <ToastContainer />
    <ReactQueryDevtools position="bottom-right"/>
    </QueryClientProvider>
 </> 
 );
}

export default App;
