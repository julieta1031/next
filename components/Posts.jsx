import React from 'react';
import Link from "next/link";
import {DONATE_PAGE} from "@/utils/urls";

const Posts = ({posts}) => {

    return (
        <div>
            <ul>
                {
                    posts.map(p => {
                        return <li key={p.id}>
                           <Link href={DONATE_PAGE + `/${p.id}`}>
                               {p.title}
                           </Link>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Posts;