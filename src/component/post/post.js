import './post.css'
import {MoreVert} from '@material-ui/icons'

export default function post() {
    return (
        <div className='post'>
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postprofileImg' src="/assets/person/1.jpeg" alt="" />
                        <span className="postusername">Safak kocaglu</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>            
                <div className="postCenter"></div>            
                <div className="postBottom"></div>            
            </div>
        </div>
    )
}
