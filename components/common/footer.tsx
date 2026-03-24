import { Github, Linkedin, Plug, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <section className=" py-8 border-t bg-muted/20">
            <div className="wrapper">
                <div className="flex justify-center gap-10 mb-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center space-x-2">
                            <Plug className=" bg-primary text-primary-foreground size-5 rounded-lg" />
                            <h1 className="text-lg font-semibold">i<span className="text-primary">Build</span>This</h1>
                        </div>
                        <p>A community platform where creator share what they've built and discover new launches.</p>
                    </div>
                    <div className="flex gap-10 ">
                        <ol className="flex flex-col gap-1">
                            <p className="font-semibold">Product</p>
                            <Link href="/explore">Explore</Link>
                            <Link href="/explore">Trending</Link>
                            <Link href="/explore">Submit Project</Link>
                        </ol>
                        <ol className="flex flex-col gap-1">
                            <p className="font-semibold">Company</p>
                            <Link href="/explore">About</Link>
                            <Link href="/explore">Contact</Link>
                            <Link href="/explore">Privacy</Link>
                        </ol>
                    </div>

                </div>
                <hr />
                <div className="flex justify-between mt-8">
                    <p>2026 iBuiltThis. All right reserved.</p>
                    <div className="flex gap-2 ">
                        <Link href="/twitter" className="pointer-events-none"><Twitter/></Link>
                        <Link href="/github" className="pointer-events-none"><Github/></Link>
                        <Link href="/linkedin" className="pointer-events-none"><Linkedin/></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}