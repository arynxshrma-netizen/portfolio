import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Head from 'next/head';

export default function CaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study - Aryan Sharma Portfolio</title>
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <a href="/" className="inline-flex items-center gap-2 hover:text-red-600 transition">
              <ArrowLeft size={20} /> Back to Portfolio
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <p className="text-red-600 uppercase tracking-wider text-sm">Case Study</p>
              <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-4">Brand Film for SaaS Startup</h1>
              <p className="text-2xl text-gray-400">TechFlow AI</p>
            </div>

            {/* Meta Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/10">
              <div>
                <p className="text-gray-500 text-sm uppercase">Year</p>
                <p className="text-xl font-bold">2025</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase">Duration</p>
                <p className="text-xl font-bold">60 seconds</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase">Category</p>
                <p className="text-xl font-bold">Commercial</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase">Role</p>
                <p className="text-xl font-bold">Editor + Colorist</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video flex items-center justify-center border border-white/10">
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-gray-400">Video Player</p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Created a cinematic brand film for a B2B SaaS startup targeting European markets. The project required tight color grading, dynamic editing, and synchronized sound design to convey premium positioning.
            </p>
          </div>
        </section>

        {/* Challenge */}
        <section className="px-6 py-20 border-t border-white/10 bg-gray-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">The Challenge</h2>
            <p className="text-lg text-gray-300 mb-8">
              TechFlow needed a 60-second brand video that could work across YouTube, LinkedIn, and conference presentations with tight 2-week turnaround.
            </p>
            
            <div className="space-y-4">
              {[
                "Complex technical product needed to look simple",
                "Needed 3 different aspect ratios (16:9, 1:1, 9:16)",
                "Tight 2-week turnaround",
                "Color grade had to match existing brand guidelines"
              ].map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex-shrink-0 flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-gray-300 pt-1">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">The Solution</h2>

            <div className="space-y-12">
              {[
                { phase: "Pre-Production", desc: "Received 4 hours of raw B-roll. Created detailed editing spreadsheet and style frame in DaVinci Resolve.", tools: ["Premiere Pro", "After Effects", "Excel"] },
                { phase: "Editing", desc: "Cut rough edit emphasizing product features. Used jump cuts, motion graphics overlays, and text callouts.", tools: ["Premiere Pro", "After Effects"] },
                { phase: "Color Grading", desc: "Applied cinematic LUT matching brand colors. Added subtle vignetting and film grain for premium feel.", tools: ["DaVinci Resolve"] }
              ].map((item, idx) => (
                <div key={idx} className="border border-white/10 rounded-lg p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <h3 className="text-2xl font-bold">{item.phase}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{item.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span key={tool} className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Results</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { icon: "📊", value: "52K+", label: "YouTube Views" },
                { icon: "📈", value: "8.3%", label: "Engagement Rate" },
                { icon: "🔗", value: "320+", label: "LinkedIn Shares" },
                { icon: "✉️", value: "18", label: "Demo Requests" }
              ].map((metric) => (
                <div key={metric.label} className="bg-gray-900/50 border border-white/10 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">{metric.icon}</div>
                  <p className="text-2xl font-bold text-red-600 mb-2">{metric.value}</p>
                  <p className="text-gray-400 text-sm">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-600/10 to-orange-500/10 border border-red-600/20 rounded-lg p-8">
              <p className="text-xl text-gray-200 italic mb-4">"The video perfectly captured our brand. It's been our top-performing asset for B2B outreach."</p>
              <p className="text-gray-400">— Sarah Chen, Marketing Director at TechFlow</p>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="px-6 py-20 border-t border-white/10 bg-gray-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Technical Specifications</h2>

            <div className="space-y-4">
              {[
                { key: "Deliverables", value: "16:9 (1080p, 4K) | 1:1 (Instagram) | 9:16 (TikTok)" },
                { key: "Color Space", value: "Rec.709 (YouTube) | DCI-P3 (Premiere)" },
                { key: "Audio", value: "Stereo Mix, -6dB average, -1dB peaks" },
                { key: "Codec", value: "H.264 MP4 (delivery) | ProRes 422 HQ (archive)" }
              ].map((spec) => (
                <div key={spec.key} className="border border-white/10 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-gray-400">{spec.key}</span>
                  <span className="font-mono text-red-600 text-sm">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to collaborate?</h2>
            <p className="text-gray-400 mb-8">Let's discuss how I can help with your next project.</p>
            <a 
              href="mailto:arynxshrma@gmail.com"
              className="inline-block bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg transition font-bold"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-6 text-center text-gray-600">
          <p>© 2026 Aryan Sharma. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
