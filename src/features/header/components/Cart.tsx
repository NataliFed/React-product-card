/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useAppSelector } from '../../../redux/hooks'
import { selectProducts } from '../../../redux/slices/cardSLice'

export const Cart = () => {
    const products = useAppSelector(selectProducts);

    return (
        <div css={css`
        position: relative;
        `}>
            <div css={css`
                background: white;
                min-height: 100px;
                width: 300px;
                border: 1px solid;
                position: absolute;
                right: 0;
            `}>
                {products.map(({ id, title, count }) =>
                    <p key={id}>
                        {title} - {count}
                    </p>
                )}
            </div>
        </div>
    );

}