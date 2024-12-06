import React from 'react';
import axios from "axios";
import Post from "@/components/Post";
import Link from "next/link";
import {DONATE_PAGE} from "@/utils/urls";

const PostPage = async ({params}) => {

    let id = (await params).id

    let post = null

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        post = response.data
    } catch (e) {
        console.log(e)
    }


    if(!post){
        return  <div>Loading...</div>
    }

    return (
        <div>
            <Post post={post}/>

            <Link href={DONATE_PAGE}>
                Posts
            </Link>
        </div>
    );
};

export default PostPage;