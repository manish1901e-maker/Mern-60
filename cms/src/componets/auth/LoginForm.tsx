
import { TextInput } from "../ui/form/input";
import { FormLabel } from "../ui/form/label";
import { FormActionButton } from "../ui/button/FormButtons";
import { NavLink, useNavigate } from "react-router";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import type { ICreateUser } from "../../lib/types/AuthType";
import useAuth from "../../lib/hook/useAuth";

//regex to make pass stronger
//const strongPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W-_]).{8,25}$/

const LoginDTO = z.object({
    username: z.string().min(5, "Username must have atleast 5 characters").max(20, "User name should be less than 20 characters"),
    // password:z.string().regex(strongPassword,"Password doesnt follow strong pass polixy")
    password: z.string().nonempty("Password must not be empty")
})

export interface ICredentials {
    username: string,
    password: string
}
// controlled or uncontrolled components

export default function LoginForm() {

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<ICredentials>({
        defaultValues: {
            username: "",
            password: ""

        },
        resolver: zodResolver(LoginDTO)
    })
    const {login}= useAuth()
    const navigate = useNavigate()
    const handleLogin = async (data: ICredentials) => {
        try {
            const loggedInUserDetail= await login(data) as ICreateUser
            navigate('/' + loggedInUserDetail.role)
        } catch (exception) {
            console.log(exception)
            toast.error("Error while logging in", {
                description: "Please check your data before logging in"
            })
        }

    }
    console.log(errors)
    return (
        <form onSubmit={handleSubmit(handleLogin)} className="flex w-98 p-2 gap-3 flex-col" >
            <div className="w-full flex flex-col">
                <FormLabel htmlFor="username">Username:</FormLabel>


                <TextInput name="username" type="text" control={control} errMsg={errors?.username?.message} />
            </div>

            <div className="w-98 flex flex-col ">
                <FormLabel htmlFor="password">Password:</FormLabel>

                <TextInput name="password" type="password" control={control} errMsg={errors?.password?.message} />

            </div>

            <div className="w-full flex justify-end">
                <NavLink
                    className="text-sm text-green-700 underline hover:scale-105 hover:text-green-800 transition-all italic" to="/forget-password">
                    Forget Password?
                </NavLink>
            </div>
            <div className="w-full flex gap-3">
                <FormActionButton disabled={isSubmitting} type="reset">Cancel</FormActionButton>
                <FormActionButton disabled={isSubmitting} type="submit">Login</FormActionButton>




            </div>

        </form>
    )
}