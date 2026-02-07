
import React, { useState } from 'react';
import { 
  Download, 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Github, 
  Sparkles,
  Info,
  Zap,
  Globe,
  CheckCircle2,
  Mail,
  ChevronRight,
  TrendingUp,
  Target,
  Copy,
  ExternalLink,
  Code2,
  Palette
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { SKILLS, PROJECTS, GROWTH_DATA } from './constants';
import { ThemeConfig } from './types';

const App: React.FC = () => {
  const [showExporter, setShowExporter] = useState(false);
  const [activeTab, setActiveTab] = useState<'embed' | 'theme'>('embed');
  const [copied, setCopied] = useState(false);

  const theme: ThemeConfig = {
    primaryColor: '#7e22ce',
    secondaryColor: '#f5f3ff',
    accentColor: '#a855f7',
    fontFamily: 'Plus Jakarta Sans'
  };

  const generateFullHTML = () => {
    // This fetches the current script and styles to wrap them in a single-file format
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kazi Emon Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; margin: 0; padding: 0; }
      .purple-gradient { background: linear-gradient(135deg, #7e22ce 0%, #a855f7 100%); }
    </style>
    <script type="importmap">
    {
      "imports": {
        "react-dom/": "https://esm.sh/react-dom@^19.2.4/",
        "react/": "https://esm.sh/react@^19.2.4/",
        "react": "https://esm.sh/react@^19.2.4",
        "recharts": "https://esm.sh/recharts@^3.7.0",
        "lucide-react": "https://esm.sh/lucide-react@^0.563.0"
      }
    }
    </script>
</head>
<body>
    <div id="root"></div>
    <script type="module">
        // The application logic is injected here by the user when they copy the code
        // For Google Sites, we use the hosted index.tsx logic or bundle it
        import "https://esm.sh/gh/user/repo/index.tsx"; // Note: User would replace this with actual hosted URL
    </script>
</body>
</html>`;
    return htmlTemplate;
  };

  const handleDownloadTheme = () => {
    const googleSitesThemeJson = {
      name: "Kazi Emon Hybrid Marketing Theme",
      colors: {
        primary: theme.primaryColor,
        secondary: theme.secondaryColor,
        accent: theme.accentColor
      },
      text: {
        title: { fontFamily: theme.fontFamily, fontSize: 48, color: "#2e1065" },
        body: { fontFamily: theme.fontFamily, fontSize: 16, color: "#4c1d95" }
      }
    };
    const blob = new Blob([JSON.stringify(googleSitesThemeJson, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'kazi-emon-google-sites-theme.json';
    link.click();
  };

  const copyEmbedCode = () => {
    // Simplified embed code for direct pasting into Google Sites "Embed Code" block
    const embedCode = `<div id="ke-portfolio-container"></div>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap" rel="stylesheet">
<div style="text-align:center; padding: 50px; font-family: sans-serif;">
  <h3>Kazi Emon Portfolio Loaded Successfully</h3>
  <p>To view the full interactive version within Google Sites, ensure you use the "Embed URL" option or host the build files.</p>
  <a href="#" style="background:#7e22ce; color:white; padding:10px 20px; border-radius:8px; text-decoration:none;">View Full Case Studies</a>
</div>`;
    
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen selection:bg-purple-200 bg-[#fdfaff]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 purple-gradient rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-purple-200">
                KE
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900 block leading-none">KAZI EMON</span>
                <span className="text-[10px] font-bold text-purple-600 tracking-[0.2em] uppercase">Hybrid Growth Specialist</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#method" className="text-slate-600 font-medium hover:text-purple-600 transition">Methodology</a>
              <a href="#services" className="text-slate-600 font-medium hover:text-purple-600 transition">Services</a>
              <a href="#work" className="text-slate-600 font-medium hover:text-purple-600 transition">Work</a>
            </div>
            <button 
              onClick={() => setShowExporter(true)}
              className="bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-800 transition-all flex items-center gap-2 shadow-lg shadow-purple-100"
            >
              <Globe className="w-4 h-4" /> Export for Google Sites
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-36 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-purple-100/40 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-8 uppercase tracking-widest">
              <TrendingUp className="w-3.5 h-3.5" /> Organic Authority &bull; Paid Precision
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
              Mastering the <br/>
              <span className="text-transparent bg-clip-text purple-gradient">Hybrid Growth Loop.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              I am <span className="text-slate-900 font-bold">Kazi Emon</span>. I specialize in synchronizing 
              <span className="text-purple-600 font-bold"> Paid</span> and <span className="text-purple-600 font-bold"> Organic</span> 
              strategies to ensure sustainable business growth on all digital platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a href="mailto:contact@kaziemon.com" className="bg-purple-700 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-purple-800 transition shadow-2xl shadow-purple-300 flex items-center justify-center gap-2 group">
                Start Optimization <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              <a href="#work" className="bg-white border-2 border-purple-50 text-slate-800 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-purple-50 transition flex items-center justify-center gap-2">
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="method" className="py-24 bg-white border-y border-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="relative">
                <div className="absolute inset-0 bg-purple-200 blur-[80px] opacity-30 -z-10"></div>
                <div className="bg-white p-8 rounded-[40px] shadow-2xl shadow-purple-100 border border-purple-50">
                   <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                      <Target className="text-purple-600" /> The Synergistic Approach
                   </h3>
                   <div className="space-y-6">
                      <div className="flex gap-4">
                         <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-700 shrink-0">1</div>
                         <div>
                            <p className="font-bold text-slate-900">Paid Injection</p>
                            <p className="text-sm text-slate-500 text-balance">I launch targeted paid campaigns to gather instant data and initial traffic.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-700 shrink-0">2</div>
                         <div>
                            <p className="font-bold text-slate-900">Organic Compounding</p>
                            <p className="text-sm text-slate-500">I use engagement from paid traffic to amplify organic reach and authority.</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-700 shrink-0">3</div>
                         <div>
                            <p className="font-bold text-slate-900">Sustainable Scale</p>
                            <p className="text-sm text-slate-500">As organic growth accelerates, I reduce paid dependency to maximize profit margins.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div>
                <h2 className="text-4xl font-black mb-6 text-slate-900">How Do I Work?</h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                   Digital marketing isn't just about "boosting" posts. It's a disciplined optimization process. I use paid media as a 'fuel' that helps the organic 'engine' reach top speed faster and more efficiently.
                </p>
                <div className="flex gap-6">
                   <div className="text-center">
                      <div className="text-3xl font-black text-purple-600">45%</div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Cost Reduction</p>
                   </div>
                   <div className="w-px h-12 bg-purple-100"></div>
                   <div className="text-center">
                      <div className="text-3xl font-black text-purple-600">3x</div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Faster Results</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 text-slate-900 tracking-tight">Expert Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Integrated digital marketing and optimization services using both paid and organic methods.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[40px] border border-purple-50 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-100 hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-16 h-16 bg-purple-50 text-purple-700 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-extrabold mb-4 text-slate-900 group-hover:text-purple-700 transition">{skill.name}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section / Chart */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Visualizing the <br/>Shift in Strategy</h2>
              <p className="text-slate-400 mb-10 text-lg">
                Observe the chart: We initiate growth using Paid Traffic, which accelerates Organic Authority over time. This is the hallmark of a successful optimization strategy.
              </p>
              <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span>Organic Growth: Sustainable & Scalable</span>
                 </li>
                 <li className="flex items-center gap-3 text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-fuchsia-500"></div>
                    <span>Paid Traffic: Targeted & Immediate</span>
                 </li>
              </ul>
            </div>
            <div className="h-[400px] bg-slate-800/50 backdrop-blur-md rounded-[40px] p-8 border border-slate-700">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={GROWTH_DATA}>
                  <defs>
                    <linearGradient id="colorOrganic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPaid" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#d946ef" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#d946ef" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend verticalAlign="top" height={36}/>
                  <Area name="Organic Growth" type="monotone" dataKey="organic" stroke="#8b5cf6" strokeWidth={4} fillOpacity={1} fill="url(#colorOrganic)" />
                  <Area name="Paid Traffic" type="monotone" dataKey="paid" stroke="#d946ef" strokeWidth={4} fillOpacity={1} fill="url(#colorPaid)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 text-slate-900 tracking-tight">Recent Case Studies</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Selected projects demonstrating successful synergy between paid and organic methodologies.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden rounded-[40px] mb-8 aspect-[4/5] shadow-2xl shadow-slate-100">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-10">
                    <span className="text-fuchsia-400 text-sm font-black uppercase tracking-[0.2em] mb-3">{project.category}</span>
                    <p className="text-white text-lg font-medium mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                      <Zap className="w-5 h-5 text-fuchsia-400 fill-fuchsia-400" />
                      <span className="text-white font-bold">{project.results}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-2 text-slate-900 group-hover:text-purple-700 transition">{project.title}</h3>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Hub Modal */}
      {showExporter && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={() => setShowExporter(false)}></div>
          <div className="relative bg-white rounded-[40px] max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h2 className="text-3xl font-black text-slate-900">Google Sites Deployment</h2>
                <p className="text-slate-500 text-sm">Follow these steps to integrate your custom design.</p>
              </div>
              <button onClick={() => setShowExporter(false)} className="p-2 hover:bg-white rounded-full transition">✕</button>
            </div>

            <div className="flex border-b border-slate-100">
              <button 
                onClick={() => setActiveTab('embed')}
                className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition ${activeTab === 'embed' ? 'text-purple-700 border-b-2 border-purple-700 bg-purple-50/30' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Code2 className="w-4 h-4" /> 1. Embed Design
              </button>
              <button 
                onClick={() => setActiveTab('theme')}
                className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition ${activeTab === 'theme' ? 'text-purple-700 border-b-2 border-purple-700 bg-purple-50/30' : 'text-slate-400 hover:text-slate-600'}`}
              >
                <Palette className="w-4 h-4" /> 2. Sync Theme
              </button>
            </div>

            <div className="p-8 overflow-y-auto">
              {activeTab === 'embed' ? (
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-100 p-6 rounded-3xl flex gap-4">
                    <Info className="w-6 h-6 text-blue-600 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-blue-900 mb-1">How to Embed:</p>
                      <p className="text-xs text-blue-700 leading-relaxed">
                        Go to your Google Site, click <strong>Insert</strong> > <strong>Embed</strong> > <strong>Embed Code</strong>, then paste the code below.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <pre className="bg-slate-900 text-slate-300 p-6 rounded-2xl text-[10px] font-mono overflow-x-auto border border-slate-800">
                      {`<div id="root"></div>\n<script src="https://cdn.tailwindcss.com"></script>\n<script type="module" src="https://your-hosted-url.com/index.js"></script>`}
                    </pre>
                    <button 
                      onClick={copyEmbedCode}
                      className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition"
                    >
                      {copied ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="p-6 border border-dashed border-purple-200 rounded-3xl text-center">
                    <p className="text-sm text-slate-500 mb-4 font-medium">Alternatively, download the ready-to-use HTML file:</p>
                    <button className="bg-purple-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-800 transition flex items-center gap-2 mx-auto">
                      <Download className="w-4 h-4" /> Download index.html
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-purple-50 border border-purple-100 p-6 rounded-3xl flex gap-4">
                    <Palette className="w-6 h-6 text-purple-600 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-purple-900 mb-1">Synchronize Styling:</p>
                      <p className="text-xs text-purple-700 leading-relaxed">
                        Download this JSON to update the Google Sites <strong>native</strong> headers and buttons to match your brand's purple theme.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                      <div className="w-6 h-6 rounded-full bg-purple-700 mx-auto mb-2"></div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Primary</span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                      <div className="w-6 h-6 rounded-full bg-fuchsia-500 mx-auto mb-2"></div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Accent</span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                      <div className="w-6 h-6 rounded-full bg-white border border-slate-200 mx-auto mb-2"></div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Body</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleDownloadTheme}
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-black transition flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" /> Download Theme JSON
                  </button>
                </div>
              )}
            </div>
            
            <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 tracking-widest uppercase">
                <Globe className="w-3 h-3" /> Compatible with Google Sites V2
              </div>
              <a href="https://support.google.com/sites/answer/90538" target="_blank" className="text-purple-600 text-xs font-bold flex items-center gap-1 hover:underline">
                Official Guide <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center mb-12">
            <div className="w-12 h-12 purple-gradient rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-4 shadow-xl shadow-purple-200">
               KE
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">KAZI EMON</h2>
            <p className="text-purple-600 font-bold tracking-widest uppercase text-xs">Platform Optimization Expert</p>
          </div>
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="p-4 bg-purple-50 rounded-2xl text-purple-700 hover:bg-purple-700 hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="p-4 bg-purple-50 rounded-2xl text-purple-700 hover:bg-purple-700 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="mailto:contact@kaziemon.com" className="p-4 bg-purple-50 rounded-2xl text-purple-700 hover:bg-purple-700 hover:text-white transition-all"><Mail className="w-5 h-5" /></a>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} KAZI EMON &bull; ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
