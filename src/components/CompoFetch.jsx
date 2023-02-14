import React, { useEffect, useState } from 'react'

const CompoFetch = () => {

    async function get() {
        const todos = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const product = await todos.json();
        return product;
    }
    const [product, setProduct] = useState([])

    useEffect(() => {
        get().then((product) => setProduct(product));

    }, []);
    product.map((prod) =>{
        return <>
        <div>{prod.title}</div>
        </>
    })
}

export default CompoFetch
