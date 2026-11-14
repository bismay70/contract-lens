import Image from "next/image";

export function LoginPage() {
  return (
    <main className="grid h-screen overflow-hidden bg-[#f5f0e5] text-[#0b3328] lg:grid-cols-2">
      <section className="relative hidden overflow-hidden bg-[#062c22] lg:block">
        <Image
          alt="Bid intelligence keyboard key"
          className="w-full h-auto object-contain"
          width={800}
          height={800}
          priority
          src="/left.png"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,44,34,0.02),rgba(6,44,34,0.24))]" />
      </section>

<section className="flex min-h-0 items-center justify-center overflow-y-auto px-8 py-6">
  <div className="w-full max-w-[430px]">
<h1 className="whitespace-nowrap text-[clamp(1.8rem,3vw,2.8rem)] font-black leading-none tracking-[-0.045em]">
  Access ContractLens
</h1>

    <p className="mt-3 text-sm font-medium">
      Don&apos;t have an enterprise account?{" "}
      <a className="font-black underline" href="#">
        Request access
      </a>
    </p>

    <form className="mt-6 grid gap-4">
      <Field label="Work Email" placeholder="Enter work email" value="name@company.com" />
      <Field label="Password" placeholder="Enter password" type="password" />
      <Field
        label="Enterprise Domain"
        placeholder="company.contractlens.com"
        value="company.contractlens.com"
      />
      <Field label="Workspace Key" placeholder="Password" type="password" />

      <label className="flex items-center gap-3 text-sm font-medium">
        <span className="grid size-5 place-items-center rounded bg-[#0b3328] text-xs text-white">
          Y
        </span>
        Remember this workspace
      </label>

      <button
        className="flex items-center justify-center gap-3 rounded-lg bg-[#0b3328] px-6 py-3.5 text-base font-black text-[#d7ff54]"
        type="button"
      >
        Sign In to Workspace <span>&gt;</span>
      </button>
    </form>

    <div className="my-5 flex items-center gap-4 text-sm text-[#5b6c61]">
      <span className="h-px flex-1 bg-[#d8d0c2]" />
      Or continue with SSO
      <span className="h-px flex-1 bg-[#d8d0c2]" />
    </div>

    <button
      aria-label="Continue with Google authentication"
      className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#0b3328] bg-[#f5f0e5] px-6 py-3.5 text-base font-black transition hover:bg-[#fffaf0]"
      type="button"
    >
      <span className="grid size-6 place-items-center rounded-full bg-white text-lg font-black text-[#4285f4] shadow-sm">
        G
      </span>
      Continue with Google
    </button>

    <button
      aria-label="Continue with enterprise single sign-on"
      className="mt-3 flex w-full items-center justify-center rounded-lg border border-[#c9c0b3] bg-transparent px-6 py-3 text-sm font-bold text-[#0b3328] transition hover:border-[#0b3328]"
      type="button"
    >
      Enterprise SSO
    </button>
  </div>
</section>
    </main>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
}) {
  return (
    <label className="relative block">
      <span className="absolute -top-2 left-4 bg-[#f5f0e5] px-1 text-xs font-medium">
        {label}
      </span>
      <input
        className="h-14 w-full rounded-lg border border-[#0b3328] bg-[#f5f0e5] px-4 pt-2 text-base outline-none transition focus:border-[#a8f137] focus:shadow-[0_0_0_3px_rgba(215,255,84,0.45)]"
        defaultValue={value}
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}
