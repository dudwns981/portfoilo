import React, {useState} from 'react'
import "./Header.css"

function Header() {
    const [main_img, change_img] = useState(
        "https://cdn.pixabay.com/photo/2015/05/15/14/47/computer-768696_1280.jpg"
    )

    const selecta = () => {
        console.log("abc")
    }

    const contentStyle = {
        backgroundSize: "cover",
        backgroundImage: `url('https://cdn.pixabay.com/photo/2015/05/15/14/47/computer-768696_1280.jpg')`,
        width: "1280px",
        height: "600px",
        zindex:"-1"
       
    }
    return (
        <div className="header" style={contentStyle}>

            <div className="header-contents" >
              <div className="abc">avsfsadf</div>
                <input type="button" value="abc" className="abcbutton" />


            </div>

        </div>
    )
}

export default Header
