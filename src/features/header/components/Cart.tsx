/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useAppSelector } from '../../../redux/hooks'
import { selectCart } from '../../../redux/slices/cartSLice'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { Badge } from "@mui/material";

export const Cart = () => {
    const { products, total } = useAppSelector(selectCart);
    const [isSowCart, setIsShowCart] = useState(false);

    const onMouseEnter = () => setIsShowCart(true);
    const onMouseLeave = () => setIsShowCart(false);

    return (
        <div css={css`
            position: relative;
            margin-left: auto;
            margin-left: auto;
            z-index: 10;
            padding: 20px;
        `}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Badge badgeContent={total} color="warning">
                <ShoppingCartIcon
                    css={css`
                    color: white;
                    cursor: pointer;
                    
                `} />
            </Badge>
            {isSowCart && (
                <div css={css`
                    background: white;
                    min-height: 100px;
                    width: 300px;
                    border: 1px solid;
                    position: absolute;
                    right: 0;
                    padding: 15px;
                    `}>
                    {products.map(({ id, title, count }) =>
                        <p key={id}>
                            {title} - {count}
                        </p>
                    )}
                </div>
            )
            }</div>
    );

}