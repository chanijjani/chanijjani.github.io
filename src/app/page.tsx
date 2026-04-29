import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github, Download, Star, Phone, ExternalLink, Megaphone } from "lucide-react";

const news = [
  {
    date: "Nov 2025",
    type: "Publication",
    text: "Regular paper accepted at DATE Conference (DATE 2026), PREFACE: Proactive Re-executions for Fault-aware Mixed-criticality Environments.",
  },
  {
    date: "Apr 2025",
    type: "Publication",
    text: "Short paper accepted at The Web Conference (WWW 2025), On-device LLM personalization with knowledge graphs.",
  },
  {
    date: "Dec 2024",
    type: "Position",
    text: "Started Postdoctoral Researcher position at University of Central Florida (UCF), Department of Computer Science.",
  },
];

const typeBadge: Record<string, string> = {
  Award:       "bg-yellow-100 text-yellow-800",
  Publication: "bg-blue-100 text-blue-800",
  Position:    "bg-green-100 text-green-800",
  Service:     "bg-purple-100 text-purple-800",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Header Card */}
        <Card className="p-6 sm:p-8 mb-6 shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-3">
              Chanhee Lee
            </h1>
            <p className="text-xl font-semibold text-slate-700 mb-1">
              Postdoctoral Researcher — University of Central Florida
            </p>
            <p className="text-slate-500 text-sm mb-4">
              1638 Canton Ln, Oviedo, FL 32765, United States
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-700 mb-2">
              <a href="mailto:chanhee26.lee@gmail.com" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                <Mail className="w-4 h-4" />
                chanhee26.lee@gmail.com
              </a>
              <a href="tel:+16024515792" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                <Phone className="w-4 h-4" />
                (+1) 602-451-5792
              </a>
              <a href="https://www.linkedin.com/in/chanhee-lee-72526a23/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href="https://github.com/chanijjani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" asChild>
              <a href="/Resume_Chanhee_Lee.pdf" download="Resume_Chanhee_Lee.pdf">
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>
            </Button>
          </div>
        </Card>

        {/* News & Announcements */}
        <Card className="p-6 sm:p-8 mb-6 shadow-lg border-l-4 border-l-amber-400 bg-amber-50/40">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Megaphone className="w-6 h-6 text-amber-500" />
            News &amp; Announcements
          </h2>
          <Separator className="mb-4" />
          <ul className="space-y-3">
            {news.map((item, i) => (
              <li key={i} className="flex flex-col sm:flex-row sm:items-start gap-2">
                <span className="shrink-0 text-xs font-mono text-slate-500 w-20 pt-0.5">{item.date}</span>
                <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${typeBadge[item.type] ?? "bg-slate-100 text-slate-700"}`}>
                  {item.type}
                </span>
                <span className="text-slate-700 text-sm leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Pinned Repositories */}
        <Card className="p-6 sm:p-8 mb-6 shadow-lg border-l-4 border-l-blue-500 bg-blue-50/50">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            GitHub Pinned Repositories
          </h2>
          <Separator className="mb-4" />
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl shadow-xl border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-black text-purple-700 bg-purple-200 px-3 py-1 rounded-full">⭐ #1</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">
                <a href="https://github.com/chanijjani/mlc_llm" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700 hover:underline">
                  mlc_llm
                </a>
              </h3>
              <p className="text-sm font-semibold text-slate-800 mb-1">Universal LLM Deployment</p>
              <span className="text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded-full">On-device LLM · GPU · UCF / ASU</span>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold text-blue-700 bg-blue-200 px-2 py-1 rounded-full">#2</span>
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">
                <a href="https://github.com/chanijjani/linux_pmo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                  linux_pmo
                </a>
              </h3>
              <p className="text-sm font-semibold text-slate-800">
                Fault-tolerant Real-time NVM
              </p>
              <span className="text-xs bg-blue-100 px-2 py-1 rounded">Linux kernel · UCF</span>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-md border hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold text-green-600">#3</span>
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-1">
                <a href="https://github.com/chanijjani/lf-rust-rti" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
                  lf-rust-rti
                </a>
              </h3>
              <p className="text-sm text-slate-600">Rust reactive engine</p>
              <span className="text-xs bg-green-100 px-2 py-1 rounded">CAP Theorem · Lingua Franca · ASU</span>
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">
            <a href="https://github.com/chanijjani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
              View full profile on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </Card>

        {/* Main Content */}
        <Card className="p-6 sm:p-8 shadow-lg">

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">👤 Summary</h2>
            <Separator className="mb-4" />
            <ul className="space-y-2 text-slate-700 text-base leading-relaxed list-disc list-inside">
              <li>Embedded system, software platform, and AI systems engineer with 9+ years at Samsung Research and recent postdoctoral work on CXL-based memory systems and on-device LLMs.</li>
              <li>Designed production AI inference platforms for Android/TVs and distributed software frameworks for IoT.</li>
              <li>Interested in embedded system HW/SW co-design for AI and robotics, and LLM framework optimization.</li>
            </ul>
          </section>

          {/* Project Interests */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">🔬 Project Interests</h2>
            <Separator className="mb-4" />
            <div className="flex flex-wrap gap-2">
              {[
                "Embedded System HW/SW Co-design",
                "Software Platform Development",
                "Architecture Optimization",
                "CXL-based Memory Systems",
                "On-device / Edge LLM Systems",
                "AI Performance Analysis",
              ].map((interest) => (
                <span key={interest} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full text-sm font-medium text-slate-800">
                  {interest}
                </span>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">💼 Professional Experience</h2>
            <Separator className="mb-4" />
            <div className="space-y-6">

              {/* UCF */}
              <div className="border-l-4 border-l-blue-500 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">University of Central Florida</h3>
                    <p className="text-slate-600">Orlando, FL — <span className="font-medium">Postdoctoral Researcher</span>, Department of Computer Science</p>
                  </div>
                  <span className="text-slate-500 text-sm font-medium mt-1 sm:mt-0 whitespace-nowrap">Dec 2024 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-slate-700 text-sm ml-2">
                  <li>Designed memory-efficient LLM inference for CXL memory systems (Gem5 simulation).</li>
                  <li>Extended Linux kernel for fault-tolerant non-volatile memory (NVM) in real-time edge systems.</li>
                  <li>Leading 7 students to analyze on-device mlc-llm / llama.cpp performance and personalization with vector databases.</li>
                </ul>
              </div>

              {/* ASU */}
              <div className="border-l-4 border-l-green-500 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Arizona State University</h3>
                    <p className="text-slate-600">Tempe, AZ — <span className="font-medium">Visiting Scholar (Volunteer)</span>, School of Computing and Augmented Intelligence</p>
                  </div>
                  <span className="text-slate-500 text-sm font-medium mt-1 sm:mt-0 whitespace-nowrap">Jan 2024 – Dec 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-slate-700 text-sm ml-2">
                  <li>Built Rust reactive engine in Lingua Franca (CAP-theorem guarantees).</li>
                  <li>Led on-device LLM personalization (Android + knowledge graphs) — <em>EMSOFT WIP 2024, WWW Short 2025</em>.</li>
                </ul>
              </div>

              {/* Samsung */}
              <div className="border-l-4 border-l-orange-500 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Samsung Electronics Inc.</h3>
                    <p className="text-slate-600">Seoul, Republic of Korea — <span className="font-medium">Staff Engineer / Best Reviewer</span>, Platform Team, Samsung Research</p>
                  </div>
                  <span className="text-slate-500 text-sm font-medium mt-1 sm:mt-0 whitespace-nowrap">Aug 2014 – Dec 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-slate-700 text-sm ml-2">
                  <li>Presented platform team demo at Samsung Research annual showcase (Top 3/10 major divisions, ~2K researchers) — on-device/remote inference with Qualcomm SoC GPU/NPU acceleration with SmartTrainer TV app.</li>
                  <li>Led SmartFS filesystem development (fixed power-cut crashes for Samsung home appliance production boards).</li>
                  <li>Ported Oxigraph graph database to Android smartphone for edge AI workloads and developed REST APIs.</li>
                  <li>Developed OCF IoTivity D2D framework for ARTIK production boards (1st author, Springer LNCS ICIoT 2018).</li>
                  <li>Led two overseas research teams in the UK and Ukraine to develop GUI-based software performance analysis tools.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">🎓 Education</h2>
            <Separator className="mb-4" />
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">Ph.D. Electrical Engineering &amp; Computer Science</p>
                  <p className="text-slate-600 text-sm">Seoul National University · Advisor: Soonhoi Ha</p>
                  <p className="text-slate-500 text-xs italic">Thesis: Fault-aware Task Mapping and Resource Management Techniques for Many-core Accelerators</p>
                </div>
                <span className="text-slate-500 text-sm mt-1 sm:mt-0 whitespace-nowrap">2014</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">M.S. Computer Science</p>
                  <p className="text-slate-600 text-sm">KAIST · Advisor: Doohwan Bae</p>
                </div>
                <span className="text-slate-500 text-sm mt-1 sm:mt-0">2009</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">B.S. Computer Science</p>
                  <p className="text-slate-600 text-sm">KAIST</p>
                </div>
                <span className="text-slate-500 text-sm mt-1 sm:mt-0">2007</span>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">🛠️ Skills</h2>
            <Separator className="mb-4" />
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-slate-800 text-sm">Languages: </span>
                <span className="text-slate-700 text-sm">Rust, C/C++, Python, Java, SystemC</span>
              </div>
              <div>
                <span className="font-semibold text-slate-800 text-sm">Platform / Infra: </span>
                <span className="text-slate-700 text-sm">CXL/Gem5, Linux kernel, Embedded Systems, QEMU, NoC, Git, Docker, CI/CD, TDD, Agile Process</span>
              </div>
              <div>
                <span className="font-semibold text-slate-800 text-sm">AI / ML: </span>
                <span className="text-slate-700 text-sm">llama.cpp / MLC-LLM, PyTorch / TensorFlow, RAG, Knowledge Graph, On-device ML Performance Optimization</span>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">📖 Publications</h2>
            <Separator className="mb-4" />
            <p className="text-slate-700 mb-2">
              <strong>8 conference papers</strong> (EMSOFT, WWW) + <strong>2 journal papers</strong> (JSPS, TECS) &nbsp;|&nbsp; <strong>250+ citations</strong>
            </p>
            <a href="https://scholar.google.com/citations?user=I0FHzyQAAAAJ&hl=en"
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm">
              Google Scholar <ExternalLink className="w-3 h-3" />
            </a>
          </section>

          {/* Awards & Leadership */}
          <section className="mb-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">🏆 Awards &amp; Leadership</h2>
            <Separator className="mb-4" />
            <ul className="space-y-2 text-slate-700 text-sm list-disc list-inside">
              <li><strong>UCF Preeminent Postdoc Fellow</strong> (2025–26)</li>
              <li><strong>Samsung Ph.D. Scholarship</strong> (2013)</li>
              <li>Invited Talk: "Remote inference with IoT" — Hanyang University, South Korea (2023)</li>
              <li>Reviewer: ISCA / ASPLOS / HPCA / PPoPP / LCTES (2025) and ICS (2026) &nbsp;|&nbsp; ACM Member</li>
            </ul>
          </section>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Chanhee Lee. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
