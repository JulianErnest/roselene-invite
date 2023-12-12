import { PageProps } from "./type";

export default function Navigate({
  handleBack,
  handleNext,
  currentPage,
}: PageProps) {
  return (
    <>
      {currentPage > 1 && (
        <button
          onClick={handleBack}
          className="absolute bottom-0 left-0 ml-12 mb-12 w-32 bg-secondary h-8 text-primary rounded-lg"
        >
          Previous
        </button>
      )}
      {currentPage < 4 && (
        <button
          onClick={handleNext}
          className="absolute bottom-0 right-0 mr-12 mb-12 w-32 bg-primary h-8 text-secondary rounded-lg"
        >
          Next
        </button>
      )}
    </>
  );
}
