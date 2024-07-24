import { getDatabase } from "@/lib/notion";
import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 6000;

export const metadata: Metadata = {
  title: "Home",
  description: "Get detailed blogs on various technologies",
};

const Home = async () => {
  const posts: any = await getDatabase();

  return (
    <div className="flex h-screen w-screen max-w-[1200px] p-5 mx-auto justify-center items-center">
      <div className="">
        <h1 className="text-center font-bold text-4xl">Home</h1>
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-4 lg:grid-cols-3 mt-8 ">
          {posts.map((rec: any) => (
            <div
              key={rec.id}
              className="bg-white shadow-lg rounded-lg max-w-[500px] overflow-hidden"
            >
              <img
                src={
                  rec.properties?.cover?.files.length > 0
                    ? rec.properties?.cover?.files[0].type === "file"
                      ? rec.properties.cover.files[0].file.url
                      : rec.properties?.cover?.files[0].external.url
                    : "https://via.placeholder.com/400x200"
                }
                alt="Article Image"
                className="w-full max-w-[500px] h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {rec.properties.title.title[0].plain_text}
                </h3>
                <p className="mt-4 text-gray-600">
                  {rec.properties.description.rich_text[0].plain_text}
                </p>
                <Link
                  href={`/blog/${rec.id}`}
                  className="mt-4 block text-blue-500"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
