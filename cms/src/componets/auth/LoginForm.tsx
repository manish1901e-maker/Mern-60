
import { TextInput } from "../ui/form/input";
import { FormLabel } from "../ui/form/label";
import { FormActionButton } from "../ui/button/FormButtons";
import { NavLink } from "react-router";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";


//regex to make pass stronger
//const strongPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W-_]).{8,25}$/

const LoginDTO = z.object({
    // username: z.email(),
    username: z.string().min(5, "Username must have atleast 5 characters").max(20, "Username should be less than 20 characters"),
    password: z.string().nonempty("Password must not be empty")
    // password: z.string().regex(strongPassword,"Password does not follow strong password policy")
  })
  
  export interface ICrendentials {
    username: string, 
    password: string
  }
  
  export default function LoginForm() {
    const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm<ICrendentials>({
      defaultValues: {
        username: "",
        password: ""
      },
      resolver: zodResolver(LoginDTO)
    })
    
    const handleLogin = async (data: ICrendentials) => {
      try {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // application/json, multipart/form-data(to upload a file), application/x-www-form-urlencoded
            // "Authorization"
          },
          body: JSON.stringify({ ...data, expiresInMins: 180 }),
          // body: JSON.stringify(data),
        });
        if(response.ok) {
          const loginData = await response.json();
          console.log(loginData);
        } else {
          throw response
        }
      } catch (exception){
        console.log({exception})
        toast.error("Error while logging in", {
          description: "Check your credentials before requesting again!!!"
        })
      }
    }
  
    console.log(errors)
  
    return (
      <form onSubmit={handleSubmit(handleLogin)} className="flex w-full gap-5 flex-col">
        <div className="w-full flex flex-col">
          <FormLabel htmlFor="username">User Name:</FormLabel>
          <TextInput name="username" type="text" control={control} errMsg={errors?.username?.message} />
        </div>
  
        <div className="w-full flex flex-col">
          <FormLabel htmlFor="password">Password: </FormLabel>
          <TextInput name="password" type="password" control={control} errMsg={errors?.password?.message}/>
        </div>
  
        <div className="w-full flex justify-end">
          <NavLink
            className="text-sm text-green-700 underline hover:scale-105 hover:text-green-800 transition-all italic"
            to="/forget-password"
          >
            Forget Password?
          </NavLink>
        </div>
  
        <div className="w-full flex gap-3">
          <FormActionButton disabled={isSubmitting} type="reset">Cancel</FormActionButton>
          <FormActionButton disabled={isSubmitting} type="submit">Login</FormActionButton>
        </div>
      </form>
    );
}