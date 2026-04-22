import { Outlet } from "react-router";

export default function UserLayout (){
    return(
        <section className="w-full h-screen flex flex-col">
        <header className="p-5 bg-gray-950 text-white text-center">
            Header block
            </header>
        <section className="w-full flex gap-5">
            <aside className="bg-gray-800 w-100 text-white flex p-5">
                 Sidebar Block
                  </aside>
            <section className="w-full">
                {/* DYnamic data*/ }
                
                <Outlet/>
            </section>
        </section>
        <footer className="bg-gray-950  text-white flex w-full p-3 text-center">
            Footer
        </footer>
</section>



    
    )
}