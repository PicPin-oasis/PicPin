import axiosInstance from "@/apis/axios/instance";
import PhotoDetail from "./(components)/PhotoDetail";
import { PhotoDetailProps } from "@/apis/axios/photos/getPhotoDetail";

interface LayoutProps {
  params?: { id: string };
}

async function PhotoDetailPageLayout({ params }: LayoutProps) {
  const { id } = params!;
  const { data } = await axiosInstance.get<PhotoDetailProps>(`/photos/${id}`);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-1 OwO">
      <PhotoDetail data={data} />
    </div>
  );
}

export default PhotoDetailPageLayout;
