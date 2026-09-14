"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Eye,
  ArrowUpRight,
} from "lucide-react";
import { ProjectEvidenceItem } from "@/lib/projects-data";

interface ProjectEvidenceInspectorProps {
  evidenceList: ProjectEvidenceItem[];
  defaultHeroImage: string;
  projectTitle: string;
  liveUrl?: string;
}

export default function ProjectEvidenceInspector({
  evidenceList,
  defaultHeroImage,
  projectTitle,
  liveUrl,
}: ProjectEvidenceInspectorProps) {
  const [activeTabId, setActiveTabId] = useState<string>(
    evidenceList && evidenceList.length > 0 ? evidenceList[0].id : "default"
  );
  const [isFullscreenIframe, setIsFullscreenIframe] = useState<boolean>(false);

  const currentItem =
    evidenceList && evidenceList.length > 0
      ? evidenceList.find((item) => item.id === activeTabId) || evidenceList[0]
      : null;

  return (
    <div className="mb-8">
      {/* MINIMAL TAB SWITCHER (Only if multiple items exist) */}
      {evidenceList && evidenceList.length > 1 && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
          {evidenceList.map((item) => {
            const isActive = item.id === activeTabId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all whitespace-nowrap flex items-center gap-2 shrink-0 border cursor-pointer ${
                  isActive
                    ? "bg-purple-600/30 text-white border-purple-400/50 shadow-sm"
                    : "bg-white/[0.04] text-neutral-400 hover:text-neutral-200 border-white/10 hover:bg-white/[0.08]"
                }`}
              >
                {item.type === "iframe" && <Layers className="w-3.5 h-3.5 text-purple-400" />}
                {item.type === "image" && <Eye className="w-3.5 h-3.5 text-neutral-300" />}
                <span className="font-medium">{item.tabLabel}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* VISUAL STAGE CONTAINER */}
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#07030e] shadow-2xl relative">
        {/* Subtle Bar for Iframes / Pop-out */}
        {currentItem?.type === "iframe" && (
          <div className="flex items-center justify-between px-4 py-2 bg-[#0d0818] border-b border-white/10 text-xs font-mono text-neutral-400">
            <span className="text-xs text-neutral-300 font-medium truncate">
              {currentItem.title}
            </span>
            {currentItem.openUrl && (
              <a
                href={currentItem.openUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-purple-300 hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>{currentItem.openLabel || "Abrir enlace"}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>
        )}

        {/* STAGE CONTENT DISPLAY */}
        <div className="relative w-full bg-neutral-950">
          <AnimatePresence mode="wait">
            {currentItem?.type === "iframe" && currentItem.src && (
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-[460px] sm:h-[540px] md:h-[620px] bg-[#07030f]"
              >
                <iframe
                  src={currentItem.src}
                  title={currentItem.title}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </motion.div>
            )}

            {currentItem?.type === "image" && currentItem.src && (
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative aspect-[16/9] w-full bg-neutral-950"
              >
                <Image
                  src={currentItem.src}
                  alt={currentItem.title}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
            )}

            {!currentItem && (
              <div className="relative aspect-[16/9] w-full bg-neutral-950">
                <Image
                  src={defaultHeroImage}
                  alt={projectTitle}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Minimal Caption Footer */}
        {currentItem?.description && (
          <div className="px-5 py-3 bg-[#0a0616] border-t border-white/[0.08] flex items-center justify-between text-xs text-neutral-400">
            <span className="truncate">{currentItem.description}</span>
          </div>
        )}
      </div>
    </div>
  );
}
