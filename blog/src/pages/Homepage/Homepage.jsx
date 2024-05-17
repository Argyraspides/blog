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

    const [blogCards, setBlogCards] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [dailyTitle, setDailyTitle] = useState('Look on my works, ye Mighty, and Despair!');
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