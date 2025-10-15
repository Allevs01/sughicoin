import React from "react";
import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Copy, CheckCircle2, Twitter, Send, Globe, Trophy, Flame, Coins, Shield, Rocket, Link as LinkIcon } from "lucide-react";

// ✅ Replace these placeholders
const PUMP_FUN_URL = "https://pump.fun/coin/PASTE_YOUR_SUGO_MINT_HERE"; // <- paste your Pump.fun coin URL
const SUGO_MINT = "PASTE_YOUR_SUGO_MINT_ADDRESS"; // <- paste your token mint/contract address
const TELEGRAM_URL = "https://t.me/sughicoin"; // <- or your channel link
const TWITTER_URL = "https://x.com/sughicoin"; // <- your X/Twitter handle
const DISCORD_URL = "https://discord.gg/"; // <- optional
const DEXS_URL = "https://www.dexscreener.com/"; // <- direct pair link when available

export default function SughiCoinLanding() {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SUGO_MINT);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  // Simple scroll shadow for header
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className={`sticky top-0 z-40 bg-white/80 backdrop-blur ${scrolled ? "shadow" : ""}`}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">🍝</span>
            <span className="font-extrabold text-xl tracking-tight">SughiCoin</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#buy" className="hover:text-gray-700">Buy</a>
            <a href="#tokenomics" className="hover:text-gray-700">Tokenomics</a>
            <a href="#roadmap" className="hover:text-gray-700">Roadmap</a>
            <a href="#faq" className="hover:text-gray-700">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm hover:bg-gray-100"><Rocket className="h-4 w-4"/>Buy on Pump.fun</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Il <span className="text-orange-600">meme coin</span> più <span className="underline decoration-wavy decoration-orange-500">saporito</span> d'Italia 🍅
            </h1>
            <p className="mt-5 text-lg text-gray-700">
              SUGO (SughiCoin) nasce per celebrare la <em>pummarola</em> nazionale: ironia, community e un tocco di basilico. Zero promesse assurde, solo puro divertimento.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-5 py-3 text-white font-semibold hover:opacity-90">
                Buy on Pump.fun <ArrowRight className="h-4 w-4"/>
              </a>
              <a href="#tokenomics" className="inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 font-semibold hover:bg-gray-100">
                Learn more <ExternalLink className="h-4 w-4"/>
              </a>
            </div>
            {/* Contract box */}
            <div className="mt-6 rounded-2xl border bg-white p-4">
              <div className="text-xs uppercase text-gray-500">Contract / Mint</div>
              <div className="mt-1 flex items-center gap-3">
                <code className="text-sm break-all font-mono">{SUGO_MINT}</code>
                <button onClick={handleCopy} className="ml-auto inline-flex items-center gap-1 rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-100">
                  {copied ? <CheckCircle2 className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a aria-label="Twitter" href={TWITTER_URL} target="_blank" rel="noreferrer" className="rounded-xl border p-2 hover:bg-gray-100"><Twitter className="h-5 w-5"/></a>
              <a aria-label="Telegram" href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="rounded-xl border p-2 hover:bg-gray-100"><Send className="h-5 w-5"/></a>
              <a aria-label="Discord" href={DISCORD_URL} target="_blank" rel="noreferrer" className="rounded-xl border p-2 hover:bg-gray-100">💬</a>
              <a aria-label="Website" href="#" className="rounded-xl border p-2 hover:bg-gray-100"><Globe className="h-5 w-5"/></a>
            </div>
          </div>

          {/* Right hero card */}
          <div>
            <div className="relative rounded-3xl border bg-white p-6 shadow-sm">
              <div className="absolute -top-4 -left-4 rotate-[-8deg] rounded-xl bg-orange-500 px-3 py-1 text-white text-sm font-bold shadow">$SUGO</div>
              <img alt="SughiCoin bowl" src="https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1200&auto=format&fit=crop" className="rounded-2xl"/>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border p-3">
                  <Flame className="mx-auto h-5 w-5"/>
                  <div className="mt-1 text-xs text-gray-500">Chain</div>
                  <div className="font-semibold text-sm">Solana</div>
                </div>
                <div className="rounded-2xl border p-3">
                  <Coins className="mx-auto h-5 w-5"/>
                  <div className="mt-1 text-xs text-gray-500">Ticker</div>
                  <div className="font-semibold text-sm">SUGO</div>
                </div>
                <div className="rounded-2xl border p-3">
                  <Shield className="mx-auto h-5 w-5"/>
                  <div className="mt-1 text-xs text-gray-500">LP</div>
                  <div className="font-semibold text-sm">Locked*</div>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500">*Nota: aggiornare quando il locking LP è confermato. Nessuna garanzia, DYOR.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to buy */}
      <section id="buy" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Come comprare SUGO</h2>
          <p className="mt-2 text-gray-600">Passi semplici su Solana tramite Pump.fun</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {title:"Crea un wallet",desc:"Usa Phantom o Solflare. Salva la seed phrase in modo sicuro."},
            {title:"Acquista SOL",desc:"Compra SOL sull’exchange o via on-ramp e trasferiscili al wallet."},
            {title:"Compra su Pump.fun",desc:"Apri il link di SUGO e conferma lo swap. Facile come buttare la pasta."},
          ].map((s,i)=> (
            <div key={i} className="rounded-2xl border bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-orange-100 flex items-center justify-center font-bold">{i+1}</div>
                <div className="font-semibold">{s.title}</div>
              </div>
              <p className="mt-3 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-orange-600 px-5 py-3 text-white font-semibold hover:opacity-90">
            Vai a Pump.fun <ExternalLink className="h-4 w-4"/>
          </a>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Tokenomics — semplice come un sugo al pomodoro</h2>
          <p className="mt-2 text-gray-600">Trasparente, senza ingredienti segreti.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {[{icon:Trophy,label:"Supply",value:"1,000,000,000 SUGO"},{icon:Shield,label:"LP",value:"Lock / Burn LP (aggiorna)"},{icon:Rocket,label:"Crescita",value:"Fondo marketing 0–5% (opzionale)"},{icon:Coins,label:"Tasse",value:"0% buy / 0% sell"}].map((c, i)=> (
            <div key={i} className="rounded-2xl border bg-white p-6 text-center">
              <c.icon className="mx-auto h-6 w-6"/>
              <div className="mt-2 text-xs uppercase text-gray-500">{c.label}</div>
              <div className="font-semibold">{c.value}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">Aggiorna questi numeri quando il lancio è definitivo su Pump.fun o dopo il migration to AMM.</p>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Roadmap (satirica ma possibile)</h2>
          <p className="mt-2 text-gray-600">Fase 1: soffritto. Fase 2: sfumare. Fase 3: spaghettata globale.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {t:"Fase 1 — Mise en place",d:"Lancio su Pump.fun, social live, prime meme challenge."},
            {t:"Fase 2 — Sugo si addensa",d:"LP lock/burn, listing su tracker, mini-website (questo)."},
            {t:"Fase 3 — Condisci tutto",d:"Merch, community treasury, mini hackathon di ricette su Solana."},
          ].map((r,i)=> (
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
          <p className="mt-2 text-gray-600">Domande frequenti prima di buttare la pasta.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[ 
            {q:"È un invito all'investimento?", a:"No. È intrattenimento/meme. Nessuna garanzia. Fai sempre le tue ricerche (DYOR)."},
            {q:"Team doxxed?", a:"Progetto community-first. Condivideremo info rilevanti sui social ufficiali."},
            {q:"Dove vedo il grafico?", a:"Dopo il lancio/amm, usa DexScreener o similari (link sopra quando disponibile)."},
            {q:"Commissioni?", a:"Su SUGO 0%/0% al momento. Eventuali cambi saranno annunciati pubblicamente."},
          ].map((f,i)=> (
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
          <h3 className="text-2xl md:text-3xl font-extrabold">Pronto a condire il portafoglio?</h3>
          <p className="mt-2 text-gray-600">Un click e sei sulla pagina di acquisto.</p>
          <div className="mt-5 flex justify-center">
            <a href={PUMP_FUN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-white font-semibold hover:opacity-90">
              Buy SUGO <ArrowRight className="h-4 w-4"/>
            </a>
          </div>
          <div className="mt-4 text-xs text-gray-500">Disclaimer: il contenuto è solo a scopo informativo/artistico. Le crypto sono ad alto rischio.</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">🍝</span>
              <span className="font-semibold">SughiCoin</span>
            </div>
            <div className="flex items-center gap-3">
              <a href={TWITTER_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-gray-800"><Twitter className="h-4 w-4"/>Twitter</a>
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-gray-800"><Send className="h-4 w-4"/>Telegram</a>
              <a href={DEXS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-gray-800"><LinkIcon className="h-4 w-4"/>DexScreener</a>
            </div>
            <div>© {new Date().getFullYear()} SughiCoin. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
