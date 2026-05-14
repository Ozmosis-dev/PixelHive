import Link from "next/link";
import PhotosSection from "@/components/app/PhotosSection";
import UploadModal from "@/components/app/UploadModal";

function Breadcrumb({ client, title }: { client: string; title: string }) {
  return (
    <nav className="flex items-center gap-2 font-inter text-[13px] text-ph-azure11/55 dark:text-ph-zircon/55">
      <Link href="/app/clients" className="flex items-center gap-1.5 hover:text-ph-azure11 dark:hover:text-ph-zircon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12l9-9 9 9" />
          <path d="M5 10v10h14V10" />
        </svg>
        Clients
      </Link>
      <span className="text-ph-azure11/30 dark:text-ph-zircon/30">›</span>
      <Link href={`/app/clients/${client}`} className="hover:text-ph-azure11 dark:hover:text-ph-zircon">
        {client.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
      </Link>
      <span className="text-ph-azure11/30 dark:text-ph-zircon/30">›</span>
      <span className="text-ph-azure11 dark:text-ph-zircon">{title}</span>
    </nav>
  );
}

function Section({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="rounded-[16px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-6 shadow-[0_2px_8px_rgba(23,26,32,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-inter text-[14px] font-bold text-ph-azure11 dark:text-ph-zircon">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] px-4 py-2.5">
      <p className="font-inter text-[11px] text-ph-azure11/55 dark:text-ph-zircon/55">{label}</p>
      <p className="mt-0.5 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon">{value}</p>
    </div>
  );
}

function Select({ value }: { value: string }) {
  return (
    <button className="flex h-10 w-full items-center justify-between rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-4 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon">
      <span>{value}</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/40 dark:text-ph-zircon/40">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}

function MetaChip({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-white/[0.03] px-3 py-1.5 font-inter text-[12.5px] text-ph-azure11/85 dark:text-ph-zircon/85">
      <span className="text-ph-azure11/50 dark:text-ph-zircon/50">{icon}</span>
      <span className="text-ph-azure11/50 dark:text-ph-zircon/50">{label}</span>
      <span className="font-semibold text-ph-azure11 dark:text-ph-zircon">{value}</span>
    </span>
  );
}

export default async function JobDetailPage({ params }: { params: Promise<{ client: string; job: string }> }) {
  const { client, job } = await params;
  const title = "Rodeo Dr, Beverly Hills, CA, USA";

  return (
    <div className="mx-auto max-w-[1280px] px-8 pt-10 pb-16">
      {/* Hero card */}
      <div
        className="rounded-[20px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-8 py-8 shadow-[0_2px_8px_rgba(23,26,32,0.04)]"
        style={{
          backgroundImage:
            "radial-gradient(800px 200px at 0 0, rgba(255,194,71,0.10) 0%, rgba(255,194,71,0) 60%)",
        }}
      >
        <Breadcrumb client={client} title={title} />
        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[1px] text-ph-azure11/40 dark:text-ph-zircon/40">Job #{job.toUpperCase()}</p>
            <h1 className="mt-1 font-manrope text-[36px] font-bold leading-[40px] tracking-[-1.1px] text-ph-azure11 dark:text-ph-zircon">{title}</h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <MetaChip
                icon={
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                }
                label="Schedule"
                value="May 12, 2026 · 3:00–5:00 PM"
              />
              <MetaChip
                icon={
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
                label="Contact"
                value="Hasta Manana"
              />
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ph-azure11/15 dark:border-white/[0.10] bg-ph-azure11/8 dark:bg-white/[0.08] px-3 py-1.5 font-inter text-[12.5px] font-semibold text-ph-azure11/80 dark:text-ph-zircon/80">
                <span className="h-1.5 w-1.5 rounded-full bg-ph-azure11/40 dark:bg-white/40" />
                To Do
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ph-accent/25 bg-ph-accent/12 px-3 py-1.5 font-inter text-[12.5px] font-semibold text-[#B07A00] dark:text-ph-accent">
                Standard Priority
              </span>
            </div>
          </div>
          <div className="flex flex-shrink-0 items-center gap-2">
            <button className="flex items-center gap-2 rounded-full border border-[rgba(23,26,32,0.10)] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-4 py-2.5 font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon hover:border-ph-accent/60">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              Share
            </button>
            <button className="flex items-center gap-2 rounded-full bg-ph-azure11 dark:bg-ph-accent px-5 py-2.5 font-inter text-[13.5px] font-semibold text-white dark:text-ph-azure11 hover:bg-black dark:hover:bg-ph-yellow-mid transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
              </svg>
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Body grid */}
      <div className="mt-6 grid grid-cols-[1fr_340px] gap-6">
        {/* Left column */}
        <div className="flex min-w-0 flex-col gap-6">
          <PhotosSection
            headerAction={
              <div className="flex items-center gap-2">
                <UploadModal />
                <button className="flex items-center gap-1.5 rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-3.5 py-1.5 font-inter text-[12.5px] font-semibold text-ph-azure11 dark:text-ph-zircon hover:border-[rgba(23,26,32,0.16)] dark:hover:border-white/[0.16]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3.5 13.4 8 18 9.4 13.4 10.8 12 15.4 10.6 10.8 6 9.4 10.6 8 12 3.5Z" />
                    <path d="M18 14.5v3M16.5 16h3M6 18.5v2M5 19.5h2" />
                  </svg>
                  Organize
                </button>
              </div>
            }
          />

          {/* Compact 2-col grid: details */}
          <div className="grid grid-cols-2 gap-6">
            <Section title="Property Information">
              <div className="flex flex-col gap-3">
                <Field label="Property Address" value="Rodeo Dr, Beverly Hills, CA, USA" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] px-4 py-2.5">
                    <p className="font-inter text-[11px] text-ph-azure11/55 dark:text-ph-zircon/55">Property Type</p>
                    <p className="mt-0.5 flex items-center justify-between font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon">
                      Condo
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/40 dark:text-ph-zircon/40">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </p>
                  </div>
                  <Field label="Square Footage" value="10,000" />
                </div>
                <Field label="Number of Rooms" value="40" />
              </div>
            </Section>

            <Section title="Schedule Session">
              <p className="mb-1 font-inter text-[11px] text-ph-azure11/55 dark:text-ph-zircon/55">Preferred Date</p>
              <div className="flex items-center justify-between rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] px-4 py-2.5 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon">
                Tuesday, May 12, 2026
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/55 dark:text-ph-zircon/55">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="mt-3 flex items-center gap-2">
                {["Today", "Tomorrow", "In a week"].map((c) => (
                  <button key={c} className="rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-3 py-1 font-inter text-[11.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">
                    {c}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <p className="mb-1 font-inter text-[11px] text-ph-azure11/55 dark:text-ph-zircon/55">Preferred Time</p>
                <Select value="3:00 PM - 5:00 PM" />
              </div>
            </Section>

            <Section
              title="Comments"
              action={<span className="font-inter text-[12px] text-ph-azure11/45 dark:text-ph-zircon/45">No comments yet</span>}
            >
              <Select value="Target User — Select a user" />
              <textarea
                placeholder="Add a comment..."
                className="mt-3 h-24 w-full resize-none rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-4 py-3 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/40 focus:border-[rgba(23,26,32,0.16)] dark:focus:border-white/[0.16] focus:outline-none"
              />
              <button className="mt-3 rounded-full bg-ph-azure11 px-5 py-2 font-inter text-[13px] font-semibold text-white">Add Comment</button>
            </Section>

            <Section title="Special Instructions">
              <textarea
                placeholder="Any specific requirements or notes..."
                className="h-[148px] w-full resize-none rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-4 py-3 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/40 focus:border-[rgba(23,26,32,0.16)] dark:focus:border-white/[0.16] focus:outline-none"
              />
            </Section>
          </div>

          <Section title="Nearby Previous Photos">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-3">
              <Field label="Search Radius (mi)" value="2" />
              <Select value="Property Type" />
              <Select value="Filter by Tags" />
            </div>
            <div className="mt-5">
              <p className="mb-2 font-inter text-[13px] font-semibold text-ph-azure11 dark:text-ph-zircon">Location Map</p>
              <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[12px] bg-[rgba(23,26,32,0.04)] dark:bg-white/[0.04]">
                <iframe
                  title="Location map for Rodeo Dr, Beverly Hills"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-118.4212%2C34.0609%2C-118.3812%2C34.0809&layer=mapnik&marker=34.0709%2C-118.4012"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center font-inter text-[12.5px] text-ph-azure11/45 dark:text-ph-zircon/45">No nearby photos found within 2 miles</p>
            </div>
          </Section>

        </div>

        {/* Right column — sidebar */}
        <aside className="flex flex-col gap-4">
          <Section
            title="Contact Information"
            action={
              <button
                aria-label="Edit contact information"
                className="flex h-7 w-7 items-center justify-center rounded-full text-ph-azure11/55 dark:text-ph-zircon/55 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] hover:text-ph-azure11 dark:hover:text-ph-zircon transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </button>
            }
          >
            <div className="flex flex-col divide-y divide-[rgba(23,26,32,0.06)] dark:divide-white/[0.06]">
              <div className="flex items-center gap-2.5 py-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-ph-azure11/50 dark:text-ph-zircon/50">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="truncate font-inter text-[13px] text-ph-azure11 dark:text-ph-zircon">Hasta Manana</span>
              </div>
              <a href="tel:1234567887654" className="flex items-center gap-2.5 py-2 group">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-ph-azure11/50 dark:text-ph-zircon/50">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="truncate font-inter text-[13px] text-ph-azure11 dark:text-ph-zircon group-hover:text-ph-accent">1234567887654</span>
              </a>
              <a href="mailto:hastamanana@test.com" className="flex items-center gap-2.5 py-2 group">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-ph-azure11/50 dark:text-ph-zircon/50">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="truncate font-inter text-[13px] text-ph-azure11 dark:text-ph-zircon group-hover:text-ph-accent">hastamanana@test.com</span>
              </a>
            </div>
          </Section>

          <Section title="Job Information">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-[10px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.03] px-3 py-2.5">
                <p className="font-inter text-[10.5px] uppercase tracking-[0.6px] text-ph-azure11/50 dark:text-ph-zircon/50">Deadline</p>
                <p className="mt-0.5 font-manrope text-[15px] font-bold text-ph-azure11 dark:text-ph-zircon">5/12/26</p>
              </div>
              <div className="rounded-[10px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.03] px-3 py-2.5">
                <p className="font-inter text-[10.5px] uppercase tracking-[0.6px] text-ph-azure11/50 dark:text-ph-zircon/50">Photos</p>
                <p className="mt-0.5 font-manrope text-[15px] font-bold text-ph-azure11 dark:text-ph-zircon">2</p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-3 font-inter text-[13px]">
              <div>
                <p className="mb-1 text-ph-azure11/55 dark:text-ph-zircon/55">Status</p>
                <Select value="To Do" />
              </div>
              <div>
                <p className="mb-1 text-ph-azure11/55 dark:text-ph-zircon/55">Assign Editor</p>
                <button className="flex h-10 w-full items-center justify-between rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-3 font-inter text-[14px]">
                  <span className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ph-accent text-[11px] font-bold text-white">U</span>
                    <span className="text-ph-azure11 dark:text-ph-zircon">Unassigned</span>
                  </span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/40 dark:text-ph-zircon/40">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
              <div>
                <p className="mb-1 text-ph-azure11/55 dark:text-ph-zircon/55">Assignee</p>
                <button className="flex h-10 w-full items-center justify-between rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-3 font-inter text-[14px]">
                  <span className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ph-accent text-[11px] font-bold text-white">U</span>
                    <span className="text-ph-azure11 dark:text-ph-zircon">Unassigned</span>
                  </span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/40 dark:text-ph-zircon/40">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>
              <div>
                <p className="mb-1 text-ph-azure11/55 dark:text-ph-zircon/55">Priority</p>
                <Select value="Standard" />
              </div>
              <p className="mt-1 text-[11.5px] text-ph-azure11/45 dark:text-ph-zircon/45">Updated 05/11/26 · 10:15 PM by pixelhivedemo</p>
            </div>
          </Section>

          <Section title="Share with Client">
            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-ph-azure11 dark:bg-white dark:text-ph-azure11 py-2.5 font-inter text-[13px] font-semibold text-white hover:bg-black dark:hover:bg-ph-zircon transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              Create Feedback Link
            </button>
            <p className="mt-2 text-center font-inter text-[11.5px] text-ph-azure11/45 dark:text-ph-zircon/45">Send a shareable review link</p>
          </Section>

          <Section title="Integrations">
            <div className="flex items-center justify-between rounded-[10px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.06] bg-black/[0.015] dark:bg-white/[0.03] px-3.5 py-2.5">
              <span className="flex items-center gap-2 font-inter text-[13px] font-semibold text-ph-azure11 dark:text-ph-zircon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#0061FF">
                  <path d="M6 2l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zM6 10l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zM6 18l6 4-6 4-6-4 6-4z" />
                </svg>
                Dropbox
              </span>
              <button className="font-inter text-[12px] font-semibold text-ph-accent hover:underline">Create Folder</button>
            </div>
          </Section>

          <Section title="Change Log">
            <div className="flex items-start justify-between gap-3 border-l-2 border-ph-accent/40 pl-3">
              <div className="min-w-0 flex-1">
                <p className="font-inter text-[13px] font-semibold text-ph-azure11 dark:text-ph-zircon">Created</p>
                <p className="font-inter text-[12.5px] text-ph-azure11/65 dark:text-ph-zircon/65">Item created</p>
                <p className="mt-1 flex items-center gap-1 font-inter text-[11.5px] text-ph-azure11/55 dark:text-ph-zircon/55">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21a8 8 0 0 1 16 0" />
                  </svg>
                  pixelhivedemo
                </p>
              </div>
              <span className="flex-shrink-0 font-inter text-[11px] text-ph-azure11/50 dark:text-ph-zircon/50">05/11/26<br/>10:15 PM</span>
            </div>
          </Section>
        </aside>
      </div>
    </div>
  );
}
