import Image from "next/image";
import Nav from "../nav/nav";



const Banner=(props)=>{
    const {title, subTitle, imgUrl} = props;

    return(
        <>
        <div className=" pt-8 h-auto w-full bg-scroll bg-right bg-cover  bg-no-repeat bg-[url('/static/strangegirl.jpg')]  h-[630px]">
            <Nav/>  
        <div>
        <h1 className="ml-32 text-8xl font-bold text-white mt-44 hover:text-red-400">{title}</h1>
        <p className=" ml-32 text-2xl pt-2 text-white">{subTitle}</p>
        <div className="py-8 ml-32"><button  className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 ... shadow-lg shadow-white ... text-white bg-red-700 hover:bg-red-300 rounded-lg text-2xl px-4 py-2">Watch</button>
        </div></div>
        </div>
        <div>


        </div>

       
        
        
        
        </>
    )


};


export default Banner;