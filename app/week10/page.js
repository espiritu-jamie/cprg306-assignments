"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn() {
        await gitHubSignIn();
    }

    async function handleSignOut() {
        await firebaseSignOut();
    }

    return (
        <main>
            {user ? (
                <div className="flex-col m-6">
                    <h1 
                        className="text-xl/8 font-bold mb-4">
                            Welcome, {user.displayName} ({user.email})
                    </h1>
                    <Link 
                        href="/week10/shopping-list"
                        className="mb-4 hover:text-orange-500">
                        Click here to continue to the Shopping List
                    </Link>
                    <div 
                        className="flex justify-between">
                        <button 
                            onClick={handleSignOut}
                            className="mt-4 hover:text-orange-500">
                                Sign out
                        </button>
                    </div>
                </div>
            ) : (
                <button 
                    onClick={handleSignIn}
                    className="text-xl/8 m-6  hover:text-orange-500">
                        Sign in to view the shopping list
                </button>
            )}
            <p className="ml-6  hover:text-orange-500">
                <Link href="/">Back to Home</Link>
            </p>
        </main>
    )
}
