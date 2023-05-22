import Review from "../../components/ui/Review";

const Reviews = () => {
  return (
    <div className="px-[160px] py-5 space-y-7">
      <div className="flex items-end gap-2">
        <h1 className="font-bold text-2xl leading-6">Your Reviews</h1>
        <p className="text-base font-medium text-[#4D4D4D]">
          last <span className="font-bold underline">30 days</span>
        </p>
      </div>
      <div>
        <img className="object-cover" src="/images/group4.png" alt="star 4" />
      </div>
      <div>
        <p className="font-bold text-2xl leading-6">Reviews (2)</p>
      </div>
      <div className="space-y-7">
        <Review
          title="Elliot "
          date="December 1, 2022"
          description="The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"
        />
        <Review
          title="Sandy "
          date=" November 23, 2022"
          description="This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!"
        />
      </div>
    </div>
  );
};

export default Reviews;
