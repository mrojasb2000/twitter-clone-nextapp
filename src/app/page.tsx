import Leftsidebar from "@/components/LeftSiderbar"

const LeftSiderbar = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
        <div className="max-w-screen-xl w-full h-full flex relative">
            <Leftsidebar />
            <main className="ml-[275px] p-6 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
              <h1 className="text-xl font-bold">Home</h1>
              <div className="border-t-[0.5px] border-b-[0.5px] border-gray-600 h-32 relative">
                <div className="w-10 h-10 bg-sñate-400 rounded-full"></div>
                <div className="flex flex-col">
                  <div className="border-b-[0.5px]">
                    <input type="text" className="w-full h-full bg-transparent outline-none border-none" placeholder="What's happening"/>
                  </div>
                  <div className="w-full justify-between items-center flex">
                    <div></div>
                    <div>
                    <button className='rounded-full m-4 bg-sky-500 px-6 py-4 text-2xl text-center hover:bg-opacity-70 transition duration-200'>
                      Tweet
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
        </div>
    </div>  
  )
}

export default LeftSiderbar