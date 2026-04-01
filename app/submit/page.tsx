import SectionHeader from "@/components/common/section-header"
import ProductSubmitForm from "@/components/products/product-submit"

import { SparkleIcon } from "lucide-react"


const SubmitPage = () => {
    return (
        <section className="py-20">

            <div className="wrapper">
                <div className="mb-12">
                    <SectionHeader
                        title="Submit Project"
                        icon={SparkleIcon}
                        description="Submit your project to the iBuiltThis community"
                    />
                </div>
                <div className="max-w-2xl mx-auto">
                    <ProductSubmitForm />
                </div>
            </div>
        </section>
    );
}

export default SubmitPage