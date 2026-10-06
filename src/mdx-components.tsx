import type { MDXComponents } from "mdx/types";
import { Learnings } from "@/components/Learnings";

const components: MDXComponents = {
  Learnings,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
