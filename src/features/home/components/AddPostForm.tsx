/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button, TextField } from "@mui/material"
import { useAddPosts } from "../hooks";
import { FieldError } from "./FieldError";

interface Props {
    handleClose: () => void;
}

export const AddPostForm = ({ handleClose }: Props) => {
    const { onAddPost, errors } = useAddPosts(handleClose)

    return <form
        onSubmit={onAddPost}
        css={css`
            display: flex;
            flex-direction: column;
            gap: 15px;
        `}>
        <TextField
            error={errors.title}
            name="title" label="title"
            variant="outlined" 
        />
        <FieldError isError={errors.title} title="Content must be more of 5 chairs" />
        
        <TextField
            error={errors.description}
            name="description"
            label="description"
            variant="outlined" 
        />
<FieldError isError={errors.description} title="Content must be more of 10 chairs" />

        <Button type="submit" variant="contained">Create</Button>
    </form>
}