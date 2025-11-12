"use client"

import { Button } from "@/components/ui/button"

interface CategoryTabsProps {
  categories: Array<{ id: string; name: string }>
  selectedCategory: string | null
  onSelectCategory: (categoryId: string | null) => void
}

export function CategoryTabs({ categories, selectedCategory, onSelectCategory }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 px-4 md:px-0">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        size="sm"
        onClick={() => onSelectCategory(null)}
        className="whitespace-nowrap"
      >
        All Items
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectCategory(category.id)}
          className="whitespace-nowrap"
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
