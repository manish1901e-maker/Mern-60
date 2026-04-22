import { Icon } from "@iconify/react";
import { SubHeading } from "../../componets/ui/typography/Title";
import { NavLink } from "react-router";

export default function NotFound ({
   url="/", 
   linkText="Go Back",
}
   :Readonly<{url?:string, linkText?:string}>){
    return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-200">
       <div className="bg-white w-full lg:w-5xl p-10 rounded-lg shadow-2xl shadow-red-100 ">
          <div className="flex w-full items-center justify-center flex-col gap-5">
             <Icon 
             icon={"material-symbols:warning-sharp"} 
             className="size-20 text-red-800"/>
             <SubHeading className="text-red-500 shadow-amber-400">404 — page MIA</SubHeading>

             <p className="text-center text-red-950 font-semibold max-w-md text-lg leading-relaxed">
               The page you want doesn&apos;t exist. We checked behind the server, under the database, and in the break room — nothing. Either the link is a typo, or this corner of the internet is still under construction and the builders forgot to leave a note.
             </p>

             <NavLink to={url} className={"w-full p-3 flex icon-center justify-center border border-red-800 rounded-full text-lg font-semibold hover:bg-red-50 hover:scale-98 transition duration-300"}>
              <Icon icon={"ic:round-arrow-back"} className="text-red-800 size-4"/>{linkText}
             </NavLink>

          </div>
        </div>
    </section>)
}