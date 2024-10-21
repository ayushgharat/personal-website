import Image from "next/image";
import Link from "next/link";
import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { LaptopMinimal, Tablet, Smartphone, Users } from "lucide-react";

const features = [
  {
    Icon: Tablet,
    name: "DAISIE",
    description: "Enables diagnosis of Alzheimer's and Parkinson's using an iPad app",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: LaptopMinimal,
    name: "CeeVi",
    description: "Creaters tailored resumes for every job posting you apply to",
    href: "https://ceevi.vercel.app/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: LaptopMinimal,
    name: "CoFiscal",
    description: "Analyzes how likely you are to default on your loan",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Users,
    name: "Aashwas",
    description:
      "Provides stressbusting sessions and funding for doctors during CoVID-19",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: Smartphone,
    name: "mNutrition",
    description: "Diagnoses malnutrition in children in India",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
];

const Projects = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="mt-40 max-w-4xl px-5">
        <span className="font-header font-bold text-4xl">Projects</span>
        <BentoGrid className="mt-8">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
};

export default Projects;
