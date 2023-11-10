import ModalWrapper from "@/components/common/ModalWrapper";
import { ModalWrapperProps } from "@/types/types";
import PostForm from "./PostForm";

export const PostModal = ({ onCloseModal }: ModalWrapperProps) => {
  return (
    <ModalWrapper
      title="포스트 등록"
      onCloseModal={onCloseModal}
      classNames="w-9/12 h-auto "
    >
      <PostForm />
    </ModalWrapper>
  );
};
