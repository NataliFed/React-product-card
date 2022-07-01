/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface Props {
    isError: boolean;
    title: string;
}

export const FieldError = ({ isError, title }: Props) => isError ? <span css={css`
    color: red;
    font-size: 12px;
`}>
    {title}
</span> : <></>;