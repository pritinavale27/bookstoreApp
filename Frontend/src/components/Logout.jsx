import React from 'react'
import { useAuth } from '../../Context/Authprovider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null,
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successfully")
            
            setTimeout(()=>{
            // document.getElementById("my_modal_3").close();
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 3000);
        } catch (error) {
            toast.error("Erroe: " + error)
            setTimeout(() => {}, 2000);
            
        }
    }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
      onClick={handleLogout}>Logout
      </button>
    </div>
  )
}

export default Logout
