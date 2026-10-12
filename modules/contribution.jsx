/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function Contribution(){
    const contributionSteps = [
        {
          title: "1. Fork & Clone",
          description: "Fork the repository and clone it locally",
          code: "git clone https://github.com/Takib-Ahmed/thrivext.git\ncd thrivext",
        },
        {
          title: "2. Install & Setup",
          description: "Install dependencies and start the development server",
          code: "npm install\nnpm run dev",
        },
        {
          title: "3. Create New Page",
          description: "Add new documentation pages easily",
          code: "cd app\nmkdir Topics-name\ntouch Topics-name/page.md",
        },
        {
          title: "4. Submit Changes",
          description:
            "Create a branch from development, make changes, and submit PR",
          code: 'git checkout development\ngit checkout -b feature/your-feature-name\ngit add .\ngit commit -m "Add: your feature"\ngit push origin feature/your-feature-name',
        },
      ];
    return (
        <>
              <section className="py-16 px-4  ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Contribution Guidelines 
            </h2>
            <p className="text-lg ">
              We welcome all contributions! {`Here's`} how you can help make this
              project better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contributionSteps.map((step, index) => (
              <div
                key={index}
                className="  overflow-hidden p-3 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className=" mb-4">
                  {step.description}
                </p>
                <pre className=" bg-gray-800    text-white p-4 rounded-lg  overflow-x-scroll sm:overflow-auto w-full">
                  <code className="  ">{step.code}</code>
                </pre>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Contribute?</h3>
            <p className="text-lg  mb-6">
              Before making changes, please discuss via{" "}
              <a
                href="https://github.com/Takib-Ahmed/thrivext/issues"
                className="text-blue-500 hover:underline"
              >
                issues
              </a>{" "}
              or{" "}
              <a
                href="mailto:thrivexts@gmail.com"
                className="text-blue-500 hover:underline"
              >
                email
              </a>
              .
            </p>
          </div>
        </div>
      </section>
        
        </>
    );
}