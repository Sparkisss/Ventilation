interface ImagePreviewProps {
  src: string;
  alt: string;
}

const ImagePreview = ({ src, alt }: ImagePreviewProps) => {
  return (
    <img
      className="rounded-2xl border-white w-[35%] flex justify-center items-center"
      src={src}
      alt={alt}
    />
  );
};

export default ImagePreview;
