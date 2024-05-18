import Titlebar from "../../components/Titlebar/Titlebar";
import CardContainer from "../../components/CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { getAllBlogPostsInfo, getBlogPostsByName } from "../../apiCalling/apis/apis";

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingPage   from "../LoadingPage/LoadingPage";

import './Homepage.css';
import AddBlogButton from "../../components/AddBlogButton/AddBlogButton";

const Homepage = () => {

    // TODO MAKE THE DAILY TITLE SERVER-SIDE DETERMINED
    const historicalExcerpts = [
        "Look on my works, ye Mighty, and Despair!", // Ozymandias (Shelley)
        "Veni, vidi, vici.", // Julius Caesar
        "The die is cast.", // Julius Caesar
        "Give me liberty, or give me death!", // Patrick Henry
        "Let them eat cake.", // Marie Antoinette (disputed)
        "Et tu, Brute?", // Julius Caesar
        "We hold these truths to be self-evident...", // Declaration of Independence
        "Four score and seven years ago...", // Gettysburg Address
        "Government of the people, by the people, for the people...", // Gettysburg Address
        "Never was so much owed by so many to so few.", // Winston Churchill
        "This was their finest hour.", // Winston Churchill
        "We shall fight on the beaches...", // Winston Churchill
        "I have a dream...", // Martin Luther King Jr.
        "Ask not what your country can do for you...", // John F. Kennedy
        "Ich bin ein Berliner.", // John F. Kennedy
        "That's one small step for man...", // Neil Armstrong
        "An unexamined life is not worth living.", // Socrates
        "Know thyself.", // Ancient Greek aphorism
        "Eureka!", // Archimedes
        "Carthago delenda est.", // Cato the Elder
        "Alea iacta est.", // Julius Caesar
        "Acta non verba.", // Latin proverb
        "Cogito, ergo sum.", // René Descartes
      ];

    const [blogCards, setBlogCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [dailyTitle, setDailyTitle] = useState('');
    const [searchBarText, setSearchBarText] = useState('');

    // Update the title with all blog posts
    useEffect(() => {

        const fetchData = async () => {
            try {
                setIsLoading(true);
                const data = await getAllBlogPostsInfo();
                setBlogCards(data);
                setIsLoading(false);
            } catch (error) {
                console.log("Error fetching all blog posts information");
                console.log(error);
                setIsLoading(false);
            }
        };

        if (!searchBarText) {

            fetchData();
        }

    }, [searchBarText])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await getBlogPostsByName(searchBarText);
                setBlogCards(data)
            } catch (error) {
                console.log("Error fetching blog posts by name");
                console.log(error);
            }
        }

        if (searchBarText) {
            fetchData();
        }
    }, [searchBarText])

    // TODO MAKE THE DAILY TITLE SERVER-SIDE DETERMINED
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * historicalExcerpts.length);
        setDailyTitle(historicalExcerpts[randomIndex]);
    }, [])

    const handleSearchInputChange = (event) => {
        setSearchBarText(event.target.value)
    }

    if(isLoading) {
        return (
            <LoadingPage></LoadingPage>
        );
    }

    return (
        <div>
            <div className="homepage-background-container">
                <Titlebar className="homepage-titlebar" text={dailyTitle}></Titlebar>
                <div className="homepage-addblogbutton">
                    <AddBlogButton ></AddBlogButton>
                </div>
                {/* TODO: <br></br> IS A BANDAID FIX, PLEASE CHANGE LATER */}
                <br></br>
                <div className="homepage-searchbar-container">
                    <TextField
                        variant="outlined"
                        className="homepage-search-textfield"
                        value={searchBarText}
                        onChange={handleSearchInputChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" className="homepage-search-inputadornment">
                                    <SearchIcon className="homepage-searchicon" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <CardContainer blogCards={blogCards}></CardContainer>
            </div>
        </div>
    )
}

export default Homepage;