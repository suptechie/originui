import Cta from "@/demo/cta";
import DemoComponent from "@/demo/demo-component";
import PageHeader from "@/demo/page-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accordion Components - Origin UI",
  description:
    "A collection of beautiful and accessible accordion components built with Tailwind CSS and Next.js.",
};

const directory = "accordions";
const files = [
  "accordion-01",
  "accordion-02",
  "accordion-03",
  "accordion-04",
  "accordion-05",
  "accordion-06",
  "accordion-07",
  "accordion-08",
  "accordion-09",
  "accordion-10",
  "accordion-11",
  "accordion-12",
  "accordion-13",
  "accordion-14",
  "accordion-15",
  "accordion-16",
  "accordion-17",
  "accordion-18",
  "accordion-19",
  "accordion-20",
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Accordion">
            A growing collection of {files.length} accordion components built with Next.js and
            TailwindCSS.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {files.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={directory}
                  componentName={componentName}
                />
              );
            })}
          </div>

          <Cta />
        </div>
      </div>
    </main>
  );
}
