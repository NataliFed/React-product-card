/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { PostsInterface } from "../interfaces"


interface Props {
    product: PostsInterface
}

export const PostItem = ({ product: { id, title, description, price, thumbnail } }: Props) => {
    return (
        <div css={css`
                    max-width: 200px;
                    margin-bottom: 10px;
                    border: 2px solid #a3a2a2e1;
                    border-radius: 5px;
                    padding: 15px;
                `}>
            <h3 css={css`
                        text-transform: uppercase;
                        text-align: center;
                        text-decoration: underline;
                        cursor: pointer;
                    `}><Link to={`/post/${id}`}>{title}</Link>

            </h3>
            <img src={thumbnail} alt="" css={css`
               width: 100%;
            `} />

            <div css={css`
                height: 120px;
                overflow: hidden;
                margin-top: 10px;
            `}>{description}</div>
        </div>
    )
}