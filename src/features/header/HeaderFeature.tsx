/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MenuNavigation, Cart } from "./components"; 
 
export const HeaderFeature = () => (
    <header css={css`
        background: black;

    `}>
        <div css={css`
            max-width: 800px;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        `}>
        <MenuNavigation />
        <Cart />
        </div>
    </header>
)