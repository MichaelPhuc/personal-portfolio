import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">michael chau</a>
                    <a href="https://www.linkedin.com/in/michael-chau-1b646b1a4/" target="_blank" rel="noreferrer" className="linkedin">
                        <img src="assets/linkedin2.png" alt=""/>
                    </a>
                    <a href="https://github.com/MichaelPhuc" target="_blank" rel="noreferrer" className="github">
                        <img src="assets/github.png" alt=""/>
                    </a>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>
        </div>
    )
}