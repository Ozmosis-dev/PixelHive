import Link from "next/link";

function Breadcrumb({ client }: { client: string }) {
  return (
    <nav className="flex items-center gap-2 font-inter text-[14px]">
      <Link href="/app/clients" className="flex items-center gap-1.5 text-ph-azure11/55 dark:text-ph-zircon/55 hover:text-ph-azure11 dark:hover:text-ph-zircon">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12l9-9 9 9" />
          <path d="M5 10v10h14V10" />
        </svg>
        <span>Clients</span>
      </Link>
      <span className="text-ph-azure11/30 dark:text-ph-zircon/30">›</span>
      <span className="font-semibold text-ph-azure11 dark:text-ph-zircon">{client}</span>
    </nav>
  );
}

function Select({ label, className = "" }: { label: string; className?: string }) {
  return (
    <button className={`flex h-11 items-center justify-between rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-5 font-inter text-[14px] text-ph-azure11/70 dark:text-ph-zircon/70 hover:border-[rgba(23,26,32,0.16)] dark:border-white/[0.16] ${className}`}>
      <span>{label}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/40 dark:text-ph-zircon/40">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}

function IconBtn({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] text-ph-azure11/55 dark:text-ph-zircon/55 hover:text-ph-azure11 dark:hover:text-ph-zircon" aria-label={label}>
      {children}
    </button>
  );
}

const jobs = [
  {
    id: "CABIN-e5c7",
    title: "Rodeo Dr, Beverly Hills, CA, USA",
    contact: "Hasta Manana",
    date: "5/12/2026",
    time: "3:00 PM - 5:00 PM",
    status: "To Do",
    assignee: "Unassigned",
    created: "5/11/2026",
  },
];

export default async function ClientJobsPage({ params }: { params: Promise<{ client: string }> }) {
  const { client } = await params;
  const clientName = decodeURIComponent(client).replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="mx-auto max-w-[1280px] px-8 pt-10">
      <div className="flex items-start justify-between">
        <div>
          <Breadcrumb client={clientName} />
          <h1 className="mt-6 font-manrope text-[40px] font-bold leading-[44px] tracking-[-1.2px] text-ph-azure11 dark:text-ph-zircon">Jobs</h1>
          <p className="mt-1 font-inter text-[14px] text-ph-azure11/55 dark:text-ph-zircon/55">Manage client jobs and tasks</p>
        </div>
        <Link
          href={`/app/clients/${client}/jobs/${jobs[0].id.toLowerCase()}`}
          className="flex items-center gap-2 rounded-full bg-ph-azure11 px-5 py-3 font-inter text-[14px] font-semibold text-white hover:bg-black"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Create Job
        </Link>
      </div>

      {/* Filter card */}
      <div className="mt-8 rounded-[20px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] p-5 shadow-[0_2px_8px_rgba(23,26,32,0.04)]">
        <div className="grid grid-cols-[1fr_1fr_2fr_1fr] gap-4">
          <Select label="Status" />
          <Select label="Assignee" />
          <div className="relative">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="absolute left-5 top-1/2 -translate-y-1/2 text-ph-azure11/40 dark:text-ph-zircon/40">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search jobs..."
              className="h-11 w-full rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] pl-12 pr-12 font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon placeholder:text-ph-azure11/40 dark:placeholder:text-ph-zircon/40/40 focus:border-[rgba(23,26,32,0.16)] dark:border-white/[0.16] focus:outline-none"
            />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-5 top-1/2 -translate-y-1/2 text-ph-azure11/40 dark:text-ph-zircon/40">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
          <Select label="Created By" />
        </div>

        <div className="mt-4 grid grid-cols-[1fr_2fr_auto] items-center gap-4">
          <label className="flex items-center gap-2 font-inter text-[14px] text-ph-azure11/70 dark:text-ph-zircon/70">
            <input type="checkbox" className="h-4 w-4 rounded border-ph-azure11/30" />
            From Google Calendar
          </label>
          <button className="flex h-11 items-center gap-2 rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-5 font-inter text-[14px] text-ph-azure11/70 dark:text-ph-zircon/70">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>Date Range</span>
          </button>
          <div className="flex gap-2">
            <IconBtn label="Refresh">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
            </IconBtn>
            <IconBtn label="Clear">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </IconBtn>
            <IconBtn label="Download">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </IconBtn>
          </div>
        </div>
      </div>

      {/* Jobs table */}
      <div className="mt-6 overflow-hidden rounded-[20px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] shadow-[0_2px_8px_rgba(23,26,32,0.04)]">
        <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1.2fr_0.8fr_1fr_0.8fr] gap-4 border-b border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-6 py-4 font-inter text-[11px] font-bold uppercase tracking-[1.2px] text-ph-azure11/55 dark:text-ph-zircon/55">
          <span>Property ID</span>
          <span>Title</span>
          <span>Client Name</span>
          <span>Appointment Date</span>
          <span>Appointment Time</span>
          <span>Status</span>
          <span>Assignee</span>
          <span>Created</span>
        </div>
        {jobs.map((job) => (
          <Link
            key={job.id}
            href={`/app/clients/${client}/jobs/${job.id.toLowerCase()}`}
            className="grid grid-cols-[1fr_2fr_1fr_1fr_1.2fr_0.8fr_1fr_0.8fr] items-center gap-4 px-6 py-5 transition-colors hover:bg-[rgba(23,26,32,0.02)] dark:hover:bg-white/[0.04] dark:bg-white/[0.02]"
          >
            <span className="font-inter text-[13.5px] font-bold text-ph-azure11 dark:text-ph-zircon">{job.id}</span>
            <span className="font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon">{job.title}</span>
            <span className="font-inter text-[14px] text-ph-azure11/80 dark:text-ph-zircon/80">{job.contact}</span>
            <span className="font-inter text-[14px] text-ph-azure11/80 dark:text-ph-zircon/80">{job.date}</span>
            <span className="font-inter text-[14px] text-ph-azure11/80 dark:text-ph-zircon/80">{job.time}</span>
            <span>
              <span className="rounded-full bg-[rgba(23,26,32,0.08)] dark:bg-white/[0.08] px-3 py-1 font-inter text-[12px] font-semibold text-ph-azure11/70 dark:text-ph-zircon/70">{job.status}</span>
            </span>
            <span className="font-inter text-[14px] text-ph-azure11/70 dark:text-ph-zircon/70">{job.assignee}</span>
            <span className="font-inter text-[14px] text-ph-azure11/70 dark:text-ph-zircon/70">{job.created}</span>
          </Link>
        ))}

        <div className="flex items-center justify-end gap-3 border-t border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-6 py-4">
          <span className="font-inter text-[13px] text-ph-azure11/55 dark:text-ph-zircon/55">Records per page:</span>
          <button className="flex items-center gap-1 rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-3 py-1.5 font-inter text-[13px] text-ph-azure11/70 dark:text-ph-zircon/70">
            20
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <span className="font-inter text-[13px] text-ph-azure11/55 dark:text-ph-zircon/55">1-1 of 1</span>
        </div>
      </div>
    </div>
  );
}
