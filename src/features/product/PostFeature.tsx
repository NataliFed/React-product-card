/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { usePost } from "./hooks";


export const PostFeature = () => {
    
    const {body, title, thumbnail, price} = usePost();

    return (
    <div>
        <p>{thumbnail}</p>
        <h1 css={css`
       text-align: center;
    `}>{title}</h1>
        <p>{body}</p>
        <p>{price}</p>
        <Link to='/'>Back to home page</Link>
    </div>
);
};
