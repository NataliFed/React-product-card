/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { usePost } from "./hooks";


export const PostFeature = () => {

    const { description, title, thumbnail, price } = usePost();

    return (
        <div>
            <h1 css={css`
                text-align: center;
            `}>
                {title}
            </h1>
            <img src={thumbnail} alt="" css={css`
                width: 100%;
            `}/>

            <p>{description}</p>
            <p css={css`
                text-decoration: underline;

            `}>{price} $</p>
            <Link to='/'>Back to home page</Link>
        </div>
    );
};
