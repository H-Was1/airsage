import React from "react";
import { organs } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function TabComp() {
  return (
    <div className="h-[70%]">
      <Tabs defaultValue="Lungs" className="w-auto mt-4">
        <TabsList className="w-fit text-zinc-50 bg-black/20 border border-zinc-50/10 flex items-center justify-center max-md:flex-wrap max-md:h-24 rounded-3xl">
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
            className="bg-black/20 text-rose-500 px-5 pb-1 pt-6 w-auto sm:text-xl rounded-[3rem]"
          >
            {org.description}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default TabComp;
