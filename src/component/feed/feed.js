import Share1 from '../share/share.js'
import Post from '../post/post.js'
import './feed.css'

export default function Feed() {
    return (
        <div className='feed'>
            <div className="feedwrapper">
            <Share1 />   
            <Post />
            </div>
        </div>
    )
}
