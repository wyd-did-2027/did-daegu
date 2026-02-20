import { Section, SectionTitle } from "../ui/common-layout";
import Faq from "../faq";
import type { FaqItem } from "@/lib/notion";

interface FaqSectionProps {
  items: FaqItem[];
}

export default function FaqSection({ items }: FaqSectionProps) {
  return (
    <Section id="faq" className="bg-gray-100 min-h-auto">
      <SectionTitle>FAQ</SectionTitle>
      <Faq items={items} />
    </Section>
  );
}
