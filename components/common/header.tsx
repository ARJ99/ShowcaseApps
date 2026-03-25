import { CompassIcon, Home, SparkleIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button";
import { Show, SignIn, SignInButton, SignUp, SignUpButton, UserButton } from "@clerk/nextjs";


const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center size-8 rounded-lg bg-primary ">
                <SparkleIcon className="size-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">
                i<span className="text-primary">Built</span>This
            </span>
        </Link>
    );
};

export default function Header() {

    const isSignedIn = false;

    return (
        <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="wrapper px-12">
                <div className="flex h-16 items-center justify-between">
                    <Logo />
                    <nav className="flex items-center gap-1">
                        <Link href="/" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
                            <Home className="size-4" />
                            <span>Home</span>
                        </Link>
                        <Link href="/explore" className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50">
                            <CompassIcon className="size-4" />
                            <span>Explore</span>
                        </Link>


                    </nav>

                    <div className=" flex items-center gap-3">
                        {isSignedIn ? (
                            <>
                                <Button asChild>
                                    <Link href="/submit">
                                        <SparkleIcon className="size-4" />
                                        Submit Project
                                    </Link>
                                </Button>
                                {/* Clerk User */}
                                <Button variant="ghost" className="rounded-2xl">
                                    <UserIcon className="size-4" />
                                </Button>
                            </>
                        ) : (
                            <>
                                <Show when="signed-out">
                                    <SignInButton>
                                        <button className="bg-foreground/80 text-background rounded-full font-medium text-sm  sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">Sign in</button>
                                    </SignInButton>
                                    <SignUpButton>
                                        <button className="bg-primary  rounded-full font-medium text-sm  sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">Sign up</button>
                                    </SignUpButton>
                                        
                                </Show>
                                <Show when="signed-in">
                                    <UserButton />
                                </Show>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </header>
    )
}