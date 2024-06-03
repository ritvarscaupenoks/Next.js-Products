"use client";
import { Container, Image, Content, Title, Price, Category, Description, Button } from './page.styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../../components/ProductCard/ProductCard';
import NavigationBar from '@/app/components/NavigationBar/NavigationBar';
import Link from 'next/link';

export default function ProductDetails(props: any) {
    // console.log('props', props)

    const id = props.params.id;
    const [product, setProduct] = useState<Product | null>(null);

    // console.log('product', product)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
            });
    }, []);

    return (
        <div>
            <NavigationBar />
            <Container>
                <Image src={product?.image} alt={product?.title} />
                <Content>
                    <Title>{product?.title}</Title>
                    <Price>Price: ${product?.price}</Price>
                    <Category>Category: {product?.category}</Category>
                    <Description>Description: {product?.description}</Description>
                    <Link href="/">
                    <Button>Back</Button>
                    </Link>
                </Content>
            </Container>
        </div>
    );
}