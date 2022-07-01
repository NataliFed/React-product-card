import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { PostsInterface } from '../interfaces'

export const usePost = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({} as PostsInterface);


    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });
    }, [])
    
    return product;

}

