"use server";

import {
  PageObjectResponse,
  BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { notion } from "./constants";

export const getDatabase = async () => {
  console.log(`\n\n\n ${process.env.NOTION_BLOG_DATABASE_ID} \n\n\n`);
  const response = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID as string,
  });

  return response.results;
};

export const getPage = async (
  pageId: string,
): Promise<PageObjectResponse | boolean> => {
  try {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response as PageObjectResponse;
  } catch (error: any) {
    console.log(error);
    return false;
  }
};

export const getBlocks = async (blockId: string) => {
  const res = await notion.blocks.children.list({
    //  start_cursor: cursor,
    block_id: blockId,
  });

  return res.results as BlockObjectResponse[];
};

export const getRecommendedPages = async (tags: string[], pageId: string) => {
  const allPages: any = await getDatabase();
  const myTags = tags;

  console.log(myTags);

  const _pages = allPages
    .filter((p: any) => p.id !== pageId)
    .map((page: any) => {
      const allTags = page.properties.tags.multi_select.map(
        (tag: any) => tag.name,
      );

      const similarityCount = allTags.filter((tag: any) =>
        myTags.includes(tag),
      ).length;

      return {
        page,
        similarityCount: similarityCount > 0 ? similarityCount : 0,
      };
    })
    .sort((a: any, b: any) => b.similarityCount - a.similarityCount)
    .slice(0, 5);

  return _pages;
};
