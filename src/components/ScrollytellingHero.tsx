import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface LetterConfig {
  char: string;
  finalX: number;
  finalY: number;
  text: string;
}

const LETTERS: LetterConfig[] = [
  {
    char: "S",
    finalX: 6,
    finalY: -25,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
  },
  {
    char: "H",
    finalX: 21,
    finalY: -25,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    char: "R",
    finalX: 25,
    finalY: -3,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    char: "B",
    finalX: 8,
    finalY: 20,

    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
  {
    char: "G",
    finalX: -20,
    finalY: 20,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
  {
    char: "Y",
    finalX: -38,
    finalY: -3,
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
];

interface AnimatedLetterProps {
  config: LetterConfig;
  scrollYProgress: MotionValue<number>;
}

function AnimatedLetter({ config, scrollYProgress }: AnimatedLetterProps) {
  const x = useTransform(
    scrollYProgress,
    [0, 0.55],
    ["0vw", `${config.finalX}vw`],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.55],
    ["0vh", `${config.finalY}vh`],
  );

  const scale = useTransform(scrollYProgress, [0, 0.55], [1, 1.15]);

  // Text reveal (opacity + subtle upward slide)
  const textOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.8, 1],
    [0, 1, 1, 0],
  );
  const textTranslateY = useTransform(
    scrollYProgress,
    [0.5, 0.7],
    ["14px", "0px"],
  );

  return (
    <Box
      component={motion.div}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={{ x, y } as any}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        willChange: "transform",
      }}
    >
      {/* ── The Letter ───────────────────────────────────────────── */}
      <Box
        component={motion.div}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={{ scale } as any}
      >
        <Typography
          sx={{
            fontFamily: "didot",
            fontSize: "clamp(3.5rem, 7rem, 7.5rem)",
            fontWeight: 700,
            textTransform: "uppercase",
            background:
              "linear-gradient(135deg, #d19e1d 0%, #ffd86e 50%, #e3a812 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 24px rgba(192, 132, 252, 0.3))",
            userSelect: "none",
            cursor: "default",
          }}
        >
          {config.char}
        </Typography>
      </Box>

      {/* ── Placeholder Text (fades in underneath) ───────────────── */}
      <Box
        component={motion.div}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={{ opacity: textOpacity, y: textTranslateY } as any}
        sx={{
          position: "absolute",
          top: "80%",
          mt: 0,
          width: 200,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "clamp(0.7rem, 0.85vw, 0.9rem)",
            lineHeight: 1.65,
            color: "rgba(255, 255, 255, 0.5)",
            letterSpacing: "0.015em",
          }}
        >
          {config.text}
        </Typography>
      </Box>
    </Box>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   ScrollytellingHero — the full-page scrollable section
   ═══════════════════════════════════════════════════════════════════ */

export default function ScrollytellingHero() {
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Fade out the "scroll" hint as soon as the user starts scrolling
  const scrollHintOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 1],
    [1, 0, 0],
  );
  const logoOpacity = useTransform(scrollYProgress, [0.2, 0.8, 1], [0, 1, 1]);
  return (
    <Box
      ref={trackRef}
      sx={{
        height: "1000vh",
        position: "relative",
        backgroundColor: "#08060d",
      }}
    >
      {/* ── THE CAMERA (sticky viewport) ─────────────────────────── */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          background: `
            radial-gradient(ellipse at 20% 35%, rgba(252, 250, 132, 0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 65%, rgba(250, 247, 96, 0.04) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 50%, rgba(45, 45, 27, 0.4) 0%, transparent 70%),
            radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.35) 100%),
            #08060d
          `,
        }}
      >
        <Box
          component={motion.div}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style={{ opacity: logoOpacity } as any}
          sx={{
            position: "absolute",
            top: "calc(50%-100px)",
            left: "calc(50%-100px)",
          }}
        >
          <img src={logo} alt="logo" width={200} height={200} />
        </Box>
        {/* ── Letter Row ──────────────────────────────────────────── */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0,
          }}
        >
          {LETTERS.map((config) => (
            <AnimatedLetter
              key={config.char}
              config={config}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </Box>

        {/* ── Scroll Indicator ────────────────────────────────────── */}
        <Box
          component={motion.div}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style={{ opacity: scrollHintOpacity } as any}
          sx={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            pointerEvents: "none",
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.65rem",
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.25)",
            }}
          >
            Scroll
          </Typography>

          {/* Mouse / trackpad icon */}
          <Box
            sx={{
              width: 22,
              height: 34,
              borderRadius: "11px",
              border: "1.5px solid rgba(255, 255, 255, 0.15)",
              display: "flex",
              justifyContent: "center",
              pt: "8px",
            }}
          >
            <Box
              component={motion.div}
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              sx={{
                width: 3,
                height: 7,
                borderRadius: "1.5px",
                backgroundColor: "rgba(255, 255, 255, 0.35)",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
