"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FluidContainer } from "../FluidContainer/FluidContainer";

const tools = [
  { key: "image", label: "Image", desc: "Create images with custom styles & fine control.", status: "beta", badge: 'New', color: "#42576e" as const,  },
  { key: "video", label: "Video", desc: "Generate short videos with audio, pfx, and motion.", status: "open", color: "#efab22" as const,  },
  { key: "realtime", label: "Realtime", desc: "Realtime rendering on canvas with instant feedback.", status: "open", color: "#30a2e8"  as const },
  { key: "enhancer", label: "Enhancer", desc: "Upscale & enhance images with lossless detail.", status: "open", badge: 'New', color: "#121212" as const,  },
  { key: "edit", label: "Edit", desc: "Add / Remove / Change style or aspect from an image.", status: "open", badge: 'New', color: "#573683" as const, },
  { key: "lipsync", label: "Lipsync", desc: "Lip-sync any video to any audio.", status: "open", badge: 'New', color: "#84a993" as const,  },
  { key: "motion", label: "Motion Transfer", desc: "Map one subject’s motion onto another.", status: "open", badge: 'New', color: "#1c1d1f" as const,  },
];

export const GenerateGrid = () => {
  return (
    <section>
        <FluidContainer className="lg:pb-7">
            <div id="generate" className="py-4">
      <div className="flex items-end justify-between">
        <h3 className="text-lg sm:text-xl font-semibold">Generate</h3>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          Show all
        </Button>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <div key={tool.key} className=" flex items-center justify-between p-3 ">
            <div className=" flex items-center gap-x-2">
                <div className={"h-12 w-12 rounded-md"} style={{backgroundColor: tool.color}}></div> 
                <div className=" flex flex-col">
                   <h1 className=" text-xs font-bold flex  items-center gap-x-1 mb-[2px]">
                    {tool.label}
                    {tool.badge && (
                        <Badge className=" bg-blue-600 text-[9px]">{tool.badge}</Badge>
                    )}
                    </h1>
                    <span className=" text-xs max-w-[170px]">{tool.desc}</span>
                </div>
            </div>
            <Badge className=" bg-gray-200 text-black font-semibold">{tool.status}</Badge>
          </div>
        ))}
      </div>
    </div>
        </FluidContainer>
    </section>
  );
}
