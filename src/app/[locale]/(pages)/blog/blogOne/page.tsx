'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogDetailsPage() {
  const { id } = useParams();

  const title = `Sustainability in Manufacturing: From Waste to Resource #${id}`;

  const recentPosts = [
    {
      id: 3,
      title: '#3 Sustainability in Manufacturing',
      author: 'Fakhr',
      category: 'Manufacture',
    },
    {
      id: 4,
      title: '#4 Sustainability in Manufacturing',
      author: 'Fakhr',
      category: 'Manufacture',
    },
    {
      id: 5,
      title: '#5 Sustainability in Manufacturing',
      author: 'Fakhr',
      category: 'Manufacture',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gray-50 py-16 px-6 md:px-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="overflow-hidden rounded-2xl shadow-lg bg-white"
        >
          <Image
            src={`/image/blog/${
              Number(id) <= 8 ? '1.jpg' : Number(id) <= 12 ? '2.jpg' : '3.jpg'
            }`}
            alt={title}
            width={800}
            height={400}
            className="w-full h-[400px] object-cover"
          />
          <div className="p-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            >
              {title}
            </motion.h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span>bishoy</span>
              <span>|</span>
              <span>Manufacture</span>
              <span>|</span>
              <span>August 9, 2025</span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-700 leading-relaxed"
            >
              Sustainability is no longer optional in manufacturing—it’s a
              necessity. Many manufacturers are now rethinking their processes
              to reduce carbon emissions, recycle materials, and adopt renewable
              energy. From using biodegradable packaging to reusing scrap
              materials, the industry is finding creative ways to protect the
              planet while maintaining profitability. The green revolution in
              manufacturing is here, and it’s shaping the way we produce
              everything.
            </motion.p>
          </div>
        </motion.div>

        {/* Recent Blogs Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 border-l-4 border-blue-600 pl-4">
            Recent Blogs
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <Link href={`/en/blog/${post.id}`}>
                  <Image
                    src={`/image/blog/${
                      post.id <= 8 ? '1.jpg' : post.id <= 12 ? '2.jpg' : '3.jpg'
                    }`}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-gray-800 hover:text-blue-600 transition">
                      {post.title}
                    </h3>
                    <div className="mt-2 text-sm text-gray-500 flex gap-2">
                      <span>{post.author}</span> <span>|</span>{' '}
                      <span>{post.category}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
