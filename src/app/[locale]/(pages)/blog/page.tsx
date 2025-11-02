'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Search, Loader2 } from 'lucide-react';
import { Link } from '@/i18n/routing';

const MOCK_POSTS = Array.from({ length: 15 }).map((_, i) => {
  let img = '/image/blog/1.jpg';
  if (i >= 8 && i < 12) img = '/image/blog/2.jpg';
  else if (i >= 12) img = '/image/blog/3.jpg';

  return {
    id: i + 1,
    title: `Sustainability in Manufacturing: From Waste to Resource #${i + 1}`,
    excerpt:
      'Quick practical guide to select the right polymer for packaging, piping or custom molded parts.',
    image: img,
    date: new Date(Date.now() - i * 86400000).toISOString(),
    author: i % 2 === 0 ? 'Aramco Engineering' : 'Aramco Insights',
    category: ['Manufacturing', 'Sustainability', 'Design'][i % 3],
    readTime: 3 + (i % 5),
  };
});

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [posts, setPosts] = useState<typeof MOCK_POSTS>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      setPosts(MOCK_POSTS);
      setLoading(false);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return Array.from(set);
  }, [posts]);

  const filtered = useMemo(() => {
    return posts
      .filter((p) => (category ? p.category === category : true))
      .filter((p) =>
        query.trim() === ''
          ? true
          : `${p.title} ${p.excerpt} ${p.author}`
              .toLowerCase()
              .includes(query.toLowerCase())
      );
  }, [posts, category, query]);

  const visible = filtered.slice(0, visibleCount);

  function loadMore() {
    setVisibleCount((v) => v + 6);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Aramco Blog</h1>
          <p className="text-muted-foreground mt-1 max-w-xl">
            Insights, guides and updates from Aramco — innovations in plastic
            manufacturing, sustainability and product design.
          </p>
        </div>

        <div className="flex w-full max-w-2xl items-center gap-3">
          <div className="relative flex-1">
            <Input
              aria-label="Search posts"
              placeholder="Search articles, authors, topics..."
              value={query}
              onChange={(e: any) => setQuery(e.target.value)}
              className="pr-10"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </div>
          </div>

          <div className="hidden md:flex gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                setQuery('');
                setCategory(null);
              }}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        <button
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            category === null
              ? 'bg-primary text-white'
              : 'bg-muted/40 text-muted-foreground'
          }`}
          onClick={() => setCategory(null)}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory((prev) => (prev === c ? null : c))}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              category === c
                ? 'bg-primary text-white'
                : 'bg-muted/30 text-muted-foreground'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-60 w-full animate-pulse rounded-lg bg-muted/30"
              />
            ))}
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visible.map((post) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
              >
                <Card className="h-full hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative h-44 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent>
                    <CardHeader className="p-0">
                      <CardTitle className="line-clamp-2 text-lg font-semibold">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardDescription className="text-sm text-muted-foreground">
                      {post.excerpt}
                    </CardDescription>

                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                      <div>{new Date(post.date).toLocaleDateString()}</div>
                      <div>{post.readTime} min read</div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <Link
                        href={`/blog/blogOne`}
                        className="text-primary font-medium"
                      >
                        Read more →
                      </Link>
                      <div className="text-sm text-muted-foreground">
                        {post.author}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && visibleCount < filtered.length && (
        <div className="mt-8 flex justify-center">
          <Button onClick={loadMore} className="px-8 py-3">
            Load more
          </Button>
        </div>
      )}

      {!loading && filtered.length === 0 && (
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold">No articles found</h3>
          <p className="text-muted-foreground mt-2">
            Try a different search term or check back later.
          </p>
        </div>
      )}
    </div>
  );
}
