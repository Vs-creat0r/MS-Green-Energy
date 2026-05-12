"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface Lead {
  id: string;
  created_at: string;
  full_name: string;
  email: string;
  phone: string;
  zip_code: string;
}

export default function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeads() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("Visitor_Leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) setLeads(data as Lead[]);
      setLoading(false);
    }
    fetchLeads();
  }, []);

  async function exportCSV() {
    const supabase = createClient();
    const { data } = await supabase
      .from("Visitor_Leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (!data) return;

    const headers = ["Name", "Email", "Phone", "ZIP Code", "Date"];
    const rows = data.map((l: any) => [
      l.full_name,
      l.email,
      l.phone,
      l.zip_code,
      new Date(l.created_at).toLocaleDateString(),
    ]);

    const csv = [
      headers.join(","),
      ...rows.map((r) => r.map((c: string) => `"${c}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-on-surface font-headline">
          Customer Leads ({leads.length})
        </h2>
        <button
          onClick={exportCSV}
          className="px-4 py-2 bg-primary text-on-primary rounded-full font-label font-bold text-sm hover:opacity-80 transition shadow-[0_8px_32px_-4px_rgba(77,101,70,0.15)]"
        >
          Export CSV
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-on-surface-variant font-body">
          Loading leads...
        </div>
      ) : leads.length === 0 ? (
        <div className="text-center py-12 text-on-surface-variant bg-surface-container-lowest rounded-[2rem]">
          No leads yet. They will appear here when customers submit the form.
        </div>
      ) : (
        <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_8px_32px_-4px_rgba(27,28,26,0.02)]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-surface-container-low text-on-surface-variant uppercase text-xs font-semibold font-label">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Phone</th>
                  <th className="px-6 py-4">ZIP Code</th>
                  <th className="px-6 py-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-surface-container transition-colors">
                    <td className="px-6 py-4 font-medium text-on-surface font-body">
                      {lead.full_name}
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant font-body">
                      <a
                        href={`mailto:${lead.email}`}
                        className="text-primary hover:underline"
                      >
                        {lead.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant font-body">
                      <a
                        href={`tel:${lead.phone}`}
                        className="text-primary hover:underline"
                      >
                        {lead.phone}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant font-body">
                      {lead.zip_code}
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant font-body">
                      {new Date(lead.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
