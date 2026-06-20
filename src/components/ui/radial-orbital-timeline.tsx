"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TimelineItem {
  id: number;
  title: string;
  content: string;
  /** short label shown above the title in the expanded card */
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
  /** radius of the orbit in px (defaults to 170) */
  radius?: number;
}

export default function RadialOrbitalTimeline({
  timelineData,
  radius = 170,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    // Respect users who prefer reduced motion — keep the orbit still.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let rotationTimer: ReturnType<typeof setInterval> | undefined;

    if (autoRotate && !prefersReduced) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) clearInterval(rotationTimer);
    };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{ height: radius * 2 + 220 }}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div
        className="absolute flex h-full w-full items-center justify-center"
        ref={orbitRef}
        style={{ perspective: "1000px" }}
      >
        {/* glowing core */}
        <div className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400">
          <div className="absolute h-20 w-20 animate-ping rounded-full border border-white/20 opacity-70" />
          <div
            className="absolute h-24 w-24 animate-ping rounded-full border border-white/10 opacity-50"
            style={{ animationDelay: "0.5s" }}
          />
          <div className="h-7 w-7 rounded-full bg-white/85 backdrop-blur-md" />
        </div>

        {/* orbit ring */}
        <div
          className="absolute rounded-full border border-white/10"
          style={{ width: radius * 2, height: radius * 2 }}
        />

        {timelineData.map((item, index) => {
          const position = calculateNodePosition(index, timelineData.length);
          const isExpanded = expandedItems[item.id];
          const isRelated = isRelatedToActive(item.id);
          const isPulsing = pulseEffect[item.id];
          const Icon = item.icon;

          const nodeStyle = {
            transform: `translate(${position.x}px, ${position.y}px)`,
            zIndex: isExpanded ? 200 : position.zIndex,
            opacity: isExpanded ? 1 : position.opacity,
          };

          return (
            <div
              key={item.id}
              ref={(el) => {
                nodeRefs.current[item.id] = el;
              }}
              className="absolute cursor-pointer transition-all duration-700"
              style={nodeStyle}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.id);
              }}
            >
              <div
                className={`absolute -inset-2 rounded-full ${
                  isPulsing ? "animate-pulse" : ""
                }`}
                style={{
                  background:
                    "radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(168,85,247,0) 70%)",
                }}
              />

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300
                ${
                  isExpanded
                    ? "scale-125 border-violet bg-violet text-white shadow-lg shadow-violet/40"
                    : isRelated
                    ? "border-violet/70 bg-violet/20 text-foreground"
                    : "border-border-2 bg-card text-foreground/80 hover:border-violet/60"
                }`}
              >
                <Icon size={17} />
              </div>

              <div
                className={`absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium tracking-wide transition-all duration-300
                ${isExpanded ? "scale-110 text-foreground" : "text-muted"}`}
              >
                {item.title}
              </div>

              {isExpanded && (
                <Card className="absolute top-20 left-1/2 w-64 -translate-x-1/2 overflow-visible rounded-2xl border-white/10 bg-[#131319]/90 text-foreground shadow-xl shadow-black/40 backdrop-blur-lg">
                  <div className="absolute -top-3 left-1/2 h-3 w-px -translate-x-1/2 bg-violet/60" />
                  <CardHeader className="p-5 pb-2">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet">
                      {item.category}
                    </div>
                    <CardTitle className="mt-1 text-base font-semibold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-0 text-xs leading-relaxed text-muted">
                    <p>{item.content}</p>

                    {item.relatedIds.length > 0 && (
                      <div className="mt-4 border-t border-white/10 pt-3">
                        <div className="mb-2 flex items-center">
                          <Link size={10} className="mr-1.5 text-violet" />
                          <h4 className="text-[10px] font-medium uppercase tracking-wider text-muted">
                            Related
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.relatedIds.map((relatedId) => {
                            const relatedItem = timelineData.find(
                              (i) => i.id === relatedId
                            );
                            return (
                              <Button
                                key={relatedId}
                                variant="outline"
                                size="sm"
                                className="flex h-6 items-center rounded-full border-white/15 bg-transparent px-2.5 py-0 text-[11px] text-foreground/80 transition-all hover:border-violet/50 hover:bg-white/5 hover:text-foreground"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleItem(relatedId);
                                }}
                              >
                                {relatedItem?.title}
                                <ArrowRight
                                  size={9}
                                  className="ml-1 text-violet"
                                />
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
