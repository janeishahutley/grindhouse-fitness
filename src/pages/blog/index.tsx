import Link from "next/link"
import { api } from "no/utils/api"

export default function BlogPage() {

    const videos = api.video.getVideos.useQuery();
    const blogIds: number[] = [1,2,3,4]

    console.log(videos)

    // TODO: show the videos from the api call

    return (
        <div>
            <h1>Welcome to blog page</h1>
            {blogIds.map(id => <Link key={id} href={`blog/${id}`}>Blog {id}</Link>)}
            {/* <div>
                {video.map((vid) => (
                    <>
                        <p>vid</p>
                    </>
                ))}
            </div> */}
        </div>
    )
}