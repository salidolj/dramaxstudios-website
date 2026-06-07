'use client';
import React, { useState } from 'react';
import { Mail, Globe, Zap, Smartphone } from 'lucide-react';

export default function DramaXStudios() {
  const [expandedSeries, setExpandedSeries] = useState(null);
  const [formStatus, setFormStatus] = useState('');

  const seriesData = [
    { id: 1, title: 'Love Unscripted', genre: 'Romance', retention: 52, views: 12400, image: '🎬' },
    { id: 2, title: 'Hidden Heir', genre: 'Thriller', retention: 48, views: 9800, image: '🎭' },
    { id: 3, title: 'After Dark', genre: 'Drama', retention: 55, views: 15200, image: '🌙' },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Enviando...');
    // Formspree endpoint (cambiar {form_id} después)
    setTimeout(() => {
      setFormStatus('¡Mensaje enviado! Te contactaremos pronto.');
      e.target.reset();
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4">DramaX Studios</h1>
        <p className="text-xl text-slate-300">AI-native vertical drama studio · Spanish-first</p>
        <p className="mt-4 max-w-2xl mx-auto text-slate-400">
          Producing cinematic microdramas for the LATAM market. Multi-platform distribution, premium content.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={() => document.getElementById('slate').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            View Series
          </button>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition"
          >
            License Content
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-6 max-w-3xl mx-auto text-center py-12">
        <div><p className="text-3xl font-bold">90%+</p><p className="text-slate-400">Footage usable</p></div>
        <div><p className="text-3xl font-bold">3</p><p className="text-slate-400">Genres validated</p></div>
        <div><p className="text-3xl font-bold">LATAM</p><p className="text-slate-400">Market focus</p></div>
      </section>

      {/* Slate de Series */}
      <section id="slate" className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-2">Series Validated</h2>
        <p className="text-slate-400 mb-8">Metrics from production and distribution</p>
        <div className="grid md:grid-cols-3 gap-6">
          {seriesData.map((series) => (
            <div
              key={series.id}
              onClick={() => setExpandedSeries(expandedSeries === series.id ? null : series.id)}
              className="bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-lg p-6 cursor-pointer transition"
            >
              <div className="text-4xl mb-3">{series.image}</div>
              <h3 className="text-xl font-semibold">{series.title}</h3>
              <p className="text-slate-400">{series.genre}</p>
              <p className="mt-2 text-sm">Retención {series.retention}%</p>
              <p className="text-sm">Vistas {(series.views / 1000).toFixed(1)}K</p>
              {expandedSeries === series.id && (
                <div className="mt-4">
                  <p className="text-sm text-slate-300">
                    Distribución en Facebook Reels, TikTok Series y WhatsApp Business Club.
                  </p>
                  <button className="mt-3 px-4 py-2 bg-blue-600 rounded-lg text-sm">License This</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <Zap className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2">AI-Native Production</h3>
            <p className="text-slate-400 text-sm">
              Seedance 2.0, Kling 3.0, ElevenLabs. Production-grade tools that deliver 90%+ usable footage
              without the traditional studio overhead.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <Globe className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Spanish-First, LATAM</h3>
            <p className="text-slate-400 text-sm">
              176M installations, 6x growth YoY. Spanish-language premium content is undersupplied.
              We own that market.
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <Smartphone className="w-8 h-8 text-blue-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Multi-Platform</h3>
            <p className="text-slate-400 text-sm">
              Facebook Reels, TikTok Series, YouTube Shorts, Instagram, WhatsApp Business,
              licensing to ReelShort/DramaBox.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8">About DramaX</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-3">Studio Structure</h3>
            <p className="text-slate-400 text-sm mb-2">Legal Entity: DramaX LLC, incorporated in Wyoming, USA.</p>
            <p className="text-slate-400 text-sm mb-2">Operations: Culiacán, Sinaloa, Mexico.</p>
            <p className="text-slate-400 text-sm">
              Focus: Microdrama production for Spanish-language vertical markets. Romance, thriller, drama, true crime.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Team</h3>
            <p className="text-slate-400 text-sm mb-2">Luis Javier Salido — Executive Producer, Creative Direction</p>
            <p className="text-slate-400 text-sm mb-2">Showrunner/Writer — Series development, script quality</p>
            <p className="text-slate-400 text-sm mb-2">Pipeline Operator — AI production, video/audio synthesis</p>
            <p className="text-slate-400 text-sm">
              Lean, distributed team. Fast iteration. Platform-first distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-2">License Content</h2>
        <p className="text-slate-400 mb-6">
          Interested in licensing series for your platform? Reach out.
        </p>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <input name="name" type="text" required placeholder="Name"
            className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700" />
          <input name="company" type="text" placeholder="Company"
            className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700" />
          <input name="email" type="email" required placeholder="Email"
            className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700" />
          <textarea name="message" required placeholder="Message"
            className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-700" />
          <button type="submit" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
            Send Message
          </button>
          {formStatus && <p className="text-slate-300">{formStatus}</p>}
        </form>
        <div className="mt-6 text-slate-400 text-sm">
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:ops@dramaxstudios.com" className="hover:text-blue-400">ops@dramaxstudios.com</a>
          </p>
          <p className="mt-2">Based in Tucson, AZ, USA · Registered in Wyoming, USA</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6 text-center text-slate-500 text-sm">
        <p>© 2026 DramaX LLC. AI-generated content disclosed. All rights reserved.</p>
        <p className="mt-2 flex gap-3 justify-center">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <span>·</span>
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
          <span>·</span>
          <a href="#" className="hover:text-blue-400">AI Disclosure</a>
        </p>
      </footer>
    </main>
  );
}
