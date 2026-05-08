import { zodResolver } from "@hookform/resolvers/zod"
import useAuth from "../../lib/hook/useAuth"
import { useNavigate } from "react-router"
import axiosInstance from "../../lib/client/axios-client"
import { toast } from "sonner"
import { FormLabel } from "../../componets/ui/form/label"
import { Controller, useForm } from "react-hook-form"
import z from "zod"


const TodoDTO = z.object({
    title : z.string().nonempty().nonoptional(),
    description:z.string().nonempty().nonoptional(),
    status:z.string().nonempty().nonoptional(),
})
type TodoData= z.infer<typeof TodoDTO>
export default function TodoCreate(){
    const {control, handleSubmit, formState: {errors}}= useForm<TodoData>({
        defaultValues:{
            title:"",
            description:"",
            status:""
        },
        resolver:zodResolver(TodoDTO)
    })
    const { loggedInUserDetails }= useAuth()
    const navigate = useNavigate()

    const submitForm = async (data: TodoData)=>{
        try{
            await axiosInstance.post("/todos/add", {
                todo: data.title,
                completed: false,
                userId:loggedInUserDetails?.id,
            });
            toast.success("Todo has been created and assigned")
            navigate("/admin/todo")
        }catch(exception){
            console.log(exception)      
            }
        }
        return(
            <>
            <section className="bg-white w-full p-5 flex flex-col fap-5">
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-3xl text-gray-900 font-bold">Todo Create</h1>
                </div>

                <div className="flex w-full">
                    <form
                    onSubmit={handleSubmit(submitForm)}
                    className="flex flex-col w-full gap-5"
                    >
                        <div className="w-full flex">
                            <FormLabel className="w-1/3" htmlFor="title">
                            Title
                            </FormLabel>
                            <div className="flex flex-col w-2/3">
                            <Controller
                            control={control}
                            name="title"
                            render={({field})=>{
                            return(
                                <>
                                <input 
                                type="text"
                                {...field}
                                className="w-full border border-gray-300 p-2 rounded-md shadow"
                                />
                                <span className="text-lg font-semibold text-red-800">{errors?.title?.message}</span>
                                </>
                            );
                            }}
                            />
                            </div>
                        </div>
                        <div className="w-full flex">
                            <FormLabel className="w-1/3" htmlFor="description">
                            Description
                            </FormLabel>
                            <div className="flex flex-col w-2/3">
                            <Controller
                            control={control}
                            name="description"
                            render={({field})=>{
                                return(
                                    <>
                                    <textarea
                                    rows={5}
                                    {...field}
                                    className="w-full border-gray-300 p-2 rounded-md shadow resize-none"
                                    ></textarea>
                                    <span className="text-lg font-semibold text-red-800">
                                        {errors?.description?.message}
                                    </span>
                                    </>
                                )
                            }}
                           />
                            </div>
                        </div>
                        <div className="w-full flex">
                        <label
                        className="text-xl text-gray-900 font-semibold w-1/3" htmlFor="status"
                        >
                            Status:{""}
                        </label>
                        <div className="flex flex-col w-2/3">
                        <Controller 
                        control={control}
                        name="status"
                        render={({field})=>{
                            return(
                                <>
                                <select
                                {...field}
                                className="w-full border border-gray-300 p-2 rounded-md shadow resize-none"
                                >
                                <option value="">--select any one--</option>
                                <option value="pending">Pending</option>
                                <option value="inprogress">In-progress</option>
                                <option value="completed">Completed</option>
                                <option value="cancelled">Canclled</option>                                    
                                </select>
                                <span className="text-lg text-red-800 font-semibold">{errors?.status?.message}</span>
                                </>
                            );
                        }}
                        />

                        </div>
                        </div>
                        <div className="w-full flex flex-gap-5">
                            <button className="w-full flex-1 p-3 items-center jusify-center bg-read-800 text-white transition hover:scale-103 hover:cursor-pointer hover:bg-red-900 rounded-md">
                                Cancel
                            </button>
                            <button className="w-full flex-1 p-3 items-center justify-center bg-teal-800 text-white transition hover:scale-103 hover:cursor-pointer hover:bg-teal-900 rounded-md">
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </section>
            </>
        )
    }

