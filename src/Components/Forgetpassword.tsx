import React from 'react'

const Forgetpass=():JSX.Element=>{
          return (
                    
  <div className="flex items-center justify-center min-h-screen bg-gray-100  w-full max-[600px]:min-h-0">
     
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-1/2 max-[600px]:w-full">
          <h2 className="text-2xl font-bold text-center">
              Change Password
          </h2>
          <form className="mt-4 flex w-full flex-col space-y-4 lg:mt-5 md:space-y-5 text-black" action="#">
              <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 text-black">Your email</label>
                  <input type="email" name="email" id="email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
              <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 text-black">New Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 "/>
              </div>
              <div>
                  <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm password</label>
                  <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              </div>
              <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="newsletter" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-black" href="#">Terms and Conditions</a></label>
                  </div>
              </div>
              <button type="submit" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900 w-fit m-auto">Reset passwod</button>
          </form>
      </div>
  </div>


          )

}
export default Forgetpass