import SingleTheoryCard from "./SingleTheoryCard";

const MusicTheory = () => {
  const theories = [
    {
      id: "01",
      img: "https://img.freepik.com/premium-photo/guitar-is-laying-blue-table-cloth_865967-313750.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais",
      mentorName: "David",
      mentorImg:
        "https://img.freepik.com/free-photo/male-beauty-concept-portrait-fashionable-young-man-with-stylish-haircut-wearing-trendy-suit-posing-black-studio-background_155003-21656.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=sph",
      courseName: "Music Theory 101",
      time: "2h 30m ",
      rating: "4.8/5",
      price: "29",
    },
    {
      id: "02",
      img: "https://img.freepik.com/premium-photo/blue-guitar-with-letter-it_865967-317526.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais",
      mentorName: "Emily Lee",
      mentorImg:
        "https://img.freepik.com/free-photo/african-american-business-man_1303-10337.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=sph",
      courseName: "Guitar Techniques",
      time: "1h 45m",
      rating: "4.5/5 ",
      price: "19",
    },
    {
      id: "03",
      img: "https://img.freepik.com/free-photo/electronic-musical-instrument-audio-mixer-sound-equalizer-analog-modular-synthesizer_1381-3.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais",
      mentorName: "Michael",
      mentorImg:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=sph",
      courseName: "Piano Basics",
      time: "Learn ",
      rating: "4.6/5",
      price: "start",
    },
    {
      id: "04",
      img: "https://img.freepik.com/free-photo/music-background-with-guitar-drumsticks-top-view_169016-23670.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais",
      mentorName: "Sophia",
      mentorImg:
        "https://img.freepik.com/premium-photo/portrait-afro-american-man_58466-6800.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=sph",
      courseName: "Music Theory",
      time: "1h 17m",
      rating: "4.1/5",
      price: "Start",
    },
  ];

  return (
    <div className="">
      <h1 className="text-xl font-bold">Music Theory</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 w-10/12  justify-center gap-5 mx-auto">
        {theories.map((theory) => (
          <SingleTheoryCard key={theory.id} theory={theory}></SingleTheoryCard>
        ))}
      </div>
    </div>
  );
};

export default MusicTheory;
