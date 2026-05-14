import Link from "next/link";
import PhotosSection from "@/components/app/PhotosSection";

function Breadcrumb({ client, title }: { client: string; title: string }) {
  return (
    <nav className="flex items-center gap-2 font-inter text-[13px]">
      <Link href="/app/clients" className="flex items-center gap-1.5 text-white/70 hover:text-white">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12l9-9 9 9" />
          <path d="M5 10v10h14V10" />
        </svg>
        <span>Clients</span>
      </Link>
      <span className="text-white/40">›</span>
      <Link href={`/app/clients/${client}`} className="text-white/70 hover:text-white">{client.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</Link>
      <span className="text-white/40">›</span>
      <span className="text-white">{title}</span>
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

export default async function JobDetailPage({ params }: { params: Promise<{ client: string; job: string }> }) {
  const { client, job } = await params;
  const title = "Rodeo Dr, Beverly Hills, CA, USA";

  return (
    <>
      {/* Hero banner */}
      <div className="relative h-[220px] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=2000&h=600&fit=crop&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.7) 100%)" }} />
        <div className="relative mx-auto flex h-full max-w-[1280px] flex-col justify-center px-8">
          <Breadcrumb client={client} title={title} />
          <h1 className="mt-3 font-manrope text-[36px] font-bold leading-[40px] tracking-[-1.1px] text-white">{title}</h1>
          <p className="mt-2 flex items-center gap-4 font-inter text-[13.5px] text-white/85">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Schedule: May 12, 2026 at 3:00 PM - 5:00 PM
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Contact: Hasta Manana · 1234567887654
            </span>
          </p>
        </div>
      </div>

      {/* Body grid */}
      <div className="mx-auto grid max-w-[1280px] grid-cols-[1fr_320px] gap-6 px-8 pt-8">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <Section title="Client">
            <div className="flex items-center gap-2 rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] px-4 py-2.5 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M3 8h18" />
              </svg>
              Cabin
            </div>
          </Section>

          <Section title="Actions">
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-full bg-ph-accent px-4 py-3 font-inter text-[14px] font-semibold text-ph-azure11 dark:text-ph-zircon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6.5 17.5a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.7-1.4A4 4 0 0 1 17 17.5" />
                  <path d="M12 21V11.5" />
                  <path d="m8.5 14.5 3.5-3.5 3.5 3.5" />
                </svg>
                Upload / Sync Photos
              </button>
              <button className="flex items-center justify-center gap-2 rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-4 py-3 font-inter text-[14px] font-semibold text-ph-azure11 dark:text-ph-zircon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3.5 13.4 8 18 9.4 13.4 10.8 12 15.4 10.6 10.8 6 9.4 10.6 8 12 3.5Z" />
                  <path d="M18 14.5v3M16.5 16h3M6 18.5v2M5 19.5h2" />
                </svg>
                Organize Photos
              </button>
            </div>
          </Section>

          <PhotosSection />

          <Section title="Nearby Previous Photos">
            <div className="grid grid-cols-[1fr_1fr] gap-3">
              <Field label="Search Radius (miles)" value="2" />
              <Select value="Property Type" />
            </div>
            <div className="mt-3">
              <Select value="Filter by Tags" />
            </div>
            <div className="mt-5">
              <p className="mb-2 font-inter text-[13px] font-semibold text-ph-azure11 dark:text-ph-zircon">Location Map</p>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[12px] bg-[rgba(23,26,32,0.04)] dark:bg-white/[0.04]">
                <iframe
                  title="Location map for Rodeo Dr, Beverly Hills"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-118.4212%2C34.0609%2C-118.3812%2C34.0809&layer=mapnik&marker=34.0709%2C-118.4012"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 flex flex-col items-center text-ph-azure11/45 dark:text-ph-zircon/45">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
                <p className="mt-2 font-inter text-[13px]">No nearby photos found</p>
              </div>
            </div>
          </Section>

          <Section
            title="Comments"
            action={<span className="font-inter text-[12px] text-ph-azure11/45 dark:text-ph-zircon/45">No comments yet</span>}
          >
            <Select value="Target User — Select a user" />
            <textarea
              placeholder="Add a comment..."
              className="mt-3 h-24 w-full resize-none rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-4 py-3 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/40/40 focus:border-[rgba(23,26,32,0.16)] dark:border-white/[0.16] focus:outline-none"
            />
            <button className="mt-3 rounded-full bg-ph-azure11 px-5 py-2 font-inter text-[13px] font-semibold text-white">Add Comment</button>
          </Section>

          <Section title="Property Information">
            <div className="flex flex-col gap-3">
              <Field label="Property Address" value="Rodeo Dr, Beverly Hills, CA, USA" />
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] px-4 py-2.5">
                  <p className="font-inter text-[11px] text-ph-azure11/55 dark:text-ph-zircon/55">Property Type</p>
                  <p className="mt-0.5 flex items-center justify-between font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon">Condo
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/40 dark:text-ph-zircon/40">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </p>
                </div>
                <Field label="Square Footage" value="10000" />
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
                <button key={c} className="rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-3 py-1 font-inter text-[12px] font-semibold text-ph-azure11 dark:text-ph-zircon">
                  {c}
                </button>
              ))}
              <button className="text-ph-azure11/40 dark:text-ph-zircon/40">×</button>
            </div>
            <div className="mt-4">
              <p className="mb-1 font-inter text-[11px] text-ph-azure11/55 dark:text-ph-zircon/55">Preferred Time</p>
              <Select value="3:00 PM - 5:00 PM" />
            </div>
          </Section>

          <Section title="Contact Information">
            <div className="flex flex-col gap-3">
              <Field label="Full Name" value="Hasta Manana" />
              <Field label="Phone Number" value="1234567887654" />
              <Field label="Email Address" value="hastamanana@test.com" />
            </div>
          </Section>

          <Section title="Special Instructions">
            <textarea
              placeholder="Any specific requirements or notes..."
              className="h-24 w-full resize-none rounded-[10px] border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-4 py-3 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/40/40 focus:border-[rgba(23,26,32,0.16)] dark:border-white/[0.16] focus:outline-none"
            />
          </Section>

          <Section title="Change Log">
            <div className="flex items-start justify-between border-l-2 border-ph-azure11/15 pl-4">
              <div>
                <p className="font-inter text-[13.5px] font-semibold text-ph-azure11 dark:text-ph-zircon">Created</p>
                <p className="font-inter text-[13px] text-ph-azure11/70 dark:text-ph-zircon/70">Item created</p>
                <p className="mt-1 flex items-center gap-1 font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21a8 8 0 0 1 16 0" />
                  </svg>
                  pixelhivedemo
                </p>
              </div>
              <span className="font-inter text-[12px] text-ph-azure11/55 dark:text-ph-zircon/55">05/11/26 at 10:15 PM</span>
            </div>
          </Section>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          <Section title="Job Information">
            <div className="flex flex-col gap-4 font-inter text-[13px]">
              <div>
                <p className="text-ph-azure11/55 dark:text-ph-zircon/55">Original Deadline:</p>
                <p className="font-semibold text-ph-azure11 dark:text-ph-zircon">5/12/2026</p>
              </div>
              <div>
                <p className="text-ph-azure11/55 dark:text-ph-zircon/55">Total Photos:</p>
                <p className="font-semibold text-ph-azure11 dark:text-ph-zircon">2 photos</p>
              </div>
              <p className="text-ph-azure11/55 dark:text-ph-zircon/55">Updated 05/11/26 at 10:15 PM</p>
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
              <p className="text-ph-azure11/55 dark:text-ph-zircon/55">Created on 05/11/26 at 10:15 PM by pixelhivedemo</p>
              <button className="rounded-full bg-ph-azure11 py-2.5 font-inter text-[14px] font-semibold text-white hover:bg-black">Save</button>
            </div>
          </Section>

          <Section title="Share with Client">
            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-ph-azure11 py-2.5 font-inter text-[13px] font-semibold text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              Create Feedback Link
            </button>
          </Section>

          <div className="flex items-center justify-between rounded-[16px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-4 shadow-[0_2px_8px_rgba(23,26,32,0.04)]">
            <span className="flex items-center gap-2 font-inter text-[13px] font-semibold text-ph-azure11 dark:text-ph-zircon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0061FF">
                <path d="M6 2l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zM6 10l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zM6 18l6 4-6 4-6-4 6-4z" />
              </svg>
              Dropbox
            </span>
            <button className="font-inter text-[13px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70 hover:text-ph-azure11 dark:hover:text-ph-zircon">Create Folder</button>
          </div>
        </div>
      </div>
    </>
  );
}
