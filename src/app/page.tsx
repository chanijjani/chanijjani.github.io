import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github, Download, Star, Phone, ExternalLink, Megaphone, FileText } from "lucide-react";

const news = [
  {
    date: "Nov 2026",
    type: "Teaching",
    text: "Guest lecture for CDA 3103C: Computer Logic and Organization at UCF.",
  },
  {
    date: "Jul 2026",
    type: "Publication",
    text: "Presentation with my mentored student accepted at the TCRS'26 Workshop (ESWEEK 2026): \"Real-Time Semantic Caching for Vision-Language Models in Edge Autonomous Systems.\"",
  },
  {
    date: "2026",
    type: "Service",
    text: "Serving on the Technical Program Committee of the Time-Centric Reactive Software (TCRS) Workshop at ESWEEK 2026.",
  },
  {
    date: "2026",
    type: "Publication",
    text: "Two workshop presentations/demos with my mentored undergraduate students at ReCPS'26 (DATE 2026): VLM-based autonomous driving context analysis, and time-bounded integrity enforcement for trusted LLM execution with OP-TEE.",
  },
  {
    date: "Nov 2025",
    type: "Publication",
    text: "Paper accepted at DATE 2026: \"PREFACE: Proactive Re-executions for Fault-aware Mixed-criticality Environments.\"",
  },
  {
    date: "Jul 2025",
    type: "Award",
    text: "Selected as a UCF Preeminent Postdoc Fellow (Jul 2025 – Jun 2027).",
  },
  {
    date: "Apr 2025",
    type: "Publication",
    text: "Short paper with my mentored student accepted at WWW 2025: \"Personalizing Large Language Models using Retrieval-Augmented Generation and Knowledge Graph.\"",
  },
  {
    date: "Dec 2024",
    type: "Position",
    text: "Started as a Postdoctoral Researcher in the Department of Computer Science at the University of Central Florida (UCF).",
  },
];

const typeBadge: Record<string, string> = {
  Award:       "bg-yellow-100 text-yellow-800",
  Publication: "bg-blue-100 text-blue-800",
  Position:    "bg-green-100 text-green-800",
  Service:     "bg-purple-100 text-purple-800",
  Teaching:    "bg-rose-100 text-rose-800",
};

type Pub = { authors: string; title: string; venue: string; link: string };

const journals: Pub[] = [
  {
    authors: "Chanhee Lee, Derrick Greenspan, Junyeong Park, Yan Solihin, and Jongouk Choi",
    title: "FPMO: Fault-tolerant Persistent Memory Objects for High-performance Real-time Systems",
    venue: "ACM Transactions on Embedded Computing Systems (TECS). (Under 2nd Revision)",
    link: "",
  },
  {
    authors: "Hanwoong Jung, Chanhee Lee, Shin-Haeng Kang, Sungchan Kim, Hyunok Oh, and Soonhoi Ha",
    title: "Dynamic behavior specification and dynamic mapping for real-time embedded systems: HOPES approach",
    venue: "ACM Transactions on Embedded Computing Systems (TECS), vol. 13, issue 4, pp. 1-26, 2014.",
    link: "https://doi.org/10.1145/2584658",
  },
  {
    authors: "Chanhee Lee, Sungchan Kim, Hyunok Oh, and Soonhoi Ha",
    title: "Failure-aware task scheduling of synchronous data flow graphs under real-time constraints",
    venue: "Journal of Signal Processing Systems, vol. 73, pp. 201-212, 2013.",
    link: "https://link.springer.com/article/10.1007/s11265-013-0753-3",
  },
];

const conferences: Pub[] = [
  {
    authors: "Hwisoo So, Byeonggil Jun, Chanhee Lee, Hokeun Kim, and Aviral Shrivastava",
    title: "PREFACE: Proactive Re-executions for Fault-aware Mixed-criticality Environments",
    venue: "DATE'26: Design, Automation & Test in Europe Conference.",
    link: "https://ieeexplore.ieee.org/document/11539296/",
  },
  {
    authors: "Deeksha Prahlad*, Chanhee Lee, Dongha Kim, and Hokeun Kim",
    title: "Personalizing Large Language Models using Retrieval-Augmented Generation and Knowledge Graph",
    venue: "WWW'25: International World Wide Web Conference (Short Paper).",
    link: "https://dl.acm.org/doi/10.1145/3701716.3715473",
  },
  {
    authors: "Chanhee Lee, Deeksha Prahlad, Dongha Kim, and Hokeun Kim",
    title: "Work-in-Progress: On-device Retrieval-Augmented Generation with Knowledge Graphs for Personalized Large Language Models",
    venue: "EMSOFT'24: Proceedings of the International Conference on Embedded Software.",
    link: "https://ieeexplore.ieee.org/document/10740767",
  },
  {
    authors: "Dongha Kim*, Chanhee Lee, and Hokeun Kim",
    title: "A Case Study of API Design for Interoperability and Security of the Internet of Things",
    venue: "EAI SmartSP'24: Security and Privacy in Cyber-Physical Systems and Smart Vehicles.",
    link: "https://doi.org/10.1007/978-3-031-93354-7_7",
  },
  {
    authors: "Chanhee Lee, Jaehong Jo, Jongsung Lee, Daesung An, Jaehyun Cho, and Rami Jung",
    title: "RT-OCF: A Lightweight Device-to-Device Framework for the Internet of Things",
    venue: "ICIOT'18: International Conference on Internet of Things, pp. 179-187, 2018.",
    link: "https://link.springer.com/chapter/10.1007/978-3-319-94370-1_13",
  },
  {
    authors: "Sungchan Kim, Chanhee Lee, Taeyoung Kim, and Soonhoi Ha",
    title: "Software platform for hybrid resource management of a many-core accelerator for multimedia applications",
    venue: "IEEE 12th Symposium on Embedded Systems for Real-time Multimedia (ESTIMedia), pp. 12-19, 2014.",
    link: "https://ieeexplore.ieee.org/document/6962341",
  },
  {
    authors: "Chanhee Lee, Sungchan Kim, and Soonhoi Ha",
    title: "Efficient run-time resource management of a manycore accelerator for stream-based applications",
    venue: "The 11th IEEE Symposium on Embedded Systems for Real-time Multimedia (ESTIMedia), pp. 51-60, 2013.",
    link: "https://ieeexplore.ieee.org/document/6704503",
  },
  {
    authors: "Peter Marwedel, Jürgen Teich, Georgia Kouveli, Iuliana Bacivarov, Lothar Thiele, Soonhoi Ha, Chanhee Lee, Qiang Xu, and Lin Huang",
    title: "Mapping of applications to MPSoCs",
    venue: "CODES+ISSS'11: Proceedings of the 7th IEEE/ACM/IFIP International Conference on Hardware/Software Codesign and System Synthesis, pp. 109-118, 2011.",
    link: "https://dl.acm.org/doi/10.1145/2039370.2039390",
  },
  {
    authors: "Chanhee Lee, Hokeun Kim, Hae-woo Park, Sungchan Kim, Hyunok Oh, and Soonhoi Ha",
    title: "A task remapping technique for reliable multi-core embedded systems",
    venue: "CODES/ISSS'10: Proceedings of the 6th IEEE/ACM/IFIP International Conference on Hardware/Software Codesign and System Synthesis, pp. 307-316, 2010.",
    link: "https://doi.org/10.1145/1878961.1879014",
  },
];

const workshops: Pub[] = [
  {
    authors: "Manuel Branco Nardi*, Chanhee Lee**, Jongouk Choi, and Yan Solihin",
    title: "Real-Time Semantic Caching for Vision-Language Models in Edge Autonomous Systems",
    venue: "Time-Centric Reactive Software (TCRS'26) Workshop at ESWEEK'26 (Presentation-only track).",
    link: "https://www.tcrs.io/program/#h-session-4-ai-enabled-time-sensitive-systems",
  },
  {
    authors: "Manuel Branco Nardi*, Daniel Avalos, George Zhao, Martina Ibanez Peredo, and Chanhee Lee",
    title: "Runtime Autonomous Driving Context Analysis using Vision Language Model and Lingua Franca",
    venue: "Reactive Cyber-Physical Systems (ReCPS'26) Workshop at DATE'26.",
    link: "https://reactor-model.org/events/recps-2026/",
  },
  {
    authors: "Toluwalope Elugbaju*, Matthew J. Pinnock, and Chanhee Lee",
    title: "Time Bounded Integrity Enforcement for Trusted LLM Execution Using OP-TEE and Lingua Franca",
    venue: "Reactive Cyber-Physical Systems (ReCPS'26) Workshop at DATE'26.",
    link: "https://reactor-model.org/events/recps-2026/",
  },
];

function Authors({ text }: { text: string }) {
  const parts = text.split(/(Chanhee Lee\**)/);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("Chanhee Lee") ? <strong key={i} className="text-slate-900">{p}</strong> : <span key={i}>{p}</span>
      )}
    </>
  );
}

function PubList({ items }: { items: Pub[] }) {
  return (
    <ul className="space-y-2.5 text-slate-700 text-sm leading-relaxed list-disc pl-5">
      {items.map((p) => (
        <li key={p.title}>
          <Authors text={p.authors} />, &ldquo;{p.title},&rdquo; <em>{p.venue}</em>
          {p.link && (
            <>
              {" "}
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-blue-600 hover:underline">
                Link <ExternalLink className="w-3 h-3" />
              </a>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Header Card */}
        <Card className="p-6 sm:p-8 mb-6 shadow-lg">
          <div className="text-center mb-6">
            <Image
              src="/LinkedIn_Picture.jpg"
              alt="Chanhee Lee"
              width={160}
              height={160}
              priority
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mx-auto mb-4 shadow-md ring-4 ring-white"
            />
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-3">
              Chanhee Lee, Ph.D.
            </h1>
            <p className="text-xl font-semibold text-slate-700 mb-1">
              Postdoctoral Researcher — University of Central Florida
            </p>
            <p className="text-slate-600 text-sm mb-1">UCF Preeminent Postdoc Fellow</p>
            <p className="text-slate-500 text-sm mb-4">
              4328 Scorpius St, Orlando, FL 32816, United States
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
              <a href="https://scholar.google.com/citations?user=I0FHzyQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                <ExternalLink className="w-4 h-4" />
                Google Scholar
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" asChild>
              <a href="/CV_Chanhee_Lee.pdf" download="CV_Chanhee_Lee.pdf">
                <FileText className="w-4 h-4" />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="/Resume_Chanhee_Lee.pdf" download="Resume_Chanhee_Lee.pdf">
                <Download className="w-4 h-4" />
                Download Resume
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
              <li>Systems researcher with 9+ years of industry platform and systems engineering at Samsung Electronics, now a Postdoctoral Researcher and UCF Preeminent Postdoc Fellow at the University of Central Florida.</li>
              <li>Current research on CXL-based tiered and disaggregated memory, fault-tolerant persistent memory systems, and secure on-device LLM / edge-AI.</li>
              <li>Co-advising 4 Ph.D. students and mentoring 5 undergraduate researchers.</li>
            </ul>
          </section>

          {/* Research Interests */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">🔬 Research Interests</h2>
            <Separator className="mb-4" />
            <div className="space-y-3">
              {[
                {
                  area: "High-Performance Computing (HPC) & Systems",
                  topics: ["Tiered & Disaggregated Memory with CXL", "Heterogeneous Memory Management", "Secure Memory Deduplication"],
                },
                {
                  area: "Computer Architecture & Operating Systems",
                  topics: ["Fault-Tolerant NVM Systems", "Hardware-Software Co-Design", "Fault-Tolerant Task Scheduling & Resource Optimization on MPSoC"],
                },
                {
                  area: "AI Systems & Acceleration",
                  topics: ["LLM Serving Resource Optimization", "Secure On-Device LLM / Edge-AI"],
                },
              ].map(({ area, topics }) => (
                <div key={area}>
                  <p className="font-semibold text-slate-800 text-sm mb-1.5">{area}</p>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full text-sm font-medium text-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
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
                  <li><strong>CXL Disaggregated Tiered Memory:</strong> Architecting memory footprint optimization for CXL-based systems and coherence-aware memory tiering for HPC data centers and large-scale LLM inference workloads.</li>
                  <li><strong>Resilient Persistent Systems:</strong> Developing Fault-Tolerant Persistent Memory Objects (FPMO) for high-performance and mission-critical systems under failure-atomic crash consistency constraints.</li>
                  <li><strong>Research Mentorship:</strong> Co-advising 4 Ph.D. students in CXL systems, sensor security, and on-device LLMs; mentoring 5 undergraduate researchers, resulting in 3 peer-reviewed workshop presentations/demos.</li>
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
                  <li>Collaborated on LLM personalization with Retrieval-Augmented Generation (RAG) and knowledge graphs — <em>EMSOFT WIP 2024, WWW Short 2025</em>.</li>
                  <li>Collaborated on interoperability architectures for IoT and cyber-physical systems — <em>EAI SmartSP 2024</em>.</li>
                  <li>Built a Rust runtime infrastructure (RTI) for Lingua Franca.</li>
                </ul>
              </div>

              {/* Samsung */}
              <div className="border-l-4 border-l-orange-500 pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Samsung Electronics Inc.</h3>
                    <p className="text-slate-600">Seoul, Republic of Korea — <span className="font-medium">Staff Engineer</span>, Platform Team, Samsung Research</p>
                  </div>
                  <span className="text-slate-500 text-sm font-medium mt-1 sm:mt-0 whitespace-nowrap">Aug 2014 – Dec 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-slate-700 text-sm ml-2">
                  <li><strong>Industry Platform &amp; Systems Engineering:</strong> Led low-level OS kernel and platform software development, porting NuttX RTOS across commercial consumer electronics and IoT hardware target boards.</li>
                  <li><strong>Large-Scale System Framework Design:</strong> Architected and deployed lightweight device-to-device (D2D) communication stacks (RT-OCF) targeting millions of connected devices — <em>ICIOT 2018</em>.</li>
                  <li><strong>Junior Engineer Mentorship &amp; Onboarding:</strong> Mentored and trained incoming junior software engineers and technical interns in embedded C/C++ and system verification methodology.</li>
                  <li>Presented platform team demo at Samsung Research annual showcase — on-device/remote inference with Qualcomm SoC GPU/NPU acceleration.</li>
                  <li>Led SmartFS filesystem development (fixed power-cut crashes for Samsung home appliance production boards).</li>
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
                  <p className="text-slate-600 text-sm">Seoul National University · Advisor: Prof. Soonhoi Ha</p>
                  <p className="text-slate-500 text-xs italic">
                    Thesis:{" "}
                    <a href="https://dcollection.snu.ac.kr/srch/srchDetail/000000020976" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Fault-aware Task Mapping and Resource Management Techniques for Many-core Accelerators
                    </a>
                  </p>
                </div>
                <span className="text-slate-500 text-sm mt-1 sm:mt-0 whitespace-nowrap">Aug 2014</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">M.S. Computer Science</p>
                  <p className="text-slate-600 text-sm">KAIST · Advisor: Prof. Doo-Hwan Bae</p>
                  <p className="text-slate-500 text-xs italic">Thesis: Improving Recovery of Traceability Links to NFRs Utilizing Association Rule</p>
                </div>
                <span className="text-slate-500 text-sm mt-1 sm:mt-0 whitespace-nowrap">Feb 2009</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900">B.S. Computer Science</p>
                  <p className="text-slate-600 text-sm">KAIST</p>
                </div>
                <span className="text-slate-500 text-sm mt-1 sm:mt-0 whitespace-nowrap">Feb 2007</span>
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
            <p className="text-slate-700 text-sm mb-4">
              <strong>3 journal articles</strong> (1 under revision) · <strong>9 conference papers</strong> · <strong>3 workshop presentations/demos</strong>
              &nbsp;|&nbsp; <strong>250+ citations</strong> &nbsp;|&nbsp;
              <a href="https://scholar.google.com/citations?user=I0FHzyQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium">
                Google Scholar <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Journal Articles</h3>
                <PubList items={journals} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Peer-reviewed Conference Proceedings <span className="text-xs font-normal text-slate-500">(* mentored student co-author)</span>
                </h3>
                <PubList items={conferences} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Peer-reviewed Workshop Presentations &amp; Demonstrations <span className="text-xs font-normal text-slate-500">(* mentored student, ** equal contribution)</span>
                </h3>
                <PubList items={workshops} />
              </div>
            </div>
          </section>

          {/* Awards */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">🏆 Awards &amp; Honors</h2>
            <Separator className="mb-4" />
            <ul className="space-y-2 text-slate-700 text-sm">
              {[
                ["UCF Preeminent Postdoc Fellow", "University of Central Florida", "Jul 2025 – Jun 2027"],
                ["Best Code Reviewer Certificate", "Samsung Electronics", "2021"],
                ["Samsung Scholarship for Ph.D. Students", "Samsung Electronics", "Mar 2013 – Feb 2014"],
              ].map(([name, org, date]) => (
                <li key={name} className="flex flex-col sm:flex-row sm:justify-between">
                  <span><strong>{name}</strong>, {org}</span>
                  <span className="text-slate-500 whitespace-nowrap">{date}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Grants */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">💡 Sponsored Research &amp; Grants</h2>
            <Separator className="mb-4" />
            <div className="text-slate-700 text-sm space-y-1">
              <p><strong>Amazon Research Awards (ARA)</strong> — &ldquo;CXL Memory Abstraction for Secure Cross-host Memory Sharing&rdquo;</p>
              <p className="text-slate-500">Key Personnel (PI: Prof. Jongouk Choi) · Submitted May 2026 · Pending</p>
            </div>
          </section>

          {/* Teaching & Mentoring */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">🧑‍🏫 Teaching &amp; Mentoring</h2>
            <Separator className="mb-4" />
            <div className="space-y-4 text-slate-700 text-sm">
              <div>
                <p className="font-semibold text-slate-900 mb-1">Guest Lecturer, UCF</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>CDA 5106: Advanced Computer Architecture (Spring 2027, scheduled)</li>
                  <li>CDA 3103C: Computer Logic and Organization (Nov 2026)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-1">Graduate Research Mentorship, UCF (2025 – Present)</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Secure memory deduplication for CXL-disaggregated memory</li>
                  <li>Machine learning-based defenses against electromagnetic interference (EMI) attacks on analog sensors</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-1">Undergraduate Research Mentorship, UCF (2025 – Present)</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Vision-Language Models (VLMs) for autonomous driving: guided students in applying semantic caching to VLMs; presented at the TCRS&apos;26 workshop (ESWEEK&apos;26).</li>
                  <li>Secure edge-AI verification: demo presentation at the ReCPS&apos;26 workshop (DATE&apos;26).</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-900 mb-1">Teaching Assistant</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hardware/Software Co-design, Seoul National University (Spring 2010)</li>
                  <li>Advanced Software Engineering, KAIST (Spring 2008)</li>
                </ul>
              </div>
              <p><strong>Certificate:</strong> Preparing Tomorrow&apos;s Faculty (PTF), UCF Faculty Center for Teaching and Learning (Jul 2025)</p>
            </div>
          </section>

          {/* Service & Talks */}
          <section className="mb-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">🤝 Academic Service &amp; Invited Talk</h2>
            <Separator className="mb-4" />
            <ul className="space-y-2 text-slate-700 text-sm list-disc pl-5">
              <li><strong>Technical Program Committee:</strong> Time-Centric Reactive Software (TCRS) Workshop at ESWEEK 2026</li>
              <li><strong>Journal Peer Reviewer:</strong> IEEE Embedded Systems Letters (ESL)</li>
              <li><strong>Conference Secondary Reviewer:</strong> HPCA (&apos;26, &apos;27), CASES (&apos;26), ICS (&apos;27), ASPLOS (&apos;25, &apos;26), ISCA (&apos;26), CAL (&apos;25, &apos;26), PPoPP (&apos;26), LCTES (&apos;26), DAC (&apos;13, &apos;24), DATE (&apos;10, &apos;13, &apos;25)</li>
              <li><strong>Membership:</strong> ACM Professional Member (Apr 2024 – Present), IEEE Professional Member (Apr 2026 – Present)</li>
              <li><strong>Invited Talk:</strong> &ldquo;Remote inference with IoT devices,&rdquo; Department of Electrical Engineering, Hanyang University, South Korea (Jun 2023)</li>
            </ul>
          </section>
        </Card>

        {/* About Me */}
        <Card className="p-6 sm:p-8 mt-6 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">🙋 About Me</h2>
          <Separator className="mb-4" />
          <div className="flex flex-col md:flex-row gap-6 md:items-start">
            <div className="flex-1 space-y-3 text-slate-700 text-base leading-relaxed">
              <p>
                I&apos;m a systems researcher who enjoys working where hardware meets software. I spent more than
                nine years at Samsung Electronics, across the Platform Team (4 years), the Things Platform Lab
                (3 years), and the Software Engineering Team (2 years). There, I developed remote and on-device AI
                frameworks for Samsung TVs and smartphones, ported RTOS kernels to consumer electronics and IoT
                boards, and designed device-to-device frameworks meant to run on millions of devices. That work
                deepened my interest in the memory, reliability, and efficiency challenges of AI systems, so I moved
                to the U.S. to pursue them more deeply.
              </p>
              <p>
                At UCF, I work on CXL-based tiered and disaggregated memory, fault-tolerant persistent memory for
                mission-critical systems, and secure on-device LLMs. Some of the most rewarding parts of the job
                are co-advising Ph.D. students and watching undergraduate researchers present their first
                workshop papers.
              </p>
              <p>
                Outside the lab, I enjoy meeting fellow researchers at conferences and exploring the campuses and
                cities they take me to. This photo was taken at Duke Chapel during my trip to ESWEEK 2024 in
                Raleigh, where I presented our work-in-progress paper on on-device LLM personalization at EMSOFT.
              </p>
            </div>
            <figure className="md:w-56 shrink-0 mx-auto">
              <Image
                src="/esweek2024_durham.jpg"
                alt="Chanhee Lee in front of Duke Chapel, Durham, NC"
                width={1000}
                height={1778}
                className="w-48 md:w-56 h-auto rounded-lg shadow-md mx-auto"
              />
              <figcaption className="text-xs text-slate-500 italic text-center mt-2">
                Duke Chapel, Durham, NC — visiting during ESWEEK 2024 (Raleigh, NC), Oct 2024
              </figcaption>
            </figure>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Chanhee Lee. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
