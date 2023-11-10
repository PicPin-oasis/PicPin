"use client";

import { Header } from "@/components/header/Header";
import { PostList } from "./(components)/PostList";
import { FilterTab } from "./(components)/FilterTab";
import { UploaderButton } from "./(components)/UploaderButton";
import { useModal } from "@/hooks/useModal";
import { PostModal } from "./(components)/PostModal";

const PostPageLayout = () => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <Header />
      <div className="w-full flex justify-between">
        <FilterTab />
        <UploaderButton handleOpenModal={handleOpenModal} />
      </div>
      <PostList />
      {isModalOpen && <PostModal onCloseModal={handleCloseModal} />}
    </div>
  );
};
export default PostPageLayout;
