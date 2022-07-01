/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

interface Props {
    item: {id: number; name: string; url: string}
}

export const MenuNavItem = ({item: {id, name, url}}: Props) => (
    <li 
        key={id}
        css={css`
            :first-of-type a{
                padding-left: 0;
        }
        `}>
            <Link css={css`
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            text-transform: uppercase;
            padding: 10px 15px;
            display: block;
            :hover {
                background: #ff7300;
                text-decoration: underline;
            }
        `}
            to={url}
            >
                {name}
            </Link>
    </li>

)
        