import { useEffect, useState } from "react";
import {
  Container,
  ImageGallery,
  ImageModal,
  LoadMore,
  Loader,
  SearchBar,
  ErrorMessage,
} from "./components";
import { getImages } from "./service/unsplashApi";

import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImage] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isLoading, setLoader] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setLoader(true);
        const { images, totalImages, totalPages } = await getImages(
          query,
          page
        );

        if (!totalImages) {
          setIsEmpty(true);
          return;
        }

        setImage((prev) => [...prev, ...images]);
        setShowLoadMore(page < totalPages);
      } catch (error) {
        notify(error.message);
      } finally {
        setLoader(false);
      }
    };
    getData();
  }, [query, page]);

  const onSubmit = (query) => {
    setQuery(query);
    setImage([]);
    setPage(1);
    setShowLoadMore(false);
    setIsEmpty(false);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleOpenModal = (largeImage) => {
    setIsModalOpen(true);
    setSelectedImage(largeImage);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const notify = (errorMessage) => toast.error(errorMessage);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <Container>
        {images.length > 0 && (
          <ImageGallery images={images} openModal={handleOpenModal} />
        )}
        {showLoadMore && <LoadMore onClick={handleLoadMore} />}
        {isLoading && <Loader />}
        {isEmpty && <ErrorMessage />}
        <Toaster />

        <ImageModal
          isModalOpen={isModalOpen}
          closeModal={handleCloseModal}
          selectedImage={selectedImage}
        />
      </Container>
    </>
  );
};

export default App;
