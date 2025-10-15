"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Copy,
  CheckCircle2,
  Twitter,
  Send,
  Globe,
  Trophy,
  Flame,
  Coins,
  Shield,
  Rocket,
  Link as LinkIcon,
} from "lucide-react";

// ✅ Replace these placeholders with your real data
const PUMP_FUN_URL: string = "https://pump.fun/coin/7KNk3QRPDwia1ZFXgb5pMQ5R3JxBTK99XAr8pW6Dpump"; // <- direct link to your coin on Pump.fun
const SUGO_MINT: string = "7KNk3QRPDwia1ZFXgb5pMQ5R3JxBTK99XAr8pW6Dpump"; // <- token mint/contract (Solana)
const TELEGRAM_URL: string = "https://t.me/sughicoin"; // <- optional
const TWITTER_URL: string = "https://x.com/sughicoin"; // <- optional
const DISCORD_URL: string = "https://discord.gg/"; // <- optional
const DEXS_URL: string = "https://www.dexscreener.com/"; // <- update with your pair when available

// 🖼️ Logo path (put the image file in /public/). Spaces are URL-encoded to avoid 404s.
const LOGO_SRC: string = "/WhatsApp%20Image%202025-10-15%20at%2016.47.48.jpeg";

export default function Page() {
  const [copied, setCopied] = useState<boolean>(false);
  const handleCopy = async (): Promise<void> => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(SUGO_MINT);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }
    } catch {
      // no-op
    }
  };

  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header
        className={`sticky top-0 z-40 bg-white/80 backdrop-blur ${
          scrolled ? "shadow" : ""
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img
              src={LOGO_SRC}
              alt="SughiCoin logo"
              width={36}
              height={36}
              className="rounded-full border"
              loading="lazy"
              decoding="async"
            />
            <span className="font-extrabold text-xl tracking-tight">SughiCoin</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#buy" className="hover:text-gray-700">
              Buy
            </a>
            <a href="#tokenomics" className="hover:text-gray-700">
              Tokenomics
            </a>
            <a href="#roadmap" className="hover:text-gray-700">
              Roadmap
            </a>
            <a href="#faq" className="hover:text-gray-700">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={PUMP_FUN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm hover:bg-gray-100"
            >
              <Rocket className="h-4 w-4" />Buy on Pump.fun
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-gray-50"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Italy's most <span className="text-orange-600">flavorful</span>
              <span className="underline decoration-wavy decoration-orange-500"> meme coin</span> 
            </h1>
            <p className="mt-5 text-lg text-gray-700">
              SUGO (SughiCoin) celebrates the national <em>pummarola</em>: humor,
              community, and a leaf of basil. No crazy promises — just pure fun.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={PUMP_FUN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-5 py-3 text-white font-semibold hover:opacity-90"
              >
                Buy on Pump.fun <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#tokenomics"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 font-semibold hover:bg-gray-100"
              >
                Learn more <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            {/* Contract box */}
            <div className="mt-6 rounded-2xl border bg-white p-4">
              <div className="text-xs uppercase text-gray-500">Contract / Mint</div>
              <div className="mt-1 flex items-center gap-3">
                <code className="text-sm break-all font-mono">{SUGO_MINT}</code>
                <button
                  onClick={handleCopy}
                  className="ml-auto inline-flex items-center gap-1 rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-100"
                >
                  {copied ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
            {/* Socials */}
            {/* Socials */}
<div className="mt-6">
  <div className="flex items-center gap-3">
    <a
      aria-label="Twitter"
      href={TWITTER_URL}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border p-2 hover:bg-gray-100"
    >
      <Twitter className="h-5 w-5" />
    </a>
    <a
      aria-label="Telegram"
      href={TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border p-2 hover:bg-gray-100"
    >
      <Send className="h-5 w-5" />
    </a>
    <a
      aria-label="Discord"
      href={DISCORD_URL}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border p-2 hover:bg-gray-100"
    >
      💬
    </a>
    <a
      aria-label="Website"
      href="#"
      className="rounded-xl border p-2 hover:bg-gray-100"
    >
      <Globe className="h-5 w-5" />
    </a>
  </div>
  <p className="mt-2 text-xs text-gray-500 italic">Coming soon</p>
</div>
          </div>

          {/* Right hero card — show big logo */}
          <div className="flex justify-center">
            <img
              src={LOGO_SRC}
              alt="SughiCoin logo large"
              width={420}
              height={420}
              className="rounded-3xl border shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* How to buy */}
      <section id="buy" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            How to buy SUGO
          </h2>
          <p className="mt-2 text-gray-600">Simple steps on Solana via Pump.fun</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Create a wallet",
              desc: "Use Phantom or Solflare. Store your seed phrase safely.",
            },
            {
              title: "Get SOL",
              desc: "Buy SOL on an exchange or on-ramp and transfer to your wallet.",
            },
            {
              title: "Buy on Pump.fun",
              desc: "Open the SUGO link and confirm the swap. Easy like cooking pasta.",
            },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-orange-100 flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div className="font-semibold">{s.title}</div>
              </div>
              <p className="mt-3 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href={PUMP_FUN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-orange-600 px-5 py-3 text-white font-semibold hover:opacity-90"
          >
            Go to Pump.fun <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Tokenomics — as simple as tomato sauce
          </h2>
          <p className="mt-2 text-gray-600">Transparent, with no secret ingredients.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {[
            { icon: Trophy, label: "Supply", value: "a lot of SUGO, I don't know the exact number" },
            { icon: Shield, label: "LP", value: "Actually we don't have any power on this" },
            { icon: Rocket, label: "Growth", value: "Marketing and a lot of sugo" },
            { icon: Coins, label: "Fees", value: "actually the pump.fun ones, possibly 0% buy / 0% sell" },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6 text-center">
              <c.icon className="mx-auto h-6 w-6" />
              <div className="mt-2 text-xs uppercase text-gray-500">{c.label}</div>
              <div className="font-semibold">{c.value}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          Note: no presale, no team tokens, no vesting. Fair launch on Pump.fun.
        </p>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Roadmap (satirical yet possible)
          </h2>
          <p className="mt-2 text-gray-600">
            Phase 1: soffritto. Phase 2: simmer. Phase 3: global spaghetti party.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Phase 1 — Mise en place",
              d: "Launch on Pump.fun, social kickoff, first meme challenges.",
            },
            {
              t: "Phase 2 — Sauce thickens",
              d: "LP lock/burn, listings on trackers, mini-website (this).",
            },
            {
              t: "Phase 3 — Season everything",
              d: "Merch, community treasury, mini Solana recipe hackathon.",
            },
          ].map((r, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6">
              <div className="font-semibold">{r.t}</div>
              <p className="mt-2 text-gray-600 text-sm">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">FAQ</h2>
          <p className="mt-2 text-gray-600">Things to know before you boil the pasta.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            {
              q: "Is this financial advice?",
              a: "No. It's entertainment/meme. No guarantees. Always DYOR.",
            },
            {
              q: "Is the team doxxed?",
              a: "We sold all tokens. Community-first project. We'll share relevant info on official socials.",
            },
            {
              q: "Where's the chart?",
              a: "After launch/AMM, use DexScreener or similar (link above when available).",
            },
            {
              q: "Any taxes?",
              a: "The pump.fun commission is low. We keep SUGO fees at 0% buy/sell. We will use commission for marketing if needed.",
            },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6">
              <div className="font-semibold">{f.q}</div>
              <p className="mt-2 text-gray-600 text-sm">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border bg-gradient-to-br from-orange-50 to-white p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold">Ready to sauce your wallet?</h3>
          <p className="mt-2 text-gray-600">One click and you're on the buy page.</p>
          <div className="mt-5 flex justify-center">
            <a
              href={PUMP_FUN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white font-semibold hover:opacity-90"
            >
              Buy SUGO <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            Disclaimer: content is for informational/artistic purposes only. Crypto is high risk.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <img
                src={LOGO_SRC}
                alt="SughiCoin logo small"
                width={24}
                height={24}
                className="rounded-full border"
                loading="lazy"
                decoding="async"
              />
              <span className="font-semibold">SughiCoin</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-gray-800"
              >
                <Twitter className="h-4 w-4" />Twitter
              </a>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-gray-800"
              >
                <Send className="h-4 w-4" />Telegram
              </a>
              <a
                href={DEXS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-gray-800"
              >
                <LinkIcon className="h-4 w-4" />DexScreener
              </a>
            </div>
            <div>© {new Date().getFullYear()} SughiCoin. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
