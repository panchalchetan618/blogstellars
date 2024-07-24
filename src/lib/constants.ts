import { Client } from "@notionhq/client";
import { NotionRenderer, createBlockRenderer } from "@notion-render/client";
import {
	ImageBlockObjectResponse,
	VideoBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import hljs from "highlight.js";
import "highlight.js/styles/monokai.css";

export const notion = new Client({
	auth: process.env.NOTION_ACCESS_TOKEN,
});

const imageRenderer = createBlockRenderer<ImageBlockObjectResponse>(
	"image",
	async (data, _) => {
		const imageUrl =
			data.image.type === "file"
				? data.image.file.url
				: data.image.external.url;
		const caption = data.image.caption.map((c) => c.plain_text).join("");
		return `<img src="${imageUrl}" style="height: 400px; width: auto; margin-left: auto; margin-right: auto; border-radius: 8px;" alt="${caption}" />`;
	},
);

const videoRenderer = createBlockRenderer<VideoBlockObjectResponse>(
	"video",
	async (data, _) => {
		if (data.video.type === "external") {
			const videoUrl = data.video.external.url;
			const youtubeMatch = videoUrl.match(
				/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i,
			);
			if (youtubeMatch) {
				const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeMatch[1]}`;
				return `<iframe src="${youtubeEmbedUrl}" style="width: 100%; height: 400px; margin-left: auto; margin-right: auto; border-radius: 8px;" allowfullscreen></iframe>`;
			}
			return `<a href="${videoUrl}" target="_blank" rel="noopener noreferrer">Watch video</a>`;
		}
		if (data.video.type === "file") {
			return `<video controls><source src="${data.video.file.url}" type="video/mp4" /></video>`;
		}
		return "";
	},
);

const codeRenderer = createBlockRenderer("code", async (data, _) => {
	const code = data.code.rich_text.map((rt: any) => rt.text.content).join("");
	const language = data.code.language || "plaintext";
	const highlightedCode = hljs.highlight(code, { language }).value;

	return `
        <div style="position: relative; max-height: 500px;">
            <button style="position: absolute; top: 8px; right: 8px; background-color: #4a5568; color: white; padding: 4px 8px; border-radius: 4px;">Copy</button>
            <pre style="background-color: #2d2d2d; color: #f8f8f2; padding: 16px; border-radius: 8px; max-height: 500px; overflow: auto;">
                <code>${highlightedCode}</code>
            </pre>
        </div>
    `;
});

export const getHtml = async (blocks: any) => {
	const renderer = new NotionRenderer({
		client: notion,
		renderers: [imageRenderer, videoRenderer, codeRenderer],
	});

	renderer.use(hljsPlugin({}));
	renderer.use(bookmarkPlugin(undefined));

	const html = await renderer.render(...blocks);

	return html;
};

export function formatDate(dateString: string) {
	const options = { year: "numeric", month: "long", day: "numeric" };
	return new Date(dateString).toLocaleDateString(undefined, {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}
