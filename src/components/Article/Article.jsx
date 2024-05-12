import PropTypes from "prop-types";

const Article = ({ article }) => {
  const { title, cover, description, publish_date } = article;
  return (
    <div className="card  bg-base-200  shadow-xl">
      <figure className="px-2 pt-2">
        <img src={cover} alt="course cover" className="rounded-xl " />
      </figure>
      <div className="card-body ">
        <div className="items- text-left">
          <h2 className="card-title ">{title}</h2>
          <p>{description}</p> <br />
          <p className="font-bold"> published: {publish_date}</p>
        </div>

        <div className="card-actions left">
          <button className="btn btn-primary">Enroll Now</button>
        </div>
      </div>
    </div>

    // <div className="grid grid-cols-2 gap-4">
    //   <div className="card w-1/2 flex bg-base-200 shadow-xl">
    //     <figure className="px-10 pt-10">
    //       <img src={cover} alt="Shoes" className="rounded-xl" />
    //     </figure>
    //     <div className="card-body items-center text-left">
    //       <h2 className="card-title">{title}</h2>
    //       <p>{description}</p>
    //       <div className="card-actions">
    //         <button className="btn btn-primary">Buy Now</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="flex max-w-1/2">
    //   <div>
    //     <img src={cover} alt="" />
    //   </div>
    //   <div>
    //     <h2>{title}</h2>
    //   </div>
    // </div>
  );
};

Article.propTypes = {
  article: PropTypes.object,
};
export default Article;
