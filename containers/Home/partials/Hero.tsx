import HeroImage from "@/components/HeroImage";
import { IHeros } from "@/types/home";

export default function Hero({ heros }: { heros: IHeros[] | undefined }) {
  return <HeroImage heros={heros} />;
}
