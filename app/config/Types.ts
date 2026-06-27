export type NodeType = {
  id: string;
  name: string;
  parentId: string | null;
  type: "file" | "folder";
  ownerId: string | null;
  size: number;
  mimeType: "video/mp4" | "image/png";
  createdAt: Date;
  updatedAt: Date;
};
