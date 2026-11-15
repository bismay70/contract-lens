"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export function LoginPage() {

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  async function handleGoogleLogin() {
    try {
      setError("");
      setLoading(true);
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError("Failed to log in with Google.");
    } finally {
      setLoading(false);
    }
  }

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
        <span className="grid size-5 place-items-center rounded border border-[#0b3328]">
          <input type="checkbox" />
        </span>
        Remember this workspace
      </label>

      <button
        className="flex items-center justify-center gap-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:cursor-pointer rounded-lg bg-[#0b3328] px-6 py-3.5 text-base font-black text-[#d7ff54]"
        type="button"
      >
        Sign In to Workspace 
      </button>
    </form>

    {/* <span>&gt;</span> */}

    <div className="my-5 flex items-center gap-4 text-sm text-[#5b6c61]">
      <span className="h-px flex-1 bg-[#d8d0c2]" />
      Or continue with SSO
      <span className="h-px flex-1 bg-[#d8d0c2]" />
    </div>

        <button
  disabled={loading}
  onClick={handleGoogleLogin}
  className="w-full flex items-center justify-center gap-3 px-5 py-3.5 hover:cursor-pointer rounded-xl text-[#a8ff2f] font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0b4a32]"
  style={{
    fontFamily: "'Inter', sans-serif",
    background: "#073a28",
    border: "1px solid rgba(168,255,47,0.35)",
  }}
>
  {loading ? (
    <span className="w-5 h-5 border-2 border-[#a8ff2f]/30 border-t-[#a8ff2f] rounded-full animate-spin" />
  ) : (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )}
  {loading ? "Entering the realm..." : "Continue with Google"}
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
