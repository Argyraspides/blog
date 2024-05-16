import Titlebar from "../../components/Titlebar/Titlebar";
import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { getAllBlogPostsInfo } from "../../apiCalling/apis/apis";
import './Homepage.css';



const Homepage = () => {

    const [blogCards, setBlogCards] = useState([])
    const [dailyTitle, setDailyTitle] = useState('Look on my works, ye Mighty, and Despair!')

    // Update the title with all blog posts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllBlogPostsInfo();
                setBlogCards(data);
            } catch (error) {
                console.log("Error fetching all blog posts information");
                console.log(error);
            }
        };

        fetchData();
    }, [])

    return (
        <div className="homepage-background-container">
                <Titlebar text={dailyTitle}></Titlebar>
            <div className="homepage-background">
                <CardContainer blogCards={blogCards}></CardContainer>
            </div>
        </div>
    )
}

export default Homepage;