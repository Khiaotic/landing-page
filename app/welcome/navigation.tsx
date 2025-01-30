import React from "react";


export default function Nav() {
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpenNav(false),
//     );
//   }, []);
//   const navList = (
//     <ul className="my-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       < a href="#" className="flex items-center ">
//       WTF
//       </a>
//     </ul>
    // );
  return (
    <div className="flex flex-col">
        <ul className="my-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <a href="#" className="flex items-center font-FACT font-bold text-green">
                About
            </a>
            <a href="#" className="flex items-center font-FACT font-bold text-green">
                Technique
            </a>
            <a href="#" className="flex items-center font-FACT font-bold text-green">
                Data Analysis
            </a>
            <a href="#" className="flex items-center font-FACT font-bold text-green">
                Results
            </a>
            <a href="#" className="flex items-center font-FACT font-bold text-green">
                Socials
            </a>
        </ul>
         </div>
    
  )
}