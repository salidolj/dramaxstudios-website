import React, { useState } from 'react'; import { Mail, Play, TrendingUp, Users, Globe, Zap } from 'lucide-react'; export default function DramaXStudios() { const [expandedSeries, setExpandedSeries] = useState(null); const [formStatus, setFormStatus] = useState(''); const seriesData = [ { id: 1, title: "Love Unscripted", genre: "Romance", retention: 52, views: 12400, image: "🎬" }, { id: 2, title: "Hidden Heir", genre: "Thriller", retention: 48, views: 9800, image: "🎭" }, { id: 3, title: "After Dark", genre: "Drama", retention: 55, views: 15200, image: "🌙" } ]; const handleFormSubmit = (e) => { e.preventDefault(); setFormStatus('Enviando...'); // Formspree endpoint (cambiar {form_id} después) setTimeout(() => { setFormStatus('¡Mensaje enviado! Te contactaremos pronto.'); e.target.reset(); }, 1500); }; return (
{/* Hero */}
DramaX Studios
AI-native vertical drama studio · Spanish-first

Producing cinematic microdramas for the LATAM market. Multi-platform distribution, premium content.

document.getElementById('slate').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"> View Series document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 border border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition"> License Content
90%+

Footage usable

3

Genres validated

LATAM

Market focus

{/* Slate de Series */}
Series Validated
Metrics from production and distribution

{seriesData.map(series => (
setExpandedSeries(expandedSeries === series.id ? null : series.id)} className="bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-lg p-6 cursor-pointer transition" >
{series.image}
{series.title}
{series.genre}

Retención {series.retention}%
Vistas {(series.views / 1000).toFixed(1)}K
{expandedSeries === series.id && (
Distribución en Facebook Reels, TikTok Series y WhatsApp Business Club.

License This
)}
))}
{/* Approach */}
Our Approach
⚡
AI-Native Production
Seedance 2.0, Kling 3.0, ElevenLabs. Production-grade tools that deliver 90%+ usable footage without the traditional studio overhead.

🌐
Spanish-First, LATAM
176M installations, 6x growth YoY. Spanish-language premium content is undersupplied. We own that market.

📱
Multi-Platform
Facebook Reels, TikTok Series, YouTube Shorts, Instagram, WhatsApp Business, licensing to ReelShort/DramaBox.

{/* About */}
About DramaX
Studio Structure
Legal Entity: DramaX LLC, incorporated in Wyoming, USA.

Operations: Tucson, AZ, USA.

Focus: Microdrama production for Spanish-language vertical markets. Romance, thriller, drama, true crime.

Team
Luis Javier Salido — Executive Producer, Creative Direction
Showrunner/Writer — Series development, script quality
Pipeline Operator — AI production, video/audio synthesis
Lean, distributed team. Fast iteration. Platform-first distribution.

{/* Contact */}
License Content
Interested in licensing series for your platform? Reach out.

Name 
Your name
Company 
Your company
Email 
your@email.com
Message 
Tell us about your platform and interest...
Send Message {formStatus &&
{formStatus}

}
Email: licensing@dramaxstudios.com

Based in Culiacán, Sinaloa · Registered in Wyoming, USA

{/* Footer */}
© 2026 DramaX LLC. AI-generated content disclosed. All rights reserved.

Privacy Policy · Terms of Service · AI Disclosure
); }
