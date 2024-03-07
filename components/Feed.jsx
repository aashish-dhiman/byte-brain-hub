"use client";

import { useState, useEffect } from "react";
import Card from "./Card";
import { revalidatePath } from "next/cache";

const CardList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) => (
                <Card
                    key={post._id}
                    post={post}
                    createdAt={post.createdAt}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    );
};

const Feed = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Search states
    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("/api/prompt", {
                cache: "no-cache",
            });
            const data = await response.json();
            setAllPosts(data);
            setIsLoading(false);
        };

        fetchPosts();
    }, []);

    const filterPrompts = (searchText) => {
        const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
        return allPosts.filter(
            (item) =>
                regex.test(item.creator.username) ||
                regex.test(item.tag) ||
                regex.test(item.prompt)
        );
    };

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        // debounce method
        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPrompts(e.target.value);
                setSearchedResults(searchResult);
            }, 500)
        );
    };

    const handleTagClick = (tagName) => {
        setSearchText(tagName);

        const searchResult = filterPrompts(tagName);
        setSearchedResults(searchResult);
    };

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for a tag or a username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>

            {/* All Prompts */}

            {isLoading ? (
                <div className="flex items-center mt-20">
                    <span>Loading...</span>
                </div>
            ) : searchText ? (
                <CardList
                    data={searchedResults}
                    handleTagClick={handleTagClick}
                />
            ) : (
                <CardList data={allPosts} handleTagClick={handleTagClick} />
            )}
        </section>
    );
};

export default Feed;
