"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
  },
  animate: (isSelected) => ({
    gap: isSelected ? "0.5rem" : 0,
    paddingLeft: isSelected ? "1rem" : "0.75rem",
    paddingRight: isSelected ? "1rem" : "0.75rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };

export function ExpandableTabs({
  tabs,
  className,
  activeColor = "text-primary",
  onChange,
}) {
  const [selected, setSelected] = React.useState(null);
  const outsideClickRef = React.useRef(null);

  useOnClickOutside(outsideClickRef, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index) => {
    setSelected(index);
    onChange?.(index);
  };

  const Separator = () => (
    <div className="mx-2 h-[32px] w-[1.5px] bg-border" aria-hidden="true" />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex items-center gap-2 rounded-3xl border bg-background p-1.5 shadow-sm md:gap-3 md:p-2",
        className,
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={selected === index}
            onClick={() => handleSelect(index)}
            transition={transition}
            className={cn(
              "relative flex items-center whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-medium transition-colors duration-300 md:px-6 md:py-3 md:text-base",
              selected === index
                ? cn("bg-muted", activeColor)
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            <Icon size={24} />
            <AnimatePresence initial={false}>
              {selected === index && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
