import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import axiosInstance from "../../lib/client/axios-client";
import { toast } from "sonner";
import { FormLabel } from "../../componets/ui/form/label";


export default function TodoEdit(){
    const params = useParams<{id:string}>()
    const [loading, setLoading]= useState<boolean>(true)
    const navigate = useNavigate()

    const {control, handleSubmit, formState: {errors}, setValue}= useForm({
        defaultValues: {
            todo:"",
            completed:""
        }
    })

    const submitForm = async (data: {todo:string, completed:string})=>{
        try {
            await axiosInstance.put('/todo/'+params.id, data)
            toast.success ("Todo updated succesfully")
        }catch{
            toast.error ("error while updating todo..")
        }finally{
            navigate("/admin/todo")
        }
    }

    const getTodoDetail = async()=>{
        try{
            const response = await axiosInstance.get('/todo/'+params.id)as{todo: string, completed:boolean}
            setValue('todo', response.todo)
            setValue('completed', response.completed ? 'completed': 'pending')
            setLoading(false)
        }catch{
            toast.error('Error while loading todo')
            navigate('/admin/todo')
        }
    }

    useEffect(()=>{
        return()=>{
            getTodoDetail()
        }
    },[])
    
    return(
        <>
        <section className="bg-white w-full p-5 flex flex-col">
            <div className="flex w-full justify-between items-center">
                <h1 className="text-3xl text-gray-900 font-bold">
                 Todo Edit
                </h1>
            </div>
            <div className = "flex w-full h-175 overflow-y-scrool flex-col">
                {loading ? (
                    <>Loading...</>

                ): (
                    <>
                    <form 
                    onSubmit={handleSubmit(submitForm)}
                    className="flex flex-col w-full g-5"
                    >
                        <div className="w-full flex">
                            <FormLabel className="w-1/3" htmlFor="title">
                            Title
                            </FormLabel>
                            <div className="flex flex-col w-2/3">
                            <Controller
                            control={control}
                            name="todo"
                            render={({field})=> {
                                return(
                                    <>
                                    <input 
                                    type="text"
                                    {...field}
                                    className="w-full border-gray-300 p-2 rounded-md shadow"
                                    />
                                    <span className="text-lg font-semibold text-red-800">
                                        {errors?.todo?.message}
                                    </span>
                                    </>
                                );
                            }}
                            />
                            </div>
                        </div>

                        <div className="w-full flex">
                            <label
                            className="text-xl text-gray-900 font-semibold w-1/3"
                            htmlFor="completed"
                            >
                                Is Completed:{" "}
                            </label>
                            <div className="flex flex-col w-2/3">
                            <Controller
                            control={control}
                            name="completed"
                            render={({field})=>{
                                return(
                                    <>
                                    <select
                                    {...field}
                                    className="w-full border border-gray-300 p-2 rounded-md shadow resize-none"
                                    >
                                    <option value="">--Select any one--</option>
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                    </select>
                                    <span className="text-lg text-red-800 font-semibold">
                                        {errors?.completed?.message}
                                    </span>
                                    </>
                                );
                            }}
                            />
                            </div>
                        </div>
                        <div className="w-full flex gap-5">
                            <button className="w-full flex-1 p-3 items-center justify-center bg-red-800 text-white transition hover:scale-103 hover:cursor-pointer hover:bg-red-900 rounded-md">
                                Cancel
                            </button>
                            <button className="w-full flex-1 p-3 items-center justify-center bg-teal-800 text-white transition hover:scale-103 hover:cursor-pointer hover:bg-teal-900 rounded-md">
                             Submit
                            </button>
                        </div>
                    </form>
                    </>
                )}
            </div>
        </section>
        </>
    )


}