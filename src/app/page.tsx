import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github, Download, Star, Code2 } from "lucide-react";

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
            <p className="text-xl font-semibold text-slate-700 mb-2">
              <span className="text-2xl">🔬 Postdoctoral Researcher, UCF</span>
            </p>
            <p className="text-slate-600 mb-4">
              CXL Memory Systems | On-device LLMs | Software Platforms
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-700">
              <a href="mailto:chanhee26.lee@gmail.com" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                <Mail className="w-4 h-4" />
                chanhee26.lee@gmail.com
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

        {/* PINNED REPOS - MOST IMPORTANT */}
        <Card className="p-6 sm:p-8 mb-8 shadow-lg border-l-4 border-l-blue-500 bg-blue-50/50">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            📌 GitHub Pinned Repositories
          </h2>
          <Separator className="mb-4" />
          <div className="grid md:grid-cols-3 gap-4">
            {/* #1 MLC LLM - PURPLE (최고 임팩트) */}
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl shadow-xl border-2 border-purple-200 col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-black text-purple-700 bg-purple-200 px-3 py-1 rounded-full text-sm">⭐ #1</span>
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">
                <a href="https://github.com/chanijjani/mlc_llm" target="_blank" className="hover:text-purple-700 hover:underline">
                  mlc_llm
                </a>
              </h3>
              <p className="text-lg font-semibold text-slate-800 mb-1">Universal LLM Deployment</p>
              <p className="text-sm text-purple-700 bg-purple-100 px-3 py-1 rounded-full inline-block">
                On-device LLM | GPU | UCF, ASU
              </p>
            </div>

            {/* #2 CXL/gem5 - BLUE */}
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-blue-700 bg-blue-200 px-2 py-1 rounded-full">#2</span>
              </div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">
                <a href="https://github.com/chanijjani/linux_pmo" target="_blank" className="hover:text-blue-700">
                  linux_pmo
                </a>
              </h3>
              <p className="text-sm font-semibold text-slate-800">
                Fault-tolerant Real-time NVM<br/>
                <span className="text-xs bg-blue-100 px-2 py-1 rounded">gem5 kernel | UCF</span>
              </p>
            </div>

            {/* #3 Rust - GREEN */}
            <div className="p-4 bg-white rounded-lg shadow-md border hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-green-600">#3</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">
                <a href="https://github.com/chanijjani/lf-rust-rti" target="_blank" className="hover:text-green-600">
                  lf-rust-rti
                </a>
              </h3>
              <p className="text-sm text-slate-600">Rust reactive systems<br/>
                <span className="text-xs bg-green-100 px-2 py-1 rounded">CAP Theorem | ASU</span></p>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-4 text-center">
            View full profile →{' '}
            <a href="https://github.com/chanijjani" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              github.com/chanijjani
            </a>
          </p>
        </Card>

        {/* Main Content Card */}
        <Card className="p-6 sm:p-8 shadow-lg">
          {/* Research Interests */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">🔬 Research Focus</h2>
            <Separator className="mb-4" />
            <p className="text-slate-700 text-lg leading-relaxed">
              Compute Express Link (CXL) memory systems, on-device Large Language Models (LLMs), 
              efficient LLM inference, and AI/ML software platforms.
            </p>
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
                    <p className="text-slate-600">Orlando, FL | Postdoctoral Researcher</p>
                  </div>
                  <span className="text-slate-600 font-medium mt-1 sm:mt-0">Dec 2024 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                  <li>Memory-saving methods for LLMs in CXL disaggregated memory (preparing a top architecture venue submission)</li>
                  <li>Fault-tolerant Real-time Non-Volatile Memory (NVM) for transaction-based applications (ACM Journal under review)</li>
                </ul>
              </div>

              {/* ASU */}
              <div className="border-l-4 border-l-green-500 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Arizona State University (Voluntary)</h3>
                    <p className="text-slate-600">Tempe, AZ | Visiting Scholar</p>
                  </div>
                  <span className="text-slate-600 font-medium mt-1 sm:mt-0">Jan 2024 - Dec 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                  <li>On-device LLM personalization with knowledge graphs <em>(EMSOFT'24, WWW'25)</em></li>
                  <li>Rust core engine for Lingua Franca distributed framework</li>
                </ul>
              </div>

              {/* Samsung */}
              <div className="border-l-4 border-l-orange-500 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Samsung Electronics</h3>
                    <p className="text-slate-600">Seoul, Korea | Staff Engineer</p>
                  </div>
                  <span className="text-slate-600 font-medium mt-1 sm:mt-0">Aug 2014 - Dec 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-slate-700 ml-2">
                  <li>RESTful graph database → Android edge AI porting</li>
                  <li>AI framework for Android ↔ IoT remote inference</li>
                  <li>Flash File System (SmartFS) for production boards</li>
                  <li>Led 5 engineers on device-to-device communication framework (ICIOT 2018)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">🛠️ Skills</h2>
            <Separator className="mb-4" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                "CXL Memory", "LLM Inference", "Linux Kernel", "Rust",
                "C/C++", "PyTorch", "gem5 Simulator", "NVM Systems",
                "Android", "IoT Frameworks", "Knowledge Graphs", "Performance"
              ].map((skill) => (
                <div key={skill} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border hover:shadow-md transition-all">
                  <span className="font-medium text-slate-800">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">📚 Education & Publications</h2>
            <Separator className="mb-4" />
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">🎓 Education</h3>
                <ul className="text-slate-700 space-y-1">
                  <li>Ph.D. Electrical Engineering, <strong>Seoul National University</strong></li>
                  <li>M.S./B.S. Computer Science, <strong>KAIST</strong></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">📖 Publications</h3>
                <ul className="text-slate-700 space-y-1">
                  <li>8 conference papers: <strong>EMSOFT, WWW</strong></li>
                  <li>2 journal papers: <strong>JSPS, TECS</strong></li>
                </ul>
                <a href="https://scholar.google.com/citations?user=I0FHzyQAAAAJ&hl=en" 
                   target="_blank" rel="noopener noreferrer" 
                   className="mt-2 inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium">
                  Google Scholar →
                </a>
              </div>
            </div>
          </section>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Chanhee Lee. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
