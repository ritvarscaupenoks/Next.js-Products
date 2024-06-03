'use client';
import { useState, useEffect } from "react";
import { Container, Products, SearchBar, LoadMore } from "./ProductList.styles";
import axios from "axios";
import ProductCard, { Product } from "../ProductCard/ProductCard";


export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [productLimit, setProductLimit] = useState(10);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/?limit=${productLimit}`)
            .then(response => {
                setProducts(response.data);
                setFilteredProducts(response.data);
            });
    }, [productLimit]);

    useEffect(() => {
        setFilteredProducts(
            products.filter(product => {
                return product.title.toLowerCase().includes(search.toLowerCase());
            })
        );
    }, [search, products]);

    useEffect(() => {
        if (search !== "") {
            setProductLimit(100);
        } else {
            setProductLimit(10);
        }
    }, [search]);

    return (
        <Container>
            <SearchBar
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Products>
                {filteredProducts.map(product => (
                    <ProductCard product={product} />
                ))}
            </Products>
            {search === "" && (
                <LoadMore onClick={() => setProductLimit(productLimit + 5)}>
                    Load More
                </LoadMore>
            )}
        </Container>
    );
}