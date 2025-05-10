import { colorTheme } from "../../style/theme"

 const Dot = ({active})=>{
    return (
        <span style={{
            padding:"0px 9px",
            margin : "0 5px",
            cursor:"pointer",
            borderRadius:"50%",
            backgroundColor:`${active ? colorTheme.woodBrown.main : colorTheme.greenleft.main}`
        }}>
        </span>
    )
} 

export const Dots = ({content,index})=>{
    return(
        <div style={{mt:2}}>
       {content.map((item,i)=>(
        <Dot key={item.projectId} active={index === i}/>
       ))}
        </div>
    )
}
