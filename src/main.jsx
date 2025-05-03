import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Component/Routes/Router';
import Authprobider from './Authentication/Provider/Authprobider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprobider>
      <RouterProvider router={router} />
    </Authprobider>

  </StrictMode>,
)
