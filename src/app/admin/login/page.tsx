"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      router.push("/admin");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-surface">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto">
            <span
              className="material-symbols-outlined text-on-primary text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              solar_power
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold text-on-surface font-headline">
            Admin Login
          </h1>
          <p className="mt-2 text-on-surface-variant font-body">
            Sign in to access the MS Green Solar admin portal
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-[0_32px_64px_-15px_rgba(77,101,70,0.1)]"
        >
          {error && (
            <div className="mb-4 p-3 bg-error-container text-on-error-container text-sm rounded-xl border border-error/20">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-on-surface-variant mb-1 font-label"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-surface-container-high border-transparent outline-none focus:ring-0 focus:bg-surface-bright rounded-xl py-4 px-5 text-on-surface font-body transition-all duration-300 placeholder:text-outline-variant"
              placeholder="admin@msgreensolar.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-on-surface-variant mb-1 font-label"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-surface-container-high border-transparent outline-none focus:ring-0 focus:bg-surface-bright rounded-xl py-4 px-5 text-on-surface font-body transition-all duration-300 placeholder:text-outline-variant"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary text-on-primary rounded-full font-label font-bold hover:opacity-80 transition-all duration-300 active:scale-95 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
