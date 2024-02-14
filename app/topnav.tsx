import Back from "./back"


export default function TopNav() {
    return(
        <div className="w-full h-[15%] fixed bg-red-100 flex">
            <div className="bg-green-100 h-full w-[21.25%]">
                <Back></Back>
            </div>
            <div className="bg-blue-100 h-full w-[42.5%]">
                <div className="flex items-center justify-center align-item w-full h-full">
                    ZOTGOODS
                </div>

            </div>  
            <div className="bg-pink-100 h-full w-[21.25%]">
                
            </div>
        </div>
    )
}