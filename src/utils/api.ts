type ResourceType = "image" | "video" | "raw"; // Extend based on actual possible values
type UploadType = "upload" | "fetch" | "private" | "authenticated"; // Extend as needed

export type Asset = {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: ResourceType;
  type: UploadType;
  created_at: string; // Can use `Date` if parsed
  bytes: number;
  width: number;
  height: number;
  asset_folder: string;
  display_name: string;
  url: string;
  secure_url: string;
};

export const fetchImages = async () => {
  try {
    const response = await fetch(`/api/cloudinary`);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    const data:Asset[] = await response.json();
    console.log(data)
    return data.map((item) => item.url);
  } catch (error) {
    console.error(error);
    return [];
  }
};
