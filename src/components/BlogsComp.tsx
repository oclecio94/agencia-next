import React from "react";
import BlogCard from "./BlogCard";

const BlogsData = [
  {
    id: 1,
    image: "/blog/blog1.png",
    title: "Análise em tempo real",
    description:
      "Os resultados têm sido incríveis. Com o Power Digital, parece que eles estão na nossa trincheira, apoiando-nos e compreendendo-nos. Eles são como parceiros e mentores para nos ajudar a chegar onde queremos. “Os resultados têm sido incríveis.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: "/blog/blog2.png",
    title: "Análise em tempo real",
    description:
      "Os resultados têm sido incríveis. Com o Power Digital, parece que eles estão na nossa trincheira, apoiando-nos e compreendendo-nos. Eles são como parceiros e mentores para nos ajudar a chegar onde queremos. “Os resultados têm sido incríveis.",
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: "/blog/blog3.png",
    title: "Análise em tempo real",
    description:
      "Os resultados têm sido incríveis. Com o Power Digital, parece que eles estão na nossa trincheira, apoiando-nos e compreendendo-nos. Eles são como parceiros e mentores para nos ajudar a chegar onde queremos. “Os resultados têm sido incríveis.",
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Nossos blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn">Ver todas as postagens</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
