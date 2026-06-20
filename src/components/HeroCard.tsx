"use client";

import { useState, useEffect } from "react";
import { IdBadgeCard } from "@/components/ui/id-badge-card";
import { profile } from "@/lib/data";

export function HeroCard() {
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const TZ = "Asia/Kolkata"; // IST
    const update = () => {
      const hour = Number(
        new Intl.DateTimeFormat("en-US", {
          timeZone: TZ,
          hour: "2-digit",
          hourCycle: "h23",
        }).format(new Date())
      );
      // working hours: 11:00–20:00 IST
      setAvailable(hour >= 11 && hour < 20);
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <IdBadgeCard
      className="mb-8"
      image={profile.photo}
      imagePosition="58% 18%"
      name={profile.name}
      role={profile.roles[0]}
      statusLabel={available ? "Available for work" : "Away"}
      statusActive={available}
      brandName="prab"
      brandTld=".dev"
      markChar="P"
      unit="01"
      idNo="PRAB-002"
      serial="001599951"
      backBrand="prab"
    />
  );
}
