import { useState } from "react";

interface fields {
    title: string;
    description: string;
}

export const initialErrors = {
    title: false,
    description: false,
}

export const useAddPosts = (handleClose: () => void) => {
    const [errors, setErrors] = useState(initialErrors);

    const resetErrors = () => setErrors(initialErrors)


    const validate = (fields: fields) => {
        let isValid = true;

        resetErrors();

        const newErrors = { ...initialErrors };

        if (fields.description.length < 10) {
            newErrors.description = true;
            isValid = false;
        }
        if (!/^[A-Z a-z]{5,20}$/.test(fields.title)) {
            newErrors.title = true;
            isValid = false;
        }

        setErrors(newErrors);

        return isValid;
    }

    const clearForm = (target: any) => {
        target.title.value = "";
        target.description.value = "";
    }

    const onAddPost = (event: any) => {
        event.preventDefault();

        const dataSend = {
            title: event.target.title.value,
            description: event.target.description.value,
        }

        if (!validate(dataSend)) return;


        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'I am in love with someone.',
                userId: 5
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                handleClose();
                clearForm(event.target)
            });
    }

        return {
            onAddPost,
            errors
        }
    }
