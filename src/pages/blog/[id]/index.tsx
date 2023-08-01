import { useRouter } from "next/router"
import data from "../../../data/data.json"
export default function BlogId() {
    const router = useRouter()

    /*
    
    TODO: look up reverse map

    [abc23] [def3]

    const blogMap = {
       'abc23': {title, author} 
    }

    blogMap[id]

     */



    //
    const map: Record<string, any[]> = data.blogPosts.reduce((acc : Record<string, any>, cur) => {
        cur.tags.forEach((tag: string) =>{
            if(acc[tag]){
                if(Array.isArray(acc[tag])){
                    // eslint-disable-next-line
                    acc[tag]?.push?.(cur)
                }
               
            }else{
                acc[tag] = [cur]
            }   
        })
        return acc
    }, {})

    console.log({map})

    const findByTag = (tag: string) => {
        
        return data.blogPosts.filter((blog) => {
            return blog.tags.includes(tag)
        })
    }

    console.log(findByTag('State Management'))
 
   const blogPost = data.blogPosts.find(item => item.id === router.query.id )
   if(!blogPost) {
    return <p>Page not found</p>
   }
    return (
        <div>
            <p>{blogPost?.author}</p>
            <p>{blogPost?.title}</p>
            <p>{blogPost?.content}</p>
        
        </div>



    )
}