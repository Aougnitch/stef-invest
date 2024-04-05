"use client";
import { TextGenerateEffect } from "../components/ui/text-generate";

const words = "A successful investor is one who is able to outperform the market consistently. The way to outperform the market is through superior insight and rigorous analysis. I will not bother describing the intricacies of my investment strategy, you are here to make money, this is not a course!";

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} className="about-h2"  />
}
