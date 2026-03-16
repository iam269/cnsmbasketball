import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[500px] pt-[1000px]">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Descoperă{" "}
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none block">
                Echipa CNSM Baschet
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1400&h=720&fit=crop"
          alt="Echipa de baschet"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

