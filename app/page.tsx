import Image from "next/image";
import { BackgroundBeamsWithCollisionDemo } from "./Test-new-ui";
import { FloatingNavDemo } from "./Navbar";
import { TimelineDemo } from "./Timeline";
import { SignupFormDemo } from "./Signup";
import { BackgroundLinesDemo } from "./Background-line";
import { LampDemo } from "./Lampdemo";
import { SparklesPreview } from "./Sparlkes";

export default function Home() {
  return (
    <div>
      <FloatingNavDemo />
      {/* <BackgroundBeamsWithCollisionDemo /> */}
      {/* <SparklesPreview /> */}
      {/* <LampDemo /> */}
      <BackgroundLinesDemo />
      <TimelineDemo />
      <SignupFormDemo />
    </div>
  );
}
