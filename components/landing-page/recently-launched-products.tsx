
import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "../products/ProductCard";
import EmptyState from "../common/empty-state";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";


export default async function RecentlyLaunchedProducts() {
    const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();

    return (
        <section className="py-20">
            <div className="wrapper ">
                <SectionHeader
                    title="Recently Launched"
                    icon={RocketIcon}
                    description="Discover the lastest products from our community"
                />

                {recentlyLaunchedProducts.length > 0 ? (
                    <div className="grid-wrapper">
                        {recentlyLaunchedProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                ) : (
                    <EmptyState
                        message="No product launched in the last week. Check back soon for new launches"
                        icon={CalendarIcon}
                    />
                )}

            </div>
        </section>
    )

}