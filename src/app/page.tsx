import Leftsidebar from "@/components/LeftSiderbar"

const LeftSiderbar = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
        <div className="max-w-screen-xl w-full h-full flex relative">
            <Leftsidebar />
        </div>
    </div>  
  )
}

export default LeftSiderbar