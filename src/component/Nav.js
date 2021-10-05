import React,{useState} from 'react'
import "./Nav.css"
function Nav() {
 const [show,endshow] = useState(false);

    const count = () =>{
        if(window.scrollY > 150){
            endshow(true);
        }else{
            endshow(false);
        }
        
    }
    
    window.addEventListener("scroll",count)
   
    
    return (
        <div className={`nav ${show === true && 'nav-black'}`}> 
        {/* //다시 복습을 해야할 곳 */}
            <div className="nav-contents">
                <div className="nav-title nav-font">junfolio</div>

                <div className="nav-category nav-font">
                    <div>about me</div>
                    <div>skills</div>
                    <div>Archiving</div>
                    <div>projects</div>
                    <div>career</div>
                </div>
            </div>
        </div>
    )
}

export default Nav
