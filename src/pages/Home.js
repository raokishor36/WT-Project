import HeroSection from "../components/HeroSection";

export default function Home() {
  const team = [
    { name: "Kishor", description: "blah blah ", image: "Kishor" },
    {
      name: "Kaustubh",
      description:
        "I’m from Belgaum. An avid reader who is curious about Research. I love reading about philosophical and metaphysical concepts and trying to find the correlation of the same in my life. Apart from this, I am serving as the Treasurer of DET Toastmasters club, Hubli, a non-profit organisation promoting public speaking and leadership in more than 90 countries. ",
      image: "Kaustubh",
    },
    { name: "Kartik", description: "blah ", image: "Kartik" },
    { name: "Koustav", description: "blah ", image: "Koustav" },
  ];
  return (
    <div>
      <HeroSection
        name={team[0].name}
        description={team[0].description}
        image={team[0].image}
      />
      <HeroSection
        name={team[1].name}
        description={team[1].description}
        image={team[1].image}
      />
      <HeroSection
        name={team[2].name}
        description={team[2].description}
        image={team[2].image}
      />
      <HeroSection
        name={team[3].name}
        description={team[3].description}
        image={team[3].image}
      />
    </div>
  );
}
