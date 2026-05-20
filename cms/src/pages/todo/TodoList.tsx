import { toast } from "sonner"
import axiosInstance from "../../lib/client/axios-client"
import { useEffect, useState, type BaseSyntheticEvent } from "react"
import { Icon } from "@iconify/react"
import { NavLink } from "react-router"



interface ISingleTodo{
    id:number, todo:string, completed:boolean, userId:number 
}

export default function TodoList () {
    const [todoList, setTodoList]= useState<Array<ISingleTodo>>()

    // list out all the data
    const getAllTodoList = async()=> {
        try {
            const response= await axiosInstance.get('/todo') as {todos: Array <ISingleTodo>}
            setTodoList(response.todos)
        }catch {
            toast.error("Error while fetching todo list")
        }
    }

    // to delete data
    const deleteData = async (id:number)=>{
    try{
        const result = await Swal.fire({
            title : "are you sure?",
            text: "You wont be able to revert this",
            icon:"warning",
            showCancelButton: true,
            confirmButtonColor:"#3085d6",
            cancleButtonColor:"#d33"
            confirmButtonText:"Yes, delete it!",
        })
        if(XPathResult.isConfirmed){
            await axiosInstance.delete('/todo/'+id);
            toast.success("Todo Deleted Successfully.")
            // Uncomment this for custom api server
        // await getAllTodoList()
        // Remove this for custom api
        if(todoList){
            const allTodos= todoList.filter((row:ISingleTodo)=> row.id !== id);
            setTodoList([...allTodos]);
        }
        }
    }catch{
        toast.error("Error while deleting todo")
    }
}
useEffect(()=>{
    return()=>{
        getAllTodoList()

    }
},[])
return(
    <>
    <section className="bg-white w-full p-5 flex flex-col gap-5">
        <div className="flex w-full justify-between items-center">
            <h1 className="text-3xl text-gray-900 font-bold">Todo List</h1>
            <NavLink
            className={"bg-teal-800 text-white p-2 w-50 text-center rounded-md hover:underline transition hover:scale-103"

            }
            to="/admin/todo/create"
            >
                Add Todo List
            </NavLink>
        </div>
        <div className="flex w-full h-175 overflow-y-scroll flex-col">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="bg-gray-900 text-white border border-r-gray-400 p-3">
                            Todo
                        </th>
                        <th className="bg-gray-900 text-white border border-r-gray-400 p-3">
                            User
                        </th>
                        <th className="bg-gray-900 text-white border border-r-gray-400 p-3">
                            Status
                        </th>
                        <th className="bg-gray-900 text-white border border-r-gray-400 p-3">
                            #
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {todoList &&
                    todoList.map((row: ISingleTodo, index: number)=>{
                        return(
                            <tr key={index}>
                                <td className="border border-gray-900 p-3">{row.todo}</td>
                                <td className="border border-gray-900 p-3">
                                    {row.userId}
                                </td>
                                <td className="border border-gray-900 p-3">
                                    {row.completed ? "Completed" : "Pending"}
                                </td>
                                <td className="border border-gray-900 p-3">
                                    <div className="flex gap-3">
                                        <a
                                        href=""
                                        className="bg-amber-900 text-white flex justify-center items-center size-10 rounded-full text-sm transition hover:scale-103 hover:bg-amber-950"
                                        >
                                            <Icon icon={"fa:eye"} />
                                        </a>
                                        <NavLink
                                        to={'/admin/todo'.row.id+'/edit'}
                                        className="bg-sky-900 text-white flex justify-center items-center size-10 rounded-full text-sm transition hover:scale-103 hover:bg-sky-950"
                                        >
                                            <Icon icon={"fa:pencil"} />
                                        </NavLink>
                                        <a
                                        href=""
                                        onClick={(ev:BaseSyntheticEvent)=>{
                                            ev.preventDefault()
                                            deleteData(row.id)
                                        }}
                                        className="bg-red-900 text-white flex justify-center items-center size-10 rounded-full text-sm transition hover:scale-103 hover:bg-red-950"
                                        >
                                            <Icon icon={"fa:trash"} />
                                        </a>
                                    </div>
                                </td>
                                </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <div>pagination</div>
    </section>
    </>
)
}