import React from 'react';
import { Link } from 'react-router-dom';
import { getCookie, setCookie } from 'typescript-cookie'
import axios from 'axios'
const Login =():JSX.Element=>{
          const[formdata,setformdata]=React.useState<{email:string,password:string}>({email:"",password:""})
          

          const login=(e:any)=>{
                    axios.post('https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/',formdata).then((res)=>{
                              if(res.status===200){
                                        e.preventDefault()
                    setCookie('logtoken','logged in')
                    

                              }
                              else{
                                        alert('Wrong credentials')
                              }

                    }).catch((e)=>{
                              console.log(e)
                    })
                    



          }
          const change =(e:any)=>{
                    setformdata({...formdata,[e.target.name]:e.target.value})
          }


          return (
      
      <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full max-[600px]:min-h-fit ">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg max-[600px]:py-1">
          <h3 className="text-2xl font-bold text-center">Login to your account</h3>
          <form action="" onSubmit={login}>
            <div className="mt-4">
              <div>
                <label htmlFor="email"></label>
                <input type="text" placeholder="Email" name='email'
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={change} />
              </div>
              <div className="mt-4">
                <label htmlFor="password"></label>

                <input type="password" placeholder="Password" name='password'
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={change} />
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" >Login</button>
                <Link to="/forgetpassword" className="text-sm text-blue-600 hover:underline">Forgot password?</Link>
              </div>
            </div>
          </form>
        </div>
      </div>

    )
}
export default Login