import wave_seperator from "../assets/wave_seperator.svg";
import Image from "next/image";

export default function WaveSeperator({ rotated }: { rotated?: boolean }) {
  return (
    <div
      className={"relative " + (rotated && "transform rotate-180")}
      style={{ marginTop: "-8px", marginBottom: "-8px" }}
    >
      <Image src={wave_seperator} alt="wave_seperator" />
    </div>
  );
}
