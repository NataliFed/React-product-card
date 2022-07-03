/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PostsInterface } from "../interfaces";
import { PostItem } from "./PostItem";
import { useAppDispatch } from '../../../redux/hooks'
import { addProduct } from '../../../redux/slices/cartSLice'


interface Props {
    products: PostsInterface[];
}


export const PostList = ({ products }: Props) => {
    const dispatch = useAppDispatch();

    const onAddProduct = (product: PostsInterface) => {
        dispatch(addProduct(product))
    }
    return (<div css={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        `}>

        {products.map((product) => (
            <PostItem key={product.id} product={product} onAddProduct={onAddProduct} />
        ))}
    </div>

    )
}
