"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type PendingFile = {
  id: string;
  file: File;
  preview: string;
};

function formatBytes(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

export default function UploadModal() {
  const [open, setOpen] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<PendingFile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((fileList: FileList | File[]) => {
    const accepted: PendingFile[] = [];
    for (const f of Array.from(fileList)) {
      if (!f.type.startsWith("image/")) continue;
      accepted.push({
        id: `${f.name}-${f.size}-${f.lastModified}-${Math.random().toString(36).slice(2, 7)}`,
        file: f,
        preview: URL.createObjectURL(f),
      });
    }
    setFiles((prev) => [...prev, ...accepted]);
  }, []);

  const removeFile = (id: string) => {
    setFiles((prev) => {
      const target = prev.find((f) => f.id === id);
      if (target) URL.revokeObjectURL(target.preview);
      return prev.filter((f) => f.id !== id);
    });
  };

  const reset = useCallback(() => {
    files.forEach((f) => URL.revokeObjectURL(f.preview));
    setFiles([]);
  }, [files]);

  const close = () => {
    setOpen(false);
    setDragging(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    return () => {
      files.forEach((f) => URL.revokeObjectURL(f.preview));
    };
  }, [files]);

  const totalBytes = files.reduce((sum, f) => sum + f.file.size, 0);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 rounded-full bg-ph-accent px-3.5 py-1.5 font-inter text-[12.5px] font-semibold text-ph-azure11 hover:bg-ph-yellow-mid transition-colors"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.5 17.5a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.7-1.4A4 4 0 0 1 17 17.5" />
          <path d="M12 21V11.5" />
          <path d="m8.5 14.5 3.5-3.5 3.5 3.5" />
        </svg>
        Upload / Sync
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-8"
          onClick={close}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[88vh] w-full max-w-[640px] flex-col overflow-hidden rounded-[20px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] shadow-[0_24px_64px_rgba(0,0,0,0.35)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-6 py-4">
              <div>
                <h2 className="font-manrope text-[18px] font-bold text-ph-azure11 dark:text-ph-zircon">Upload Photos</h2>
                <p className="mt-0.5 font-inter text-[12.5px] text-ph-azure11/55 dark:text-ph-zircon/55">
                  Drag & drop, or browse your device
                </p>
              </div>
              <button
                onClick={close}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full text-ph-azure11/55 dark:text-ph-zircon/55 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] hover:text-ph-azure11 dark:hover:text-ph-zircon transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Dropzone */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files);
                }}
                onClick={() => inputRef.current?.click()}
                className={`relative flex cursor-pointer flex-col items-center justify-center rounded-[16px] border-2 border-dashed px-6 py-10 text-center transition-colors ${
                  dragging
                    ? "border-ph-accent bg-ph-accent/8"
                    : "border-[rgba(23,26,32,0.12)] dark:border-white/[0.12] bg-black/[0.015] dark:bg-white/[0.025] hover:border-ph-accent/60 hover:bg-ph-accent/5"
                }`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ph-accent/15 text-[#B07A00] dark:text-ph-accent">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6.5 17.5a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.7-1.4A4 4 0 0 1 17 17.5" />
                    <path d="M12 21V11.5" />
                    <path d="m8.5 14.5 3.5-3.5 3.5 3.5" />
                  </svg>
                </span>
                <p className="mt-4 font-manrope text-[16px] font-bold text-ph-azure11 dark:text-ph-zircon">
                  {dragging ? "Drop to upload" : "Drag & drop photos here"}
                </p>
                <p className="mt-1 font-inter text-[13px] text-ph-azure11/55 dark:text-ph-zircon/55">
                  or <span className="font-semibold text-ph-accent">click to browse</span> · JPG, PNG, HEIC up to 50 MB each
                </p>
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.length) addFiles(e.target.files);
                    e.target.value = "";
                  }}
                />
              </div>

              {/* File list */}
              {files.length > 0 && (
                <div className="mt-5">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="font-inter text-[12.5px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">
                      {files.length} {files.length === 1 ? "file" : "files"} selected · {formatBytes(totalBytes)}
                    </p>
                    <button
                      onClick={reset}
                      className="font-inter text-[12px] font-semibold text-ph-azure11/55 dark:text-ph-zircon/55 hover:text-rose-500"
                    >
                      Clear all
                    </button>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {files.map((f) => (
                      <li
                        key={f.id}
                        className="flex items-center gap-3 rounded-[12px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.025] p-2 pr-3"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={f.preview}
                          alt={f.file.name}
                          className="h-12 w-12 flex-shrink-0 rounded-[8px] object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-inter text-[13px] font-semibold text-ph-azure11 dark:text-ph-zircon">
                            {f.file.name}
                          </p>
                          <p className="font-inter text-[11.5px] text-ph-azure11/55 dark:text-ph-zircon/55">
                            {formatBytes(f.file.size)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFile(f.id)}
                          aria-label={`Remove ${f.file.name}`}
                          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-ph-azure11/55 dark:text-ph-zircon/55 hover:bg-rose-500/10 hover:text-rose-500 transition-colors"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-6 py-4">
              <p className="font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">
                {files.length === 0 ? "No files yet" : `Ready to upload ${files.length}`}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={close}
                  className="rounded-full border border-[rgba(23,26,32,0.10)] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-5 py-2 font-inter text-[13px] font-semibold text-ph-azure11 dark:text-ph-zircon hover:border-[rgba(23,26,32,0.20)] dark:hover:border-white/[0.20] transition-colors"
                >
                  Cancel
                </button>
                <button
                  disabled={files.length === 0}
                  onClick={() => {
                    // TODO: wire up actual upload
                    close();
                    reset();
                  }}
                  className="flex items-center gap-2 rounded-full bg-ph-accent px-5 py-2 font-inter text-[13px] font-semibold text-ph-azure11 hover:bg-ph-yellow-mid transition-colors disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6.5 17.5a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.7-1.4A4 4 0 0 1 17 17.5" />
                    <path d="M12 21V11.5" />
                    <path d="m8.5 14.5 3.5-3.5 3.5 3.5" />
                  </svg>
                  Upload {files.length > 0 ? `(${files.length})` : ""}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
