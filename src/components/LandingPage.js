import React from 'react'

export default function LandingPage() {
    const imgsource = "https://i.pinimg.com/originals/fa/f0/6b/faf06b17944551850baee437c771d6a4.png"
    return (
        <div style={{backgroundColor:"#3bb5c6", minHeight:"100vh"}}>
            <img src={imgsource} height={"300"} style={{marginTop:"20vh"}} alt="Logo here" />
        </div>
    )
}
