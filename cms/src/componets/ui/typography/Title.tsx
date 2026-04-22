import type { ReactNode } from "react"

interface IPageheadingProps{
    pageTitle?: string | null
    className?: string
    children?: ReactNode
}

export const PageHeading=({
    pageTitle=null, 
    className=' text-shadow-lg text-indigo-950',
     children,
    }: Readonly<IPageheadingProps>)=> {
    //const pageTitle = "Login Here";
    return (
      <h1 className={`text-4xl font-semibold ${className}`}>{
         pageTitle ?? children 
    }</h1>
)
}

export const SubHeading=({
    pageTitle=null, 
    className=' text-shadow-lg text-indigo-950',
     children,
    }: Readonly<IPageheadingProps>)=> {
    
    return (
        <h2 className={`text-3xl font-semibold ${className}`}>{
           pageTitle ?? children }
      </h2>
  )

}