import Slide from "../components/Slide";
import DataCourse from "../data/DataCourse";
import CardCourse from "../components/CardCourse";

const CourseScreen = () => {
  return (
    <main className="bg-gray-200 shadow-sm relative overflow-hidden">
      <div className="cycle w-[500px] h-[500px] absolute bg-green-400 bg-gradient-to-r from-green-400  to-green-200    rounded-[50%] blur-xl absolunte top-96 -left-60   "></div>
      <Slide />

      <div className="section-2 relative">
        <div className="text-contents w-11/12 m-auto text-4xl font-bebas py-9 ">
          <h1>This is my All course</h1>
        </div>
      </div>

      <div className="course grid gap-4 w-10/12 h-auto m-auto grid-cols-3 pb-16 relative ">
        {DataCourse.map((c) => (
          <CardCourse {...c} key={c.id} />
        ))}
      </div>
      <div className="cycle w-[500px] h-[500px] absolute bg-green-400 bg-gradient-to-r from-green-200  to-gray-200 border blur-lg border-gray-400  rounded-[50%]  absolunte -bottom-40 -right-40   "></div>
    </main>
  );
};

export default CourseScreen;
