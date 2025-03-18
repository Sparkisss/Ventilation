interface ImagePreviewProps {
  src: string;
  alt: string;
}

const ImagePreview = ({ src, alt }: ImagePreviewProps) => {
  return (
    <img className="flex-1 max-w-[35%] rounded-2xl border-white" src={src} alt={alt} />
  );
};

export default ImagePreview;
