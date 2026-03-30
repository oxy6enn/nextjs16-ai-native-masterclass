import LoginForm from "@/app/(auth)/auth/signin/LoginForm"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "เข้าสู่ระบบ",
    description: "Sign in to your AI Native App account",
    keywords: ["Next.js", "AI", "Authentication", "Better Auth", "RAG", "Sign In"],
    authors: [{ name: "Anurak Charoenporn", url: "https://anurak.dev" }],
}

export default function SigninPage() {
    return (
        <LoginForm />
    )
}
