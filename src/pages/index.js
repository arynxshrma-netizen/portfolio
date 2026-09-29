import React, { useState } from 'react';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import Head from 'next/head';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      quote: "Aryan's editing elevated our brand video to professional cinema level. Highly recommended!",
      author: "Sarah Chen",
      role: "Marketing Director, TechFlow AI"
    },
    {
      quote: "Fast turnaround, premium quality, perfect color grading. Best editor we've worked with.",
      author: "James Wilson",
      role: "Producer, Wilson Productions"
    },
    {
      quote: "Our YouTube views tripled after Aryan's editing. The pacing and sound design are exceptional.",
      author: "Maya Patel",
      role: "Content Manager, Creator Economy"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Commercial Brand Film",
      client: "Tech Startup",
      category: "Video Editing",
      skills: ["Cinematic Editing", "Color Grading", "Sound Design"],
      description: "60-second brand film. 2M+ impressions across platforms."
    },
    {
      id: 2,
      title: "Motion Graphics Sequence",
      client: "Financial Services",
      category: "Motion Graphics",
      skills: ["After Effects", "Animation", "Data Visualization"],
      description: "Animated explainer video for complex concepts."
    },
    {
      id: 3,
      title: "Documentary Color Grade",
      client: "Production House",
      category: "Color Grading",
      skills: ["Color Science", "VFX", "Workflow Optimization"],
      description: "52-minute documentary. Cinematic look development."
    },
    {
      id: 4,
      title: "YouTube Short Series",
      client: "Creator Economy",
      category: "Social Media",
      skills: ["Fast Editing", "Optimization", "Audio Sync"],
      description: "24 optimized shorts. 500K+ views, 12% CTR."
    }
  ];

  const services = [
    { title: "Video Editing", description: "Commercial editing, YouTube optimization, social media content", icon: "🎬" },
    { title: "Motion Graphics", description: "Animations, title sequences, explainer videos, VFX compositing", icon: "✨" },
    { title: "Color Grading", description: "Professional color correction, cinematic look development", icon: "🎨" },
    { title: "Audio Design", description: "Sound design, dialogue cleanup, music sync & mixing", icon: "🔊" }
  ];

  const process = [
    { step: "01", title: "Brief & Strategy", description: "Deep dive into your vision, audience, and technical requirements" },
    { step: "02", title: "Creative Execution", description: "Storyboarding, editing, animation, and continuous client feedback" },
    { step: "03", title: "Polish & Delivery", description: "Color grading, sound design, optimization, multiple format delivery" }
  ];

  return (
    <>
      <Head>
        <title>Aryan Sharma - Video Editor & Motion Graphics Designer</title>
        <meta name="description" content="Premium video editing and motion graphics design. 5+ years of international experience." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold tracking-tight">
              ARYAN<span className="text-red-600">.</span>
            </div>
            
            <div className="hidden md:flex gap-8">
              <a href="#work" className="hover:text-red-600 transition">Work</a>
              <a href="#services" className="hover:text-red-600 transition">Services</a>
              <a href="#process" className="hover:text-red-600 transition">Process</a>
              <a href="#contact" className="hover:text-red-600 transition">Contact</a>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-black border-t border-white/10 p-6 space-y-4">
              <a href="#work" className="block">Work</a>
              <a href="#services" className="block">Services</a>
              <a href="#process" className="block">Process</a>
              <a href="#contact" className="block">Contact</a>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium Video<br />
              <span className="gradient-text">Motion Design</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              5+ years crafting cinematic content for international brands.
              Based in India, working with clients across Europe, US, and Canada.
            </p>
            <a 
              href="#showreel"
              className="inline-flex items-center gap-2 btn-primary"
            >
              Watch Showreel <ArrowRight size={20} />
            </a>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">150+</div>
                <p className="text-gray-400 mt-2">Projects</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">5+</div>
                <p className="text-gray-400 mt-2">Years</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">3</div>
                <p className="text-gray-400 mt-2">Continents</p>
              </div>
            </div>
          </div>
        </section>

        {/* Showreel Section */}
        <section id="showreel" className="py-20 px-6 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">My Showreel</h2>
            <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video flex items-center justify-center border-2 border-red-600/30">
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-gray-400 mb-2">60-90 Second Showreel</p>
                <p className="text-sm text-gray-500">[Add your showreel video here - mp4/webm]</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-6">Best of my editing, motion graphics, and color grading work</p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6 border-t border-white/10 bg-gray-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I'm a professional video editor and motion graphics designer based in India, serving clients across Europe, the US, and Canada. With 5+ years of experience, I specialize in cinematic editing, premium color grading, and compelling motion design.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  My work combines technical expertise with creative storytelling. I use cutting-edge tools like Premiere Pro, After Effects, and DaVinci Resolve to bring visions to life.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-red-600">What I Offer</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-red-600">✓</span>
                    <span>Cinematic video editing for commercials, brands, and social media</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600">✓</span>
                    <span>Motion graphics and title sequence animations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600">✓</span>
                    <span>Professional color grading and visual effects</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600">✓</span>
                    <span>Sound design and audio optimization</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600">✓</span>
                    <span>Multi-format delivery (4K, social media, streaming)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16">Featured Work</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="group cursor-pointer">
                  <div className="mb-4 bg-gray-900 rounded-lg overflow-hidden h-64 md:h-72 flex items-center justify-center">
                    <div className="text-gray-600 text-center">
                      <div className="text-4xl mb-2">🎥</div>
                      <p>{project.title}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-red-600 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-400">{project.client}</p>
                    <p className="text-sm text-gray-500">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="text-xs bg-red-600/20 text-red-400 px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-500 transition"
              >
                View All Projects <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="py-20 px-6 border-t border-white/10 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Color Grading Transformations</h2>
            <p className="text-center text-gray-400 mb-16">Watch how professional color grading elevates footage</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Documentary - Warm Grade", before: "Flat, cool lighting", after: "Warm, cinematic look" },
                { name: "Commercial - Vibrant Grade", before: "Muted colors", after: "Punchy, vibrant colors" },
                { name: "Brand Film - Teal & Orange", before: "Neutral tones", after: "Premium teal/orange" },
                { name: "Interview - Enhanced Skin", before: "Flat skin tone", after: "Glowing complexion" }
              ].map((item, idx) => (
                <div key={idx} className="border border-white/10 rounded-lg overflow-hidden">
                  <div className="bg-gray-800 aspect-video flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🎨</div>
                      <p className="text-gray-400 text-sm">{item.name}</p>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2 text-xs">
                      <span className="bg-gray-700 px-2 py-1 rounded">{item.before}</span>
                      <span className="bg-red-600/30 px-2 py-1 rounded">{item.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center">Client Testimonials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-900/50 border border-white/10 rounded-lg p-8 hover:border-red-600/50 transition"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16">Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div 
                  key={service.title}
                  className="bg-gray-900/50 border border-white/10 rounded-lg p-8 hover:border-red-600/50 transition"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16">My Process</h2>
            
            <div className="space-y-8">
              {process.map((item) => (
                <div key={item.step} className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Technical Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-red-600">Adobe Suite</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Premiere Pro (Expert)</li>
                  <li>• After Effects (Expert)</li>
                  <li>• Audition</li>
                  <li>• DaVinci Resolve</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-red-600">Advanced Skills</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• GPU Optimization (CUDA/NVENC)</li>
                  <li>• Python & FFmpeg</li>
                  <li>• ExtendScript Automation</li>
                  <li>• AI Integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-red-600">Deliverables</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• 4K/8K Video</li>
                  <li>• Color Science</li>
                  <li>• Cloud Workflows</li>
                  <li>• Multi-format Export</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-6 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Create Something Amazing</h2>
            <p className="text-gray-400 text-lg mb-8">
              Ready to bring your vision to life? Reach out and let's discuss your next project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:arynxshrma@gmail.com"
                className="btn-primary"
              >
                Get in Touch
              </a>
              <a 
                href="https://linkedin.com/in/arynxshrma"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-red-600 px-8 py-3 rounded-lg transition"
              >
                LinkedIn
              </a>
            </div>
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
