type Stat = {
  label: string;
  value: string;
  delta: string;
  deltaTone: "up" | "down" | "flat";
};

type Activity = {
  id: string;
  title: string;
  meta: string;
  tone: "info" | "success" | "warning";
};

type Ticket = {
  id: string;
  subject: string;
  department: string;
  priority: "Low" | "Medium" | "High";
  status: "Open" | "In progress" | "Resolved";
  updated: string;
};

function tonePill(tone: Activity["tone"]) {
  switch (tone) {
    case "success":
      return "bg-emerald-50 text-emerald-700 ring-emerald-600/20";
    case "warning":
      return "bg-amber-50 text-amber-700 ring-amber-600/20";
    default:
      return "bg-sky-50 text-sky-700 ring-sky-600/20";
  }
}

function priorityPill(priority: Ticket["priority"]) {
  switch (priority) {
    case "High":
      return "bg-rose-50 text-rose-700 ring-rose-600/20";
    case "Medium":
      return "bg-amber-50 text-amber-700 ring-amber-600/20";
    default:
      return "bg-slate-50 text-slate-700 ring-slate-600/20";
  }
}

function statusPill(status: Ticket["status"]) {
  switch (status) {
    case "Resolved":
      return "bg-emerald-50 text-emerald-700 ring-emerald-600/20";
    case "In progress":
      return "bg-indigo-50 text-indigo-700 ring-indigo-600/20";
    default:
      return "bg-slate-50 text-slate-700 ring-slate-600/20";
  }
}

export default function AdminDashboard() {
  const stats: Stat[] = [
    { label: "Active users", value: "1,248", delta: "+7.2%", deltaTone: "up" },
    { label: "Open tickets", value: "38", delta: "-12.5%", deltaTone: "down" },
    { label: "Pending approvals", value: "14", delta: "+3", deltaTone: "up" },
    { label: "Uptime (30d)", value: "99.96%", delta: "stable", deltaTone: "flat" },
  ];

  const activity: Activity[] = [
    {
      id: "a1",
      title: "New employee onboarding request created",
      meta: "HR · 6 minutes ago · Ref: ONB-1042",
      tone: "info",
    },
    {
      id: "a2",
      title: "Expense claim approved (NPR 12,450)",
      meta: "Finance · 1 hour ago · Ref: EXP-5521",
      tone: "success",
    },
    {
      id: "a3",
      title: "Inventory threshold reached for Stationery",
      meta: "Procurement · Today · Item: A4 Paper",
      tone: "warning",
    },
  ];

  const tickets: Ticket[] = [
    {
      id: "TCK-2091",
      subject: "Printer not responding on 2nd floor",
      department: "IT Support",
      priority: "Medium",
      status: "In progress",
      updated: "10m ago",
    },
    {
      id: "TCK-2084",
      subject: "Access request: MIS reports",
      department: "Admin",
      priority: "High",
      status: "Open",
      updated: "2h ago",
    },
    {
      id: "TCK-2079",
      subject: "Reimbursement delay inquiry",
      department: "Finance",
      priority: "Low",
      status: "Resolved",
      updated: "Yesterday",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Admin Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              MIS overview for operations, approvals, and support.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.5 3.5a5 5 0 104 8.002l2.749 2.749a.75.75 0 101.06-1.06l-2.748-2.75A5 5 0 008.5 3.5zM5 8.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                placeholder="Search tickets, users, requests…"
                className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:w-80"
              />
            </div>

            <div className="flex gap-2">
              <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-slate-500"
                  aria-hidden="true"
                >
                  <path d="M3 4.75A.75.75 0 013.75 4h12.5a.75.75 0 01.75.75V6a.75.75 0 01-.22.53L12 11.31V15a1 1 0 01-1.447.894l-2-1A1 1 0 018 14v-2.69L3.22 6.53A.75.75 0 013 6V4.75z" />
                </svg>
                Filters
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600/30">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                New request
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-600">{s.label}</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-900">
                    {s.value}
                  </p>
                </div>
                <span
                  className={[
                    "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset",
                    s.deltaTone === "up"
                      ? "bg-emerald-50 text-emerald-700 ring-emerald-600/20"
                      : s.deltaTone === "down"
                        ? "bg-rose-50 text-rose-700 ring-rose-600/20"
                        : "bg-slate-50 text-slate-700 ring-slate-600/20",
                  ].join(" ")}
                >
                  {s.delta}
                </span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-indigo-600/70"
                  style={{
                    width:
                      s.label === "Active users"
                        ? "72%"
                        : s.label === "Open tickets"
                          ? "38%"
                          : s.label === "Pending approvals"
                            ? "46%"
                            : "96%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left: Activity + Quick actions */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Quick actions
                </h2>
                <span className="text-xs text-slate-500">Most used</span>
              </div>
              <div className="grid grid-cols-1 gap-2 p-4">
                {[
                  { title: "Approve requests", desc: "Review pending approvals" },
                  { title: "Create user", desc: "Add staff or admin account" },
                  { title: "Generate report", desc: "Export MIS summary" },
                  { title: "Open a ticket", desc: "Log a support issue" },
                ].map((a) => (
                  <button
                    key={a.title}
                    className="group w-full rounded-lg border border-slate-200 bg-white px-3 py-3 text-left shadow-sm hover:bg-slate-50"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-slate-900 group-hover:text-slate-950">
                          {a.title}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-600">
                          {a.desc}
                        </p>
                      </div>
                      <span className="mt-0.5 text-slate-400 group-hover:text-slate-600">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 111.06-1.06l4.24 4.24a.75.75 0 010 1.06l-4.24 4.24a.75.75 0 01-1.06.02z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  Recent activity
                </h2>
                <button className="text-xs font-medium text-indigo-700 hover:text-indigo-600">
                  View all
                </button>
              </div>
              <ul className="divide-y divide-slate-200">
                {activity.map((a) => (
                  <li key={a.id} className="px-4 py-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-slate-900">
                          {a.title}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-600">
                          {a.meta}
                        </p>
                      </div>
                      <span
                        className={[
                          "shrink-0 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset",
                          tonePill(a.tone),
                        ].join(" ")}
                      >
                        {a.tone}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center/Right: Analytics + Tickets */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-3 border-b border-slate-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Operations snapshot
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Placeholder charts (Tailwind only). Plug your data later.
                  </p>
                </div>
                <div className="flex gap-2">
                  {["Today", "7d", "30d"].map((t) => (
                    <button
                      key={t}
                      className={[
                        "rounded-lg px-3 py-1.5 text-xs font-semibold ring-1 ring-inset",
                        t === "7d"
                          ? "bg-indigo-600 text-white ring-indigo-600"
                          : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">
                      Requests volume
                    </p>
                    <span className="text-xs text-slate-600">Last 7 days</span>
                  </div>
                  <div className="mt-3 grid grid-cols-7 items-end gap-2">
                    {[32, 48, 28, 62, 54, 40, 58].map((v, i) => (
                      <div key={i} className="flex flex-col items-center gap-2">
                        <div className="h-20 w-full rounded-md bg-white ring-1 ring-slate-200">
                          <div
                            className="w-full rounded-md bg-indigo-600/80"
                            style={{ height: `${v}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-slate-500">
                          {["M", "T", "W", "T", "F", "S", "S"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">
                      Resolution time
                    </p>
                    <span className="text-xs text-slate-600">Median</span>
                  </div>
                  <div className="mt-3 space-y-3">
                    {[
                      { label: "IT Support", value: 68 },
                      { label: "Finance", value: 54 },
                      { label: "HR", value: 41 },
                      { label: "Admin", value: 33 },
                    ].map((r) => (
                      <div key={r.label}>
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-medium text-slate-700">
                            {r.label}
                          </p>
                          <p className="text-xs text-slate-600">{r.value}h</p>
                        </div>
                        <div className="mt-1 h-2 overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
                          <div
                            className="h-full rounded-full bg-emerald-600/80"
                            style={{ width: `${r.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Latest tickets
                  </h2>
                  <p className="mt-0.5 text-xs text-slate-600">
                    Track support and admin requests at a glance.
                  </p>
                </div>
                <button className="text-xs font-medium text-indigo-700 hover:text-indigo-600">
                  Manage
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      {["Ticket", "Subject", "Dept", "Priority", "Status", "Updated"].map(
                        (h) => (
                          <th
                            key={h}
                            scope="col"
                            className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-slate-700"
                          >
                            {h}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {tickets.map((t) => (
                      <tr key={t.id} className="hover:bg-slate-50">
                        <td className="whitespace-nowrap px-4 py-3 text-sm font-semibold text-slate-900">
                          {t.id}
                        </td>
                        <td className="min-w-[260px] px-4 py-3 text-sm text-slate-700">
                          {t.subject}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-700">
                          {t.department}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <span
                            className={[
                              "rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset",
                              priorityPill(t.priority),
                            ].join(" ")}
                          >
                            {t.priority}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3">
                          <span
                            className={[
                              "rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset",
                              statusPill(t.status),
                            ].join(" ")}
                          >
                            {t.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">
                          {t.updated}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <p className="text-xs text-slate-600">
                  Showing <span className="font-semibold text-slate-900">3</span>{" "}
                  of <span className="font-semibold text-slate-900">38</span>{" "}
                  open tickets
                </p>
                <div className="flex gap-2">
                  <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                    Previous
                  </button>
                  <button className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}