import React from 'react';
import Posts from "@/components/Posts";
import axios from "axios";


const DonatePage = async () => {

    let posts = []

    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        posts = response.data
    } catch (e) {
        console.log(e)
    }

    return (
        <div className="p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Posts posts={posts}/>
        </div>
    );
};

export default DonatePage;