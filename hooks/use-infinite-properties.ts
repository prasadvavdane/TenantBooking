"use client";

import { useEffect, useState } from "react";

export function useInfiniteProperties() {
  const [items, setItems] = useState<unknown[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`/api/properties?page=${page}`)
      .then((res) => res.json())
      .then((data) => setItems((prev) => [...prev, ...data]));
  }, [page]);

  return { items, loadMore: () => setPage((p) => p + 1) };
}
