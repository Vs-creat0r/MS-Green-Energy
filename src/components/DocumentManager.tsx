"use client";

import { useRef, useState } from "react";
import { createClient } from "@/utils/supabase/client";

interface DocFile {
  name: string;
  id: string;
  created_at: string;
  metadata?: { size: number };
}

export default function DocumentManager() {
  const [files, setFiles] = useState<DocFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function loadFiles() {
    setLoading(true);
    const supabase = createClient();
    const { data, error } = await supabase.storage
      .from("Admin_Documents")
      .list("", { sortBy: { column: "created_at", order: "desc" } });

    if (!error && data) {
      setFiles(
        data
          .filter((f) => f.id)
          .map((f) => ({
            name: f.name,
            id: f.id!,
            created_at: f.created_at ?? "",
            metadata: f.metadata?.size ? { size: f.metadata.size } : undefined,
          }))
      );
    }
    setLoading(false);
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const supabase = createClient();
    const path = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("Admin_Documents")
      .upload(path, file);

    setUploading(false);
    if (!error) {
      if (inputRef.current) inputRef.current.value = "";
      loadFiles();
    } else {
      alert("Upload failed: " + error.message);
    }
  }

  async function handleDownload(name: string) {
    const supabase = createClient();
    const { data } = await supabase.storage
      .from("Admin_Documents")
      .createSignedUrl(name, 60);

    if (data?.signedUrl) window.open(data.signedUrl, "_blank");
  }

  async function handleDelete(name: string) {
    if (!confirm("Delete this file? This cannot be undone.")) return;

    const supabase = createClient();
    const { error } = await supabase.storage
      .from("Admin_Documents")
      .remove([name]);

    if (!error) loadFiles();
    else alert("Delete failed: " + error.message);
  }

  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-on-surface font-headline">
          Document Management
        </h2>
        <button
          onClick={loadFiles}
          className="text-sm text-primary hover:underline font-label"
        >
          Refresh
        </button>
      </div>

      {/* Upload Area */}
      <div className="bg-surface-container-lowest rounded-[2rem] p-6 mb-6 shadow-[0_8px_32px_-4px_rgba(27,28,26,0.02)]">
        <div className="flex items-center gap-4">
          <input
            ref={inputRef}
            type="file"
            onChange={handleUpload}
            className="block text-sm text-on-surface-variant file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-secondary-container file:text-on-secondary-container file:text-sm file:font-bold hover:file:bg-secondary-fixed transition-all"
          />
          {uploading && (
            <span className="text-sm text-on-surface-variant font-body">
              Uploading...
            </span>
          )}
        </div>
        <p className="mt-2 text-xs text-on-surface-variant font-body">
          Upload GST, legal, compliance, and tax documents. Max 1 GB storage.
        </p>
      </div>

      {/* File List */}
      {loading ? (
        <div className="text-center py-8 text-on-surface-variant font-body">
          Loading files...
        </div>
      ) : files.length === 0 ? (
        <div className="text-center py-8 text-on-surface-variant bg-surface-container-lowest rounded-[2rem] font-body">
          No documents uploaded yet.
        </div>
      ) : (
        <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_8px_32px_-4px_rgba(27,28,26,0.02)]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-surface-container-low text-on-surface-variant uppercase text-xs font-semibold font-label">
                <tr>
                  <th className="px-6 py-4">File Name</th>
                  <th className="px-6 py-4">Size</th>
                  <th className="px-6 py-4">Uploaded</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {files.map((file) => (
                  <tr key={file.id} className="hover:bg-surface-container transition-colors">
                    <td className="px-6 py-4 font-medium text-on-surface font-body">
                      {file.name}
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant font-body">
                      {file.metadata?.size
                        ? `${(file.metadata.size / 1024).toFixed(1)} KB`
                        : "—"}
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant font-body">
                      {file.created_at
                        ? new Date(file.created_at).toLocaleDateString()
                        : "—"}
                    </td>
                    <td className="px-6 py-4 flex gap-3">
                      <button
                        onClick={() => handleDownload(file.name)}
                        className="text-primary hover:underline text-sm font-bold font-label"
                      >
                        Download
                      </button>
                      <button
                        onClick={() => handleDelete(file.name)}
                        className="text-error hover:underline text-sm font-bold font-label"
                      >
                        Delete
                      </button>
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
