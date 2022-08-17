import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import { useEffect, useState } from "react"
import { webPortfolio, mobilePortfolio } from "../../data"

export default function Portfolio() {
    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([])

    const list = [
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "web",
            title: "Web App",
        },  
        
    ];

    useEffect(()=>{

        switch(selected){
           
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            default:
                setData(mobilePortfolio);
            }
        },[selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d=>(
                    <div className="item">
                        <a href={d.link} target="_blank" rel="noreferrer">
                        <h3>{d.title}</h3>
                        <img src={d.img} 
                        alt="" 
                        />
                        
                
                        </a>
                     
                        
                    </div>
                    
                 ))}
                 <div className="text-container">
                    <h3>About this project</h3>
                    {data.map(d=>(
                            <p>{d.text}</p>
                    ))}
                 </div>
            </div>
            
        </div>
    )
}