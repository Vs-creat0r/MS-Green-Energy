"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LeadsTable from "@/components/LeadsTable";
import DocumentManager from "@/components/DocumentManager";
import { createClient } from "@/utils/supabase/client";

export default function AdminDashboard() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/admin/login");
      } else {
        setUserEmail(data.user.email || "");
      }
      setLoading(false);
    }
    checkAuth();
  }, [router]);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface font-body text-on-surface-variant">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Admin Header */}
      <header className="bg-surface-container-lowest shadow-[0_32px_64px_-15px_rgba(77,101,70,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-on-primary text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  solar_power
                </span>
              </div>
              <span className="text-xl font-extrabold text-primary font-headline">
                Admin Portal
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-on-surface-variant font-body">
                {userEmail}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-bold text-error border border-error/30 rounded-full hover:bg-error-container transition font-label"
              >
                Sign Out
              </button>
              <a
                href="/"
                className="px-4 py-2 text-sm font-bold text-on-surface-variant border border-outline-variant/30 rounded-full hover:bg-surface-container transition font-label"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-on-surface font-headline">
            Dashboard
          </h1>
          <p className="mt-2 text-on-surface-variant font-body">
            Manage customer leads and company documents.
          </p>
        </div>

        <LeadsTable />
        <DocumentManager />
      </main>
    </div>
  );
}
