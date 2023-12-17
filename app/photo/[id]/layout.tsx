import axiosInstance from "@/apis/axios/instance";
import { PhotoDetail } from "./(components)/PhotoDetail";
import { PhotoDetailProps } from "@/apis/axios/photos/getPhotoDetail";
import { PhotoList } from "./(components)/PhotoList";

interface LayoutProps {
  params?: { id: string };
}

async function PhotoDetailPageLayout({ params }: LayoutProps) {
  const { id } = params!;
  const { data } = await axiosInstance.get<PhotoDetailProps>(`/photos/${id}`);
  return (
    <div className="w-full h-full flex flex-col items-center gap-1">
      <PhotoDetail data={data} />
      <PhotoList />
    </div>
  );
}

export default PhotoDetailPageLayout;
