import Image from "next/image";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-gradient-to-b from-green-500 to-orange-300 h-[140vh] pt-20">
      <span className="text-white text-[60px]">Projects</span>
      <div className="flex flex-col w-full gap-16 justify-center px-40 pt-20">
        {/* Aashwas Section */}
        <div className="flex group items-center justify-center gap-5">
          <div className="relative h-fit w-full col-span-2 flex items-center justify-center">
            <Image
              src={"/aashwaslogo.png"}
              alt="Aashwas Logo"
              height={400}
              width={400}
              className="h-auto w-auto transition ease-in-out rounded-lg hover:scale-110"
            ></Image>
          </div>
          <div className="flex flex-col opacity-100 gap-3 ps-8">
            <span className="text-3xl text-white font-bold">Aashwas</span>
            <span className="text-xl text-white">
              Social Initiative to aid frontline healthcare workers
            </span>
          </div>
        </div>
        {/*mNutrition Section*/}
        <div className="flex group items-center justify-center">
          <div className="flex flex-col opacity-100 gap-3">
            <span className="text-3xl text-white font-bold">mNutrition</span>
            <span className="text-xl text-white">
              Mobile App to diagnose malnutrition in children
            </span>
          </div>
          <div className="relative h-fit w-full col-span-2 flex items-center justify-center bg-white transition ease-in-out rounded-lg hover:scale-110">
            <Image
              src={"/mNutritionLogo.jpeg"}
              alt="mNutrition Logo"
              height={200}
              width={200}
              className="h-auto w-auto py-10"
            ></Image>
          </div>
        </div>
        {/* Medrive Section */}
        <div className="flex group items-center justify-center gap-5">
          <div className="relative h-fit w-full col-span-2 flex items-center justify-center">
            <Image
              src={"/Medrive.png"}
              alt="Medrive Logo"
              height={400}
              width={400}
              className="h-auto w-auto transition ease-in-out rounded-lg hover:scale-110"
            ></Image>
          </div>
          <div className="flex flex-col opacity-100 gap-3 ps-8">
            <span className="text-3xl text-white font-bold">Medrive</span>
            <span className="text-xl text-white">
              Digital Assistant to store Medical Records online
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
