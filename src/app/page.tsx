import { GenerateGrid } from "@/components/Landing/Generate-grid";
import { LandingHeroCarousel } from "@/components/Landing/LandingHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, File, HomeIcon, ImageIcon, Video } from "lucide-react";
import { JSX } from "react";

type TabKey = "home" | "image" | "video" | "edit" | "file";

export default function Home() {
  const navItems: { id: number; name: TabKey; icon: JSX.Element }[] = [
    { id: 1, name: "home",  icon: <HomeIcon className="h-4 w-4" /> },
    { id: 2, name: "image", icon: <ImageIcon className="h-4 w-4" /> },
    { id: 3, name: "video", icon: <Video className="h-4 w-4" /> },
    { id: 4, name: "edit",  icon: <Edit className="h-4 w-4" /> },
    { id: 5, name: "file",  icon: <File className="h-4 w-4" /> },
  ];

  const defaultTab: TabKey = navItems[0].name; // "home"

  return (
    <div className="w-full mt-5">
      <Tabs defaultValue={defaultTab} className="w-full">
        <div className="flex items-center justify-center">
          <TabsList>
            {navItems.map((item) => (
              <TabsTrigger key={item.id} value={item.name} className="gap-2">
                {item.icon}
                <span className="capitalize">{item.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* HOME */}
        <TabsContent value="home" className="mt-6">
          <LandingHeroCarousel />
          <div className="">
            <GenerateGrid />
          </div>
        </TabsContent>

        {/* IMAGE */}
        <TabsContent value="image" className="mt-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold">Image</h2>
            <p className="text-sm text-muted-foreground">
              Drop your image tools/content here.
            </p>
          </div>
        </TabsContent>

        {/* VIDEO */}
        <TabsContent value="video" className="mt-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold">Video</h2>
            <p className="text-sm text-muted-foreground">
              Video generation goes here.
            </p>
          </div>
        </TabsContent>

        {/* EDIT */}
        <TabsContent value="edit" className="mt-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold">Edit</h2>
            <p className="text-sm text-muted-foreground">
              Editing tools / UI will be here.
            </p>
          </div>
        </TabsContent>

        {/* FILE */}
        <TabsContent value="file" className="mt-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold">Files</h2>
            <p className="text-sm text-muted-foreground">
              File manager or docs UI.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
