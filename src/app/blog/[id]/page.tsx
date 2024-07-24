/* eslint-disable @next/next/no-img-element */

export const runtime = "edge";

import {
	getBlocks,
	getDatabase,
	getPage,
	getRecommendedPages,
} from "@/lib/notion";
import { NotionPage } from "@/types";
import React from "react";
import { formatDate, getHtml } from "@/lib/constants";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import clsx from "clsx";
import BackButton from "@/components/BackButton";
import { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: { id: string };
}): Promise<Metadata> {
	const id = params.id;
	const page: any = await getPage(id);

	return {
		title: page.properties.title.title[0].plain_text,
		description: page.properties.description.rich_text[0].plain_text,
	};
}

export const revalidate = 600;

export async function generateStaticParams() {
	const posts: any = await getDatabase();

	return posts.map((blog: NotionPage) => ({
		id: blog.id,
	}));
}

const BlogPage = async ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const page: any = await getPage(id);

	if (!page) {
		notFound();
	}

	const getTags = () => {
		return page.properties.tags.multi_select.map((tag: any) => tag.name);
	};

	const tags = page.properties.tags.multi_select.map((tag: any) => tag.name);
	const recomPages = await getRecommendedPages(getTags(), page.id);

	const blocks = await getBlocks(id);

	const html = await getHtml(blocks);

	const properties = page.properties;

	const getNextAndPrevLinks = () => {
		let links: {
			nextPage?: string;
			prevPage?: string;
		} = {};

		if (properties.nextPage.rich_text.length > 0) {
			links.nextPage = properties.nextPage.rich_text[0].plain_text;
		}

		if (properties.prevPage.rich_text.length > 0) {
			links.nextPage = properties.prevPage.rich_text[0].plain_text;
		}

		return links;
	};

	const docLinks = getNextAndPrevLinks();

	return (
		<>
			<BackButton />

			<div className="max-w-[768px] mx-auto text-justify">
				<div className="border-b-2 p-5">
					<div className="w-full h-64">
						<img
							src={
								page.properties?.cover?.files.length > 0
									? page.properties?.cover?.files[0].type ===
										"file"
										? page.properties.cover.files[0].file
												.url
										: page.properties?.cover?.files[0]
												.external.url
									: "https://via.placeholder.com/400x200"
							}
							alt="coverImage"
							className="rounded-lg w-full h-64 object-cover"
						/>
					</div>

					<h1 className="text-4xl max-md:text-2xl mt-4 font-bold mb-2">
						{page.properties.title.title[0].plain_text}
					</h1>

					<div className="mb-4 mt-4 max-md:text-sm flex md:items-center flex-col md:flex-row justify-between text-gray-600">
						<span>
							{formatDate(page.properties.created.created_time)}
						</span>
						<div className="flex space-x-2 flex-wrap max-md:mt-2   ">
							{tags.map((t: string) => (
								<span
									key={t}
									className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-800"
								>
									{t}
								</span>
							))}
						</div>
					</div>
				</div>

				<div
					className="prose prose-lg prose-blue prose-code:max-h-[500px] prose-code:overflow-y-scroll  min-w-full mx-auto p-5"
					dangerouslySetInnerHTML={{ __html: html }}
				></div>

				{docLinks.nextPage || docLinks.prevPage ? (
					<div className="w-full flex justify-between  p-5 items-center my-16">
						<Link
							className={clsx(
								"flex gap-2 items-center hover:gap-3",
								!docLinks.prevPage && "hidden",
							)}
							href={
								docLinks.prevPage
									? `/blog/${docLinks.prevPage}`
									: "#"
							}
						>
							<FaAngleLeft />
							Previous
						</Link>

						<Link
							className={clsx(
								"flex gap-1 items-center hover:gap-2",
								!docLinks.nextPage && "hidden",
								!docLinks.prevPage && "ml-auto",
							)}
							href={
								docLinks.nextPage
									? `/blog/${docLinks.nextPage}`
									: "#"
							}
						>
							Next <FaAngleRight />
						</Link>
					</div>
				) : null}
			</div>

			{recomPages.length > 0 && (
				<div className="max-w-[1000px] mx-auto p-5">
					<h1 className="text-4xl font-bold mb-16 text-center">
						Similar Blogs
					</h1>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{recomPages.map((rec: any) => (
							<div
								key={rec.page.id}
								className="bg-white shadow-lg rounded-lg max-w-[500px] overflow-hidden"
							>
								<img
									src={
										rec.page.properties?.cover?.files
											.length > 0
											? rec.page.properties?.cover
													?.files[0].type === "file"
												? rec.page.properties.cover
														.files[0].file.url
												: rec.page.properties?.cover
														?.files[0].external.url
											: "https://via.placeholder.com/400x200"
									}
									alt="Article Image"
									className="w-full max-w-[500px] h-52 object-cover"
								/>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-800">
										{
											rec.page.properties.title.title[0]
												.plain_text
										}
									</h3>
									<p className="mt-4 text-gray-600">
										{
											rec.page.properties.description
												.rich_text[0].plain_text
										}
									</p>
									<Link
										href={`/blog/${rec.page.id}`}
										className="mt-4 block text-blue-500"
									>
										Read more
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default BlogPage;
