import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-b from-green-500 to-orange-300 h-fit pt-20">
      <span className="text-white text-[60px]">Projects</span>
      <div className="grid grid-cols-2 gap-32 w-full px-40 mt-20">
        <Link href={"https://www.instagram.com/aashwas_/"}>
          <div className="flex flex-col rounded-[60px] overflow-clip bg-white bg-opacity-50">
            <Image
              src={"/aashwaslogo.png"}
              height={400}
              width={400}
              alt="Aashwas logo"
              className="w-full rounded-[60px]"
            ></Image>
            <div className="px-20 flex flex-col pb-4 py-5">
              <span>Aashwas</span>
              <span>Social Initiative to aid health workers</span>
            </div>
          </div>
        </Link>

        <Link href={"https://devpost.com/software/cofiscal"}>
          <div className="flex flex-col rounded-[60px] overflow-clip bg-white bg-opacity-50">
            <Image
              src={"/cofiscaloutput.jpg"}
              height={400}
              width={400}
              alt="CoFiscal Screenshot"
              className="w-full aspect-[2.3] rounded-[60px]"
            ></Image>
            <div className="px-20 flex flex-col pb-4 py-5">
              <span>CoFiscal</span>
              <span>Loan Risk Analysis Tool</span>
            </div>
          </div>
        </Link>

        <Link
          href={
            "https://www.deccanherald.com/india/karnataka/bengaluru/class-10-student-develops-app-to-gauge-malnutrition-736319.html"
          }
        >
          <div className="flex flex-col rounded-[60px] overflow-clip bg-white bg-opacity-50">
            <div className="bg-white rounded-[60px] py-10 flex justify-center">
              <Image
                src={"/mNutritionLogo.jpeg"}
                height={230}
                width={230}
                alt="mNutrition Article"
                className="rounded-[60px]"
              ></Image>
            </div>
            <div className="px-20 flex flex-col pb-4 py-5">
              <span>mNutrition</span>
              <span>Diagnosis tool for Malnutrition</span>
            </div>
          </div>
        </Link>

        <Link
          href={
            "https://play.google.com/store/apps/details?id=com.ayush.medicalrecordstest1"
          }
        >
          <div className="flex flex-col rounded-[60px] overflow-clip bg-white bg-opacity-50">
            <Image
              src={"/Medrive.png"}
              height={400}
              width={400}
              alt="CoFiscal Screenshot"
              className="w-full aspect-[2.3] rounded-[60px]"
            ></Image>
            <div className="px-20 flex flex-col pb-4 py-5">
              <span>Medrive</span>
              <span>Online medical record organizer</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
