import LoginForm from "../../componets/auth/LoginForm";
import { PageHeading } from "../../componets/ui/typography/Title";
import logo from "../../assets/images/logo.png";

export default function HomePage() {
    
    return(
        <section className="bg-gray-100 w-full h-screen flex items-center justify-center">
            <div className="w-1/3 bg-white shadow-lg flex flex-col gap-5 rounded-md p-5">
             <div className="flex w-full flex-col gap-5 items-center justify-center">
               <div className="w-25">
                 <img 
                 src={logo} 
                 alt="logo" 
                 className="rounded-full"
                 />
                </div>
                <PageHeading className='text-teal-900'>
                <em> Login Here </em>
                </PageHeading>
                
             </div>
            <div>


    
                <LoginForm /> 
            </div>
            </div>
        </section>
    )
}