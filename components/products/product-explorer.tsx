"use client"
import { ClockIcon, SearchIcon, TrendingUpIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { getAllProducts } from "@/lib/products/product-select"
import ProductCard from "./product-card"
import { ProductType } from "@/types"
import { useEffect, useMemo, useState } from "react"

export const ProductExplorer = ({ products }: { products: ProductType[] }) => {

    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<"trending" | "recent" | "newest">("trending");

    const filteredProducts: ProductType[] = useMemo(() => {

        const filtered = [...products];

        if (searchQuery.length > 0) {
            return filtered.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        switch (sortBy) {
            case "trending":
                return filtered.sort((a, b) => b.voteCount - a.voteCount);
            case "recent":
                return filtered.sort(
                    (a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());
            case "newest":
                return filtered.sort(
                    (a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime());
            default:
                return filtered;
        }
    }, [searchQuery, products, sortBy]);


    return (
        <div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
                    <Input
                        type="text"
                        placeholder="Search products..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => { setSearchQuery(e.target.value) }}
                    />
                </div>
                <div className="flex gap-2">
                    <Button variant={sortBy === "trending" ? "default" : "outline"} onClick={() => { setSortBy("trending") }}>
                        <TrendingUpIcon className="size-4" />Trending
                    </Button>
                    <Button variant={sortBy === "recent" ? "default" : "outline"} onClick={() => { setSortBy("recent") }}>
                        <ClockIcon className="size-4" /> Recent Button
                    </Button>
                </div>
            </div>

            <div className="mb-6">
                <p className="text-sm text-muted-foreground"> Showing {products.length} products</p>
            </div>

            <div className="grid-wrapper">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}
