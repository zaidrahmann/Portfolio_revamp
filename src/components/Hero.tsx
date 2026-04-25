"use client";

import { animate, motion, useMotionValue, useTransform, type PanInfo } from "framer-motion";
import { FileText, Mail, RefreshCw } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { type Dispatch, type SetStateAction, useState } from "react";

const heroPhotos: Card[] = [
  { id: 1, name: "1st" },
  { id: 2, name: "2nd" },
  { id: 3, name: "3rd" },
  { id: 4, name: "4th" },
  { id: 5, name: "5th" },
  { id: 6, name: "6th" },
  { id: 7, name: "7th" },
];

export default function Hero() {
  const [cards, setCards] = useState<Card[]>(heroPhotos);
  const resetCards = () => setCards(heroPhotos);
  const handleImageError = (id: number) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <section id="home" className="section-shell pt-8">
      <div className="container-shell">
        <div className="mt-2 flex flex-col gap-8 md:flex-row-reverse md:items-center md:justify-between">
          <div className="mx-auto md:mx-0 md:mr-6">
            <div className="relative grid h-72 w-56 place-items-center">
              {cards.length === 0 && (
                <button
                  type="button"
                  onClick={resetCards}
                  className="z-20 inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  style={{ gridRow: 1, gridColumn: 1 }}
                >
                  <RefreshCw size={15} />
                  Again
                </button>
              )}
              {cards.map((card, index) => {
                const depth = index;
                return (
                  <SwipeCard
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    cards={cards}
                    setCards={setCards}
                    depth={depth}
                    onImageError={handleImageError}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex max-w-82 flex-col sm:max-w-[24rem]">
            <h1 className="title-serif text-4xl leading-[1.02] sm:text-5xl">
              hi zaid here.{" "}
              <span aria-hidden className="font-sans text-4xl">
                👋
              </span>
            </h1>
            <p className="mt-2 whitespace-nowrap text-sm font-medium text-foreground sm:text-base">
              AI Engineer from Dhaka, Bangladesh{" "}
              <span
                aria-label="Bangladesh flag"
                role="img"
                className="inline-flex align-middle"
              >
                <svg
                  viewBox="0 0 30 20"
                  className="h-3.5 w-5 rounded-[2px] border border-black/10"
                >
                  <rect width="30" height="20" fill="#006a4e" />
                  <circle cx="13.2" cy="10" r="5.2" fill="#f42a41" />
                </svg>
              </span>
            </p>
            <p className="mt-4 max-w-sm text-balance text-sm text-foreground sm:text-base">
              I build production AI agents and backend systems that automate
              workflows and ship measurable business results.
            </p>


            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="/resume/Zaid_Rehman_CV.pdf"
                download="Zaid_Rehman_CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-base font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Resume
                <FileText size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/zaidrehmann/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={22} />
              </a>
              <a
                href="https://github.com/zaidrahmann"
                target="_blank"
                rel="noopener noreferrer"
                className="link-muted"
                aria-label="GitHub"
              >
                <GithubIcon size={22} />
              </a>
              <a
                href="mailto:zaidrehman3103@gmail.com"
                className="link-muted"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Card = {
  id: number;
  name: string;
};

function getCandidateSources(name: string) {
  return [
    `/pfp/${name}.jpg`,
    `/pfp/${name}.jpeg`,
    `/pfp/${name}.webp`,
    `/pfp/${name}.avif`,
    `/pfp/${name}.HEIC`,
    `/pfp/${name}.heic`,
  ];
}

function SwipeCard({
  id,
  name,
  cards,
  setCards,
  depth,
  onImageError,
}: {
  id: number;
  name: string;
  cards: Card[];
  setCards: Dispatch<SetStateAction<Card[]>>;
  depth: number;
  onImageError: (id: number) => void;
}) {
  const sourceCandidates = getCandidateSources(name);
  const [sourceIndex, setSourceIndex] = useState(0);
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-120, 0, 120], [0, 1, 0]);
  const isFront = id === cards[0]?.id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 === 0 ? 5 : -5;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100) {
      setCards((prev) => prev.filter((card) => card.id !== id));
      return;
    }

    animate(x, 0, {
      type: "spring",
      stiffness: 400,
      damping: 40,
    });
  };

  return (
    <motion.div
      className="absolute h-72 w-56 origin-bottom overflow-hidden rounded-2xl border border-border bg-surface shadow-sm hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        zIndex: cards.length - depth,
        x,
        opacity,
        rotate,
        boxShadow: isFront
          ? "0 16px 28px -14px rgb(0 0 0 / 0.35), 0 10px 12px -8px rgb(0 0 0 / 0.25)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : Math.max(0.86, 0.95 - (depth + 1) * 0.03),
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: -160, right: 160, top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
    >
      <img
        src={sourceCandidates[sourceIndex]}
        alt={isFront ? "Portrait of Zaid Rehman" : ""}
        className="h-full w-full pointer-events-none select-none object-cover"
        draggable={false}
        fetchPriority={isFront ? "high" : "low"}
        loading={isFront ? "eager" : "lazy"}
        onError={() => {
          if (sourceIndex < sourceCandidates.length - 1) {
            setSourceIndex((prev) => prev + 1);
            return;
          }
          onImageError(id);
        }}
      />
    </motion.div>
  );
}
