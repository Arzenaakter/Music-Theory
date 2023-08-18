import Categories from "@/components/Categories";
import MusicTheory from "@/components/MusicTheory";
import MyLearning from "@/components/MyLearning";

const HomePage = () => {
  return (
    <div className="">
      <MusicTheory></MusicTheory>
      <Categories></Categories>
      <MyLearning></MyLearning>
    </div>
  );
};
export default HomePage;
