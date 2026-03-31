"use cache"
import SectionHeader from "@/components/common/section-header";
import { ArrowUpRightIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import ProductCard from "../products/ProductCard";
import { getFeaturedProducts } from "@/lib/products/product-select";

// const featuredProducts = [
//     {
//         id: 1,
//         name: "ParityKit",
//         description: "A toolkit for creating parity",
//         tags: ["SaaS", "Pricing", "Global"],
//         votes: 615,
//         isFeatured: true
//     },
//     {
//         id: 2,
//         name: "ProofyBubble",
//         description: "Social proof notifications that convert visitors",
//         tags: ["Marketing", "SaaS", "Conversion"],
//         votes: 523,
//         isFeatured: true
//     },
//     {
//         id: 3,
//         name: "APIHub",
//         description: "Manage and monitor all your APIs in one place",
//         tags: ["Developer Tools", "API", "Infrastructure"],
//         votes: 445,
//         isFeatured: true
//     },
//     {
//         id: 4,
//         name: "EmailCraft",
//         description: "Email marketing made simple and powerful",
//         tags: ["Marketing", "Email", "SaaS"],
//         votes: 382,
//         isFeatured: true
//     },
// ]


export default async function FeaturedProducts() {

    const featuredProducts = await getFeaturedProducts();
    return (
        <section className="py-20 bg-muted/20">
            <div className="wrapper">
                <div className="flex items-center justify-between">
                    <SectionHeader
                        title="Feature Products"
                        icon={StarIcon}
                        description="Top picks from our community this week"
                    />
                    <Button asChild variant="outline" className="hidden sm:flex">
                        <Link href="/explore">
                            View All
                            <ArrowUpRightIcon className="size-4" />
                        </Link>
                    </Button>
                </div>
                <div className="grid-wrapper">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    )
}
