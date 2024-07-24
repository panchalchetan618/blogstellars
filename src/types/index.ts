export interface NotionUser {
  object: string;
  id: string;
}

export interface NotionText {
  type: string;
  text: {
    content: string;
    link: string | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
}

export interface NotionMultiSelectOption {
  id: string;
  name: string;
  color: string;
}

export interface NotionStatus {
  id: string;
  name: string;
  color: string;
}

export interface NotionProperty<T extends Record<string, unknown>> {
  id: string;
  type: string;
  [key: string]: T | string | undefined;
}

export interface NotionPage {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUser;
  last_edited_by: NotionUser;
  cover: string | null;
  icon: string | null;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  in_trash: boolean;
  properties: {
    created: NotionProperty<{ created_time: string }>;
    Slug: NotionProperty<{ rich_text: NotionText[] }>;
    tags: NotionProperty<{ multi_select: NotionMultiSelectOption[] }>;
    description: NotionProperty<{ rich_text: NotionText[] }>;
    Status: NotionProperty<{ status: NotionStatus }>;
    title: any;
  };
  url: string;
  public_url: string;
}

export interface MultiSelectOption {
  id: string;
  name: string;
  color: string;
}
