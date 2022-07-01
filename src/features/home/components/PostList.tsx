/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostsInterface } from "../interfaces";
import { PostItem } from "./PostItem";


interface Props {
    products: PostsInterface[];
}


export const PostList = ({ products }: Props) => {

    return (<div css={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        `}>

        {products.map((product) => (
            <PostItem key={product.id} product={product} />
        ))}
    </div>

    )
}
