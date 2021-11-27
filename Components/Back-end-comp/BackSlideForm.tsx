const BackSlideForm = () => {
    return (
      <div>
        <div>
          <div className="w-9/12 mx-auto">
            <h1 className="text-center text-3xl"> Slide image </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Image</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Image Link"
                className="input input-primary input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Second Image</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Image Link"
                className="input input-secondary input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Third Image</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Image Link"
                className="input input-accent input-bordered"
              />
            </div>
            <div className="">
              <button className="btn btn-outline btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BackSlideForm
