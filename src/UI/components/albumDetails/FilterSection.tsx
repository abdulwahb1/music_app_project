"use client";
import { ChevronDown } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterSection {
  id: string;
  title: string;
  options: FilterOption[];
}

interface FilterSectionProps {
  sections: FilterSection[];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (sectionId: string, optionId: string) => void;
  className?: string;
}

export function FilterSection({
  sections,
  selectedFilters,
  onFilterChange,
  className,
}: FilterSectionProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-white ml-2">Filters</h2>
        <div className="flex items-center gap-1 text-sm">
          Sort by
          <span className="font-medium">General</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
      <Accordion
        type="single"
        collapsible
        className="space-y-2 p-2 rounded-lg bg-[#141414] text-white "
      >
        {sections.map((section) => (
          <AccordionItem
            key={section.id}
            value={section.id}
            className="border-none"
          >
            <AccordionTrigger className="py-2 px-4 text-sm hover:no-underline rounded-md hover:bg-black/50">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="pt-1 pb-3 ">
              <div className="space-y-2 px-4 mt-2">
                {section.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${section.id}-${option.id}`}
                      checked={selectedFilters[section.id]?.includes(option.id)}
                      onCheckedChange={() =>
                        onFilterChange(section.id, option.id)
                      }
                      className=" border-white"
                    />
                    <label
                      htmlFor={`${section.id}-${option.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
