import React from 'react'
import {useNavigate} from 'react-router-dom'







const Form=():JSX.Element =>{
          const navigate = useNavigate()
          const[currentstate,setCurrentstate] = React.useState<{step1:boolean,step2:boolean,step3:boolean,step4:boolean,step5:boolean,step6:boolean}>({step1:true,step2:false,step3:false,step4:false,step5:false,step6:false})


          
 

 
 
         
 

 
 


  return (
         
          <div className="form">
                    <div className="mt-8">
      <h2
        className="
          mb-4
          text-2xl
          font-bold
          text-center text-gray-800
          lg:text-3xl
          md:mb-6
        "
      >
        Application form
      </h2>

      <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
        Please fill in the details below so that we can get in contact with you.
      </p>
    </div>
    <div className="text-gray-600">
      <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto">
        <div className="flex flex-wrap mx-auto">
          <a
            className={` inline-flex
            items-center
            justify-center
            w-1/2
            py-3
            font-medium
            leading-none
            tracking-wider
            
            
            border-b-2 ${currentstate.step1?'border-indigo-500':'border-gray-200'}
            sm:px-6 sm:w-auto sm:justify-start
            title-font
            hover:text-gray-900
            m-2
            max-[600px]:w-full`}
             
            
          >
            Personal details
          </a>
          <a
            className={`
              inline-flex
              items-center
              justify-center
              w-1/2
              py-3
              font-medium
              leading-none
              tracking-wider
              border-b-2 ${currentstate.step2?'border-indigo-500':'border-gray-200'}
              sm:px-6 sm:w-auto sm:justify-start
              title-font
              hover:text-gray-900
              m-2
              max-[600px]:w-full
            `}
          >
            Address
          </a>
          <a
            className={`
              inline-flex
              items-center
              justify-center
              w-1/2
              py-3
              font-medium
              leading-none
              tracking-wider
              border-b-2 ${currentstate.step3?'border-indigo-500':'border-gray-200'}
              sm:px-6 sm:w-auto sm:justify-start
              title-font
              hover:text-gray-900
              m-2
              max-[600px]:w-full
            `}
          >
            Profile image
          </a>
          <a
            className={`
              inline-flex
              items-center
              justify-center
              w-1/2
              py-3
              font-medium
              leading-none
              tracking-wider
              border-b-2 ${currentstate.step4?'border-indigo-500':'border-gray-200'}
              sm:px-6 sm:w-auto sm:justify-start
              title-font
              hover:text-gray-900
              m-2
              max-[600px]:w-full
            `}
          >
            Portfolio
          </a>
          <a
            className={`
              inline-flex
              items-center
              justify-center
              w-1/2
              py-3
              font-medium
              leading-none
              tracking-wider
              border-b-2 ${currentstate.step5?'border-indigo-500':'border-gray-200'}
              sm:px-6 sm:w-auto sm:justify-start
              title-font
              hover:text-gray-900
              m-2
              max-[600px]:w-full
            `}
          >
            Status
          </a>
        </div>
        <div className="flex flex-col w-full text-center">
          <div className="py-6 bg-white sm:py-8 lg:py-12">
            <div className={`px-4 mx-auto max-w-screen-2xl md:px-8 ${currentstate.step1?'':'hidden'}`}>
              {/*--- form1 - start --*/}
              <form className="max-w-screen-md mx-auto">
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="name"
                    className="inline-flex mb-2 text-sm text-gray-800"
                    >Please enter your name</label>
                  <input
                    name="name"
                    className="
                      w-full
                      px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600
                    "
                    type='text'
                  />
                </div>
                <div className="flex flex-col mb-2">
                  <label
                    htmlFor="email"
                    className="inline-flex mb-2 text-sm text-gray-800"
                    >Please enter your e-mail</label>
                  <input
                    name="email"
                    className="
                      w-full
                      px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600
                    "
                    type='email'
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="phone"
                    className="inline-flex mb-2 text-sm text-gray-800"
                    >Please enter a phone number</label>
                  <input
                    name="phone"
                    className="
                      w-full
                      px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600
                    "
                    type='number'
                  />
                </div>

                
              

                <div className="flex items-center justify-between">
                  <button disabled
                    className="
                      inline-flex
                      items-center
                      px-6
                      py-2
                      text-sm text-gray-800
                      rounded-lg
                      shadow
                      outline-none
                      gap-x-1
                      hover:bg-gray-100
                    "
                  >
                    <svg
                     
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      /></svg>Back
                  </button>
                  <button onClick={(e)=>{
                    e.preventDefault()
                    setCurrentstate({...currentstate,step1:false,step2:true})
                  }}
                    className="
                      px-6
                      py-2
                      text-sm text-white
                      bg-indigo-500
                      rounded-lg
                      outline-none
                      hover:bg-indigo-600
                      ring-indigo-300
                    "
                  >
                    Next
                  </button >
                </div>
              </form>
              {/*--- form1 - end --*/}
            </div>
            <div className={`px-4 mx-auto max-w-screen-2xl md:px-8 ${currentstate.step2?'':'hidden'}`}>
              {/*--- form2 - start --*/}
              <form className="max-w-screen-md mx-auto">
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="address"
                    className="inline-flex mb-2 text-sm text-gray-800"
                    >Address line 1</label>
                  <textarea
                    name="address1"
                    className="
                      w-full
                      px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600
                    "
                  />
                </div>

                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="address2"
                    className="inline-flex mb-2 text-sm text-gray-800"
                    >Address line 2</label>
                  <textarea
                    name="address2"
                    className="
                      w-full
                      px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600
                    "
                    
                  />
                </div>

                <div className="flex flex-col mb-2">
                  <label
                    htmlFor="city"
                    className="inline-flex mb-2 text-sm text-gray-800"
                    >City</label>
                  <input
                    name="city"
                    className="
                      w-full
                      px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600
                    "
                  />
                </div>

                <div className="flex flex-col mb-2">
                  <label
                    htmlFor="state"
                    className="inline-flex mb-2 text-sm text-gray-800"
                    >State</label>
                  <input
                    name="state"
                    className="
                      w-full
                      px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600
                    "
                  />
                </div>
              
                <div className="flex flex-col mb-2">
                  <label
                    htmlFor="pincode"
                    className="inline-flex mb-2 text-sm text-gray-800"
                    >Pincode</label>
                  <input
                    name="pincode"
                    className="
                      w-full
                      px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600
                    "
                  />
                </div>

                <div className="flex flex-col mb-2">
                  <label
                    htmlFor="country"
                    className="inline-flex mb-2 text-sm text-gray-800"
                    >Country</label>
                  <input
                    name="country"
                    className="
                      w-full
                      px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600
                    "
                  />
                </div>
              
              
              

                <div className="flex items-center justify-between">
                  <button 
                    className="
                      inline-flex
                      items-center
                      px-6
                      py-2
                      text-sm text-gray-800
                      rounded-lg
                      shadow
                      outline-none
                      gap-x-1
                      hover:bg-gray-100
                    " onClick={()=>{
                              setCurrentstate({...currentstate,step2:false,step1:true})
                            }}
                  >
                    <svg
                      
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      /></svg>Back
                  </button>
                  <button onClick={(e)=>{
                    e.preventDefault()
                    setCurrentstate({...currentstate,step2:false,step3:true})
                  }}
                    className="
                      px-6
                      py-2
                      text-sm text-white
                      bg-indigo-500
                      rounded-lg
                      outline-none
                      hover:bg-indigo-600
                      ring-indigo-300
                    "
                  >
                    Next
                  </button>
                </div>
              </form>
              {/*--- form2 - end --*/}
            </div>




            <div className={`px-4 mx-auto max-w-screen-2xl md:px-8 ${currentstate.step3?'':'hidden'}`}>
              {/*--- form3 - start --*/}
              
<div className=" w-1/2 m-auto flex flex-col items-center justify-center w-full">
    <label htmlFor="file1" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer text-dark bg-white dark:border-gray-600  ">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, PDF</p>
        </div>
        <input id="file1" type="file" name='file1' className="hidden" accept='.png,.pdf' />
    </label>
    <div className="w-full flex items-center justify-between my-2">
                  <button onClick={()=>{
                    setCurrentstate({...currentstate,step3:false,step2:true})
                  }}
                    className="
                      inline-flex
                      items-center
                      px-6
                      py-2
                      text-sm text-gray-800
                      rounded-lg
                      shadow
                      outline-none
                      gap-x-1
                      hover:bg-gray-100
                    "
                  >
                    <svg
                      
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      /></svg>Back
                  </button>
                  <button onClick={()=>{
                    setCurrentstate({...currentstate,step3:false,step4:true})
                  }}
                    className="
                      px-6
                      py-2
                      text-sm text-white
                      bg-indigo-500
                      rounded-lg
                      outline-none
                      hover:bg-indigo-600
                      ring-indigo-300
                    "
                  >
                    Next
                  </button>
                </div>
</div> 

              {/*--- form3 - end --*/}
            </div>



            <div className={` px-4 mx-auto max-w-screen-2xl md:px-8 ${currentstate.step4?'':'hidden'}`}>
              {/*--- form4- start --*/}
            <div className=" w-1/2 m-auto flex flex-col items-center justify-center w-full">
                    <p className='my-2'>Select upto 5 files</p>
    <label htmlFor="file2" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer text-dark bg-white dark:border-gray-600  ">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG, PDF</p>
        </div>
        <input id="file2" name='file2' type="file" multiple className="hidden" accept='.png,.pdf' />
    </label>
    <div className="w-full flex items-center justify-between my-2">
                  <button onClick={()=>{
                    setCurrentstate({...currentstate,step4:false,step3:true})
                  }}
                    className="
                      inline-flex
                      items-center
                      px-6
                      py-2
                      text-sm text-gray-800
                      rounded-lg
                      shadow
                      outline-none
                      gap-x-1
                      hover:bg-gray-100
                    "
                  >
                    <svg
                    
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      /></svg>Back
                  </button>
                  <button onClick={()=>{
                    setCurrentstate({...currentstate,step4:false,step5:true})
                  }}
                    className="
                      px-6
                      py-2
                      text-sm text-white
                      bg-indigo-500
                      rounded-lg
                      outline-none
                      hover:bg-indigo-600
                      ring-indigo-300
                    "
                  >
                    Next
                  </button>
                </div>
</div> 
              {/*--- form4 - end --*/}
            </div>
            <div className={`w-1/2 m-auto px-4 mx-auto max-w-screen-2xl md:px-8 ${currentstate.step5?'':'hidden'}`}>
            <div className=" flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" name='' value="" required className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-black ">Accept all the tearms and conditions</label>
</div>
              <div className="w-full flex items-center justify-between my-2">
                  <button onClick={()=>{
                    setCurrentstate({...currentstate,step5:false,step4:true})
                  }}
                    className="
                      inline-flex
                      items-center
                      px-6
                      py-2
                      text-sm text-gray-800
                      rounded-lg
                      shadow
                      outline-none
                      gap-x-1
                      hover:bg-gray-100
                    "
                  >
                    <svg
                    
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      /></svg>Back
                  </button>
                  <button onClick={async(e)=>{
                    e.preventDefault()
                    await alert('Do you want to submit?')
                    setCurrentstate({...currentstate,step5:false,step6:true})


                  }}
                    className="
                      px-6
                      py-2
                      text-sm text-white
                      bg-indigo-500
                      rounded-lg
                      outline-none
                      hover:bg-indigo-600
                      ring-indigo-300
                    "
                  >
                    Submit
                  </button>
                </div>
            </div>
            <div className={`px-4 mx-auto w-full h-full flex item-center justify-center text-3xl text-green-500 ${currentstate.step6?'':'hidden'}`}>
                    Succsessfully submitted
              
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
          
  )
}

export default Form
