import React from "react";
import { organs } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function TabComp() {
  return (
    <div className="h-[70%]">
      <Tabs defaultValue="Lungs" className="w-auto mt-4">
        <TabsList className="w-fit text-zinc-50 bg-black/20 border border-zinc-50/10 flex items-center justify-center">
          {organs.map((org) => (
            <TabsTrigger key={org.name} value={org.name}>
              {org.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {organs.map((org) => (
          <TabsContent
            value={org.name}
            key={org.name}
            className="bg-black/20 text-rose-500 px-5 py-6 w-auto h-[60%] sm:text-xl"
          >
            {org.description}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default TabComp;
