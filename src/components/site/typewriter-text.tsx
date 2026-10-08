import { useEffect, useState } from "react";

export function TypewriterText({ phrases }: { phrases: readonly string[] }) {
  const [text, setText] = useState(phrases[0] ?? "");

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let index = 0;
    let position = phrases[0]?.length ?? 0;
    let deleting = true;

    const tick = () => {
      const phrase = phrases[index] ?? "";
      position += deleting ? -1 : 1;
      setText(phrase.slice(0, Math.max(0, position)));
      let delay = deleting ? 35 : 75;
      if (deleting && position <= 0) {
        index = (index + 1) % phrases.length;
        deleting = false;
        delay = 250;
      } else if (!deleting && position >= phrase.length) {
        deleting = true;
        delay = 2000;
      }
      timeout = setTimeout(tick, delay);
    };

    const restart = () => {
      clearTimeout(timeout);
      index = 0;
      position = phrases[0]?.length ?? 0;
      deleting = true;
      setText(phrases[0] ?? "");
      if (!motion.matches && phrases.length > 1) timeout = setTimeout(tick, 2000);
    };
    restart();
    motion.addEventListener("change", restart);
    return () => {
      clearTimeout(timeout);
      motion.removeEventListener("change", restart);
    };
  }, [phrases]);

  return (
    <span className="grid text-primary">
      <span className="sr-only">{phrases.join(" ")}</span>
      {phrases.map((phrase) => <span key={phrase} aria-hidden="true" className="invisible col-start-1 row-start-1">{phrase}<span className="inline-block w-1.5">&nbsp;</span></span>)}
      <span aria-hidden="true" data-typewriter className="col-start-1 row-start-1">{text}<span className="typewriter-cursor ml-1 inline-block h-[0.85em] w-0.5 bg-primary align-baseline" /></span>
    </span>
  );
}