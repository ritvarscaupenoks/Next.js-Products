"use client";
import { Container, Image, Button } from "./ProductCard.styles";
import Link from "next/link";

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description: string;
}

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Container>
            <Image src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <Link href={`/product/${product.id}`}>
                <Button>View Details</Button>
            </Link>
        </Container>
    );
}