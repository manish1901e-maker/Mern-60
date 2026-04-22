import { useParams, useSearchParams } from "react-router"
import { useEffect } from "react"

export default function UserDetail(){
    const params = useParams()
    
    
    const [query, setQuery]=useSearchParams()
    console.log(query.get('page'), query.get('search'))

    useEffect(()=>{
    setTimeout(()=>{
        setQuery({
            page:'1',
            search: "testKeyword"
            
        })

    }, 3000)
},[])
    return(
        <>
        <p>
            Params :{params.username}
        </p>
        </>
    )
}