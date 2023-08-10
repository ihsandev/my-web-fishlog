import HeroImage from "@/components/HeroImage/page";

const heros = [
  {
    title: "Connecting the Nation throught the fisheries supply cain",
    src: "fish-1.jpg",
  },
  {
    title: "Connecting the Nation throught the fisheries supply cain",
    src: "fish-2.jpg",
  },
  {
    title: "Connecting the Nation throught the fisheries supply cain",
    src: "fish-3.jpg",
  },
];

export default function Hero() {
  return <HeroImage heros={heros} />;
}
