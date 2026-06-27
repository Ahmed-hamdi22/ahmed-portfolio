"use client";

interface BackendApiPreviewProps {
  accent: string;
}

const endpoints = [
  "GET /products",
  "POST /auth/login",
  "POST /cart",
  "POST /orders",
  "POST /payments",
];

const badges = ["JWT Auth", "MongoDB", "Stripe-ready", "REST APIs"];

export function BackendApiPreview({ accent }: BackendApiPreviewProps) {
  return (
    <div
      className="group/api relative h-full min-h-[190px] overflow-hidden rounded-[18px] border border-white/[0.10] bg-[#020617] shadow-[0_18px_44px_rgba(2,6,23,0.32)]"
      style={{
        boxShadow: `0 18px 44px rgba(2,6,23,0.32), 0 0 42px ${accent}14`,
      }}
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at 18% 0%, ${accent}20, transparent 34%), linear-gradient(180deg, #06111f 0%, #020617 100%)`,
        }}
      />

      <div className="absolute inset-[10px] overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#0B1120]">
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.035] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#64748B]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#22D3EE]/70" />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: accent }}
            />
          </div>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
            api/routes.ts
          </span>
        </div>

        <div className="relative flex h-[calc(100%-45px)] flex-col justify-between gap-4 p-4">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#94A3B8]">
              REST API
            </p>
            <h4 className="mt-1 text-[16px] font-bold tracking-[-0.02em] text-[#F8FAFC]">
              Node.js / Express / MongoDB
            </h4>
          </div>

          <div className="grid gap-2">
            {endpoints.map((endpoint) => {
              const [method, path] = endpoint.split(" ");

              return (
                <div
                  key={endpoint}
                  className="flex items-center justify-between gap-3 rounded-[10px] border border-white/[0.07] bg-[#020617]/60 px-3 py-2 font-mono text-[11px] transition duration-200 group-hover/api:border-white/[0.12]"
                >
                  <span
                    className="font-bold"
                    style={{ color: method === "GET" ? "#38BDF8" : accent }}
                  >
                    {method}
                  </span>
                  <span className="truncate text-[#CBD5E1]">{path}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border px-2.5 py-1 text-[10px] font-bold text-[#CBD5E1]"
                style={{
                  borderColor: `${accent}35`,
                  backgroundColor: `${accent}10`,
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#020617]/40" />
      </div>
    </div>
  );
}
