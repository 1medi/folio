export default function AboutAe() {
    return (
        <>
         <div className="snap-center h-full xl:snap-none flex flex-col ">
        <div className="about p-8 bg-[#a49e8e80] rounded-lg m-4 lg:p-4 xl:p-12 lg:m-none desktop:p-24">
          <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
            What is Aether?
          </h2>
          <p className="p-4 lg:text-lg text-center">
            Aether’s unique approach allows our audience to scan paper forms and
            upload documents to their mobile devices, convert them into editable
            digital versions, and simplify complicated terminology with a click
            of a buttton. Additionally, by addressing the administrative burden
            many Canadians face—especially the millions supporting elderly
            family members
          </p>
        </div>

        <div className="proj-ideation p-8 bg-[#a49e8e80] rounded-lg m-4 lg:p-4 lg:m-none xl:p-12 desktop:p-24">
          <h2 className="text-3xl text-center bg-[#3A3F2D] rounded-lg p-4">
            Identifying The Issue
          </h2>
          <p className="p-4 lg:text-lg">
            <span className="font-bold text-xl">Did you know? </span>
            Caregivers spend up to an average of 10-15 hours per week managing
            forms and paperwork! Through the team's research and surveying, it
            was found that caregivers felt:
          </p>
          <ul className=" text-center underline lg:text-lg xl:text-xl  ">
            <li>Repetitive paperwork is tiring understanding </li>
            <li>Learning legal terms is stressful</li>
            <li>Time spent on forms, meant time lost with loved ones</li>
          </ul>
        </div>
      </div>
        </>
    )
}