/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const PageFeature = ({children}: any) => 
    <div css={css`
        max-width: 800px;
        margin: 50px auto;
        box-shadow: 1px 1px 6px 3px #2a29297d;
        padding: 15px;
    `}>{children}</div>