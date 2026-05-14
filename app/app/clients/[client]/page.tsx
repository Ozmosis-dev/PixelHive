import Link from "next/link";

function Breadcrumb({ client }: { client: string }) {
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
      <span className="text-ph-azure11 dark:text-ph-zircon">{client}</span>
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

type JobStatus = "To Do" | "In Progress" | "Editing" | "QC Review" | "Completed" | "Cancelled";

const jobs: Array<{
  id: string;
  title: string;
  contact: string;
  date: string;
  time: string;
  status: JobStatus;
  assignee: string;
  created: string;
}> = [
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
  {
    id: "CABIN-a14d",
    title: "Sunset Blvd, West Hollywood",
    contact: "Ari Lennox",
    date: "5/10/2026",
    time: "10:00 AM - 12:00 PM",
    status: "In Progress",
    assignee: "Megan T.",
    created: "5/08/2026",
  },
  {
    id: "CABIN-b27f",
    title: "Mulholland Dr, Studio City",
    contact: "Drew K.",
    date: "5/09/2026",
    time: "1:00 PM - 3:00 PM",
    status: "Editing",
    assignee: "Sasha L.",
    created: "5/06/2026",
  },
  {
    id: "CABIN-c93b",
    title: "Ocean Ave, Santa Monica",
    contact: "Riley B.",
    date: "5/08/2026",
    time: "9:00 AM - 11:00 AM",
    status: "QC Review",
    assignee: "Jordan P.",
    created: "5/05/2026",
  },
  {
    id: "CABIN-d44a",
    title: "Vine St, Hollywood",
    contact: "Tess M.",
    date: "5/05/2026",
    time: "4:00 PM - 5:30 PM",
    status: "Completed",
    assignee: "Megan T.",
    created: "5/02/2026",
  },
  {
    id: "CABIN-f01e",
    title: "Wilshire Blvd, Mid-Wilshire",
    contact: "Olive R.",
    date: "5/03/2026",
    time: "2:00 PM - 3:00 PM",
    status: "Cancelled",
    assignee: "Unassigned",
    created: "5/01/2026",
  },
];

const statusStyles: Record<JobStatus, { bg: string; text: string; dot: string; border: string }> = {
  "To Do": {
    bg: "bg-ph-azure11/8 dark:bg-white/[0.08]",
    text: "text-ph-azure11/80 dark:text-ph-zircon/80",
    dot: "bg-ph-azure11/40 dark:bg-white/40",
    border: "border-ph-azure11/10 dark:border-white/[0.10]",
  },
  "In Progress": {
    bg: "bg-sky-500/12",
    text: "text-sky-600 dark:text-sky-400",
    dot: "bg-sky-500",
    border: "border-sky-500/25",
  },
  "Editing": {
    bg: "bg-ph-accent/15",
    text: "text-[#B07A00] dark:text-ph-accent",
    dot: "bg-ph-accent",
    border: "border-ph-accent/30",
  },
  "QC Review": {
    bg: "bg-violet-500/12",
    text: "text-violet-600 dark:text-violet-400",
    dot: "bg-violet-500",
    border: "border-violet-500/25",
  },
  "Completed": {
    bg: "bg-emerald-500/12",
    text: "text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
    border: "border-emerald-500/25",
  },
  "Cancelled": {
    bg: "bg-rose-500/10",
    text: "text-rose-500 dark:text-rose-400",
    dot: "bg-rose-500",
    border: "border-rose-500/25",
  },
};

function StatusBadge({ status }: { status: JobStatus }) {
  const s = statusStyles[status];
  return (
    <span className={`inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 font-inter text-[11.5px] font-semibold ${s.bg} ${s.text} ${s.border}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}

export default async function ClientJobsPage({ params }: { params: Promise<{ client: string }> }) {
  const { client } = await params;
  const clientName = decodeURIComponent(client).replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="mx-auto max-w-[1280px] px-8 pt-10 pb-16">
      {/* Hero card — matches review-queue / feature-requests pattern */}
      <div
        className="rounded-[20px] border border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-8 py-10 shadow-[0_2px_8px_rgba(23,26,32,0.04)]"
        style={{
          backgroundImage:
            "radial-gradient(800px 200px at 0 0, rgba(255,194,71,0.10) 0%, rgba(255,194,71,0) 60%)",
        }}
      >
        <Breadcrumb client={clientName} />
        <div className="mt-5 flex items-end justify-between gap-6">
          <div>
            <h1 className="font-manrope text-[44px] font-bold leading-[48px] tracking-[-1.4px] text-ph-azure11 dark:text-ph-zircon">Jobs</h1>
            <p className="mt-2 font-inter text-[15px] text-ph-azure11/55 dark:text-ph-zircon/55">Manage client jobs and tasks</p>
          </div>
          <Link
            href={`/app/clients/${client}/jobs/${jobs[0].id.toLowerCase()}`}
            className="flex items-center gap-2 rounded-full bg-ph-azure11 dark:bg-ph-accent px-5 py-3 font-inter text-[14px] font-semibold text-white dark:text-ph-azure11 hover:bg-black dark:hover:bg-ph-yellow-mid transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Create Job
          </Link>
        </div>
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

        <div className="mt-4 grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <button className="group flex h-11 items-center gap-2.5 rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-5 font-inter text-[14px] text-ph-azure11/80 dark:text-ph-zircon/80 hover:border-[rgba(23,26,32,0.16)] dark:hover:border-white/[0.16] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="text-ph-azure11/55 dark:text-ph-zircon/55">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <circle cx="8" cy="15" r="1.25" fill="currentColor" stroke="none" />
            </svg>
            <span>From Google Calendar</span>
            <span className="ml-1 inline-flex h-5 items-center rounded-full bg-ph-accent/15 px-2 font-inter text-[10.5px] font-bold uppercase tracking-[0.6px] text-[#B07A00] dark:text-ph-accent">
              Off
            </span>
          </button>
          <button className="flex h-11 items-center gap-2 rounded-full border border-[rgba(23,26,32,0.08)] dark:border-white/[0.08] bg-white dark:bg-[#10151D] px-5 font-inter text-[14px] text-ph-azure11/70 dark:text-ph-zircon/70 hover:border-[rgba(23,26,32,0.16)] dark:hover:border-white/[0.16] transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>Date Range</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 text-ph-azure11/40 dark:text-ph-zircon/40">
              <polyline points="6 9 12 15 18 9" />
            </svg>
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
        <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1.2fr_1.2fr_1fr_0.8fr] gap-4 border-b border-[rgba(23,26,32,0.06)] dark:border-white/[0.08] px-6 py-4 font-inter text-[11px] font-bold uppercase tracking-[1.2px] text-ph-azure11/55 dark:text-ph-zircon/55">
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
            className="grid grid-cols-[1fr_2fr_1fr_1fr_1.2fr_1.2fr_1fr_0.8fr] items-center gap-4 px-6 py-5 transition-colors hover:bg-[rgba(23,26,32,0.02)] dark:hover:bg-white/[0.04] dark:bg-white/[0.02]"
          >
            <span className="font-inter text-[13.5px] font-bold text-ph-azure11 dark:text-ph-zircon">{job.id}</span>
            <span className="font-inter text-[14px] text-ph-azure11 dark:text-ph-zircon">{job.title}</span>
            <span className="font-inter text-[14px] text-ph-azure11/80 dark:text-ph-zircon/80">{job.contact}</span>
            <span className="font-inter text-[14px] text-ph-azure11/80 dark:text-ph-zircon/80">{job.date}</span>
            <span className="font-inter text-[14px] text-ph-azure11/80 dark:text-ph-zircon/80">{job.time}</span>
            <span>
              <StatusBadge status={job.status} />
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
          <span className="font-inter text-[13px] text-ph-azure11/55 dark:text-ph-zircon/55">1-{jobs.length} of {jobs.length}</span>
        </div>
      </div>
    </div>
  );
}
