import { getFeaturedProducts } from '@/lib/products/product-select'
import React from 'react'

export const generateStaticParams = async () => {
    const product = await getFeaturedProducts();

    return product.map((product)=>(
        {id: product.id.toString()}
    ))
}


const Product = async ({ params }: {
    params: Promise<{ id: string }>
}) => {

    const { id } = await params;
    return (
        <div>This is the product {id}</div>
    )
}

export default Product