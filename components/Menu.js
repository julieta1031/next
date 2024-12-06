import React from 'react';
import Link from "next/link";
import {ABOUT_PAGE, DONATE_PAGE, HOME_PAGE} from "@/utils/urls";

const Menu = () => {
    return (
        <div>
            <ul className="flex gap-4">
                <li>
                    <Link href={HOME_PAGE}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={ABOUT_PAGE}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href={DONATE_PAGE}>
                        Donate
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;