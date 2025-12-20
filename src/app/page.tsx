import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Download, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Card */}
        <Card className="p-6 sm:p-8 mb-6 shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">Chanhee Lee</h1>
            <p className="text-slate-600 mb-4">4328 Scorpius St, Orlando, FL 32816, United States</p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-700">
              <a href="mailto:chanhee26.lee@gmail.com" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                <Mail className="w-4 h-4" />
                chanhee26.lee@gmail.com
              </a>
              <a href="tel:+16024515792" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                <Phone className="w-4 h-4" />
                (+1) 602-451-5792
              </a>
              <a href="https://linkedin.com/in/chanhee-lee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href="https://github.com/chanhee-lee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="/Chanhee_Lee_Resume.pdf" download="Chanhee_Lee_Resume.pdf">
                <Download className="w-4 h-4" />
                Download Resume PDF
              </a>
            </Button>
          </div>
        </Card>

        {/* Main Content Card */}
        <Card className="p-6 sm:p-8 shadow-lg">
          {/* Research Interests */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Research Interests</h2>
            <Separator className="mb-4" />
            <p className="text-slate-700">
              Compute Express Link (CXL), Software Platforms, and On-device Large Language Models (LLMs)
            </p>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Professional Experience</h2>
            <Separator className="mb-4" />

            <div className="space-y-6">
              {/* UCF */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">University of Central Florida</h3>
                    <p className="text-slate-600">Orlando, FL, United States</p>
                  </div>
                  <span className="text-slate-600 text-sm sm:text-base mt-1 sm:mt-0">Dec. 2024 - Current</span>
                </div>
                <p className="font-medium text-slate-800 mb-2">Postdoctoral Researcher, Department of Computer Science</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 ml-2">
                  <li>Leading memory-saving methods for LLMs in CXL disaggregated memory (submitted to ISCA'26).</li>
                  <li>Research fault-tolerant Non-Volatile Memory (NVM) for transaction-based applications.</li>
                </ul>
              </div>

              {/* ASU */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Arizona State University</h3>
                    <p className="text-slate-600">Tempe, AZ, United States</p>
                  </div>
                  <span className="text-slate-600 text-sm sm:text-base mt-1 sm:mt-0">Jan. 2024 - Dec. 2024</span>
                </div>
                <p className="font-medium text-slate-800 mb-2">Visiting Scholar (Voluntary), School of Computing and Augmented Intelligence</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 ml-2">
                  <li>Led on-device LLM personalization projects with knowledge graphs (published to EMSOFT'24/WWW'25).</li>
                  <li>Developed the Rust version of the core engine of a distributed software framework named Lingua Franca.</li>
                </ul>
              </div>

              {/* Samsung */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Samsung Electronics Inc.</h3>
                    <p className="text-slate-600">Seoul, Republic of Korea</p>
                  </div>
                  <span className="text-slate-600 text-sm sm:text-base mt-1 sm:mt-0">Aug. 2014 - Dec. 2024</span>
                </div>
                <p className="font-medium text-slate-800 mb-2">Staff Engineer/Best Reviewer, Platform Team</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 ml-2">
                  <li>Led a RESTful graph database API development and ported it to Android for edge AI.</li>
                  <li>Developed an AI framework for remote inferences between Android and Internet of Things (IoT) devices.</li>
                  <li>Led a flash file system (SmartFS) development for Samsung production boards.</li>
                  <li>Developed an audio manager and APIs for handling audio streams with Samsung ARTIK boards.</li>
                  <li>Led a device-to-device communication framework development with five junior software engineers.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Education</h2>
            <Separator className="mb-4" />

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Ph.D., Seoul National University</h3>
                  <p className="text-slate-700">Electrical Engineering and Computer Science</p>
                  <p className="text-slate-600">Republic of Korea</p>
                </div>
                <span className="text-slate-600 text-sm sm:text-base mt-1 sm:mt-0">Aug. 2014</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">MS, Korea Advanced Institute of Science and Technology (KAIST)</h3>
                  <p className="text-slate-700">Computer Science</p>
                  <p className="text-slate-600">Republic of Korea</p>
                </div>
                <span className="text-slate-600 text-sm sm:text-base mt-1 sm:mt-0">Feb. 2009</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">BS, Korea Advanced Institute of Science and Technology (KAIST)</h3>
                  <p className="text-slate-700">Computer Science</p>
                  <p className="text-slate-600">Republic of Korea</p>
                </div>
                <span className="text-slate-600 text-sm sm:text-base mt-1 sm:mt-0">Feb. 2007</span>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Skills</h2>
            <Separator className="mb-4" />
            <p className="text-slate-700">
              AI Inference Optimization, Performance Analysis, Software Architecture, Rust/Java/C/C++/Python
            </p>
          </section>

          {/* Publications */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Publications</h2>
            <Separator className="mb-4" />

            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Peer-reviewed Conference Papers</h3>
                <p className="text-slate-700">Published eight papers as a main/co-author in top-tier venues (EMSOFT/WWW).</p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Journal Articles</h3>
                <p className="text-slate-700">Published two papers as a main/co-author in Springer/ACM journal (JSPS/TECS)</p>
              </div>

              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="inline-block text-blue-600 hover:text-blue-800 transition-colors">
                View on Google Scholar →
              </a>
            </div>
          </section>

          {/* Awards */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Awards and Honour</h2>
            <Separator className="mb-4" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="font-semibold text-slate-900">Samsung Scholarship for Ph.D. students</h3>
                <p className="text-slate-700">Samsung Electronics Inc.</p>
              </div>
              <span className="text-slate-600 text-sm sm:text-base mt-1 sm:mt-0">Mar. 2013 - Feb. 2014</span>
            </div>
          </section>

          {/* Invited Talk */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Invited Talk</h2>
            <Separator className="mb-4" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="font-semibold text-slate-900">Department of Electrical Engineering, Hanyang University</h3>
                <p className="text-slate-700">South Korea</p>
                <p className="text-slate-600 italic">"Remote inference with IoT devices."</p>
              </div>
              <span className="text-slate-600 text-sm sm:text-base mt-1 sm:mt-0">Jun. 2023</span>
            </div>
          </section>

          {/* Academic Services */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Academic Services and Membership</h2>
            <Separator className="mb-4" />

            <div className="space-y-3">
              <div>
                <p className="text-slate-700">Secondary reviewer of top-tier venues (ISCA, ASPLOS, HPCA, PPoPP, LCTES) in 2025</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <p className="text-slate-700">Professional Member of the Association for Computing Machinery (ACM)</p>
                <span className="text-slate-600 text-sm sm:text-base mt-1 sm:mt-0">Apr. 2024 - Current</span>
              </div>
            </div>
          </section>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Chanhee Lee. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
