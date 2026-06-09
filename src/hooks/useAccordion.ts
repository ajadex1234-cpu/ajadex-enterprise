"use client";

import { useState } from "react";

export function useAccordion(initialOpenIndex = 0) {
  const [openIndex, setOpenIndex] = useState(initialOpenIndex);

  return { openIndex, setOpenIndex };
}
