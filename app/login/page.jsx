"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    login(email, password);
    router.push("/dashboard");
  };
  return (
    <main className="container" style={{ maxWidth: 480 }}>
      <div className="card">
        <h1>Login</h1>
        <p className="small">Login with any email and password.</p>
        <form onSubmit={submit}>
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@college.edu" required />
          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          <div style={{ marginTop: 16 }}><Button type="submit">Login</Button></div>
        </form>
        <p style={{ marginTop: 16 }}>No account? <Link href="/register">Register</Link></p>
      </div>
    </main>
  );
}
