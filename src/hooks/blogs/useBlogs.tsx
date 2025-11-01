"use client";

import { Blog, getBlogs } from "@/actions/blogs/getBlogs";
import { useState, useEffect, useCallback, useRef } from "react";

interface UseInfiniteBlogsReturn {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
  observerRef: (node: HTMLDivElement | null) => void;
}

export function useInfiniteBlogs(initialLimit: number): UseInfiniteBlogsReturn {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef<IntersectionObserver | null>(null);
  const limit = initialLimit;

  const fetchBlogs = useCallback(
    async (pageNum: number) => {
      if (loading) return;

      setLoading(true);
      setError(null);

      try {
        const result = await getBlogs(pageNum, limit);

        if (result.success) {
          const newBlogs = result.data?.blogs || [];
          const meta = result.data?.meta;

          setBlogs((prev) => [...prev, ...newBlogs]);

          if (meta) {
            setHasMore(meta.page < meta.totalPages);
          } else {
            setHasMore(newBlogs.length === limit);
          }
        } else {
          setError(result.error || "Failed to fetch blogs");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    },
    [limit, loading]
  );

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  const loadMore = useCallback(() => {
    if (hasMore && !loading) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchBlogs(nextPage);
    }
  }, [hasMore, loading, page, fetchBlogs]);

  const observerRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMore]
  );

  return {
    blogs,
    loading,
    error,
    hasMore,
    loadMore,
    observerRef,
  };
}
