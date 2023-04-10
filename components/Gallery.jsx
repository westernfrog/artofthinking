import { Spacer } from "@nextui-org/react";
import Image from "next/image";

export default function Gallery(params) {
  return (
    <>
      <div className="mt-5 pt-5" id="gallery">
        <h1 className="display-5 text-uppercase">Gallery</h1>
        <div className="row d-flex align-items-center justify-content-between">
          <p className="col-md-4">Become More Open.</p>
          <p className="col-md-4 text-center">Find Your Purpose.</p>
          <p className="col-md-4 text-end">Learn To Love Your Body.</p>
        </div>
      </div>
      <div className="row g-0 mb-5">
        <div className="col-md-8 border border-dark p-3">
          <div className="image1 py-5">
            <Spacer y={15} />
          </div>
        </div>
        <div className="col-md-4 border border-dark p-3">
          <div className="image3 py-5">
            <Spacer y={15} />
          </div>
        </div>
        <div className="col-md-4 border border-dark p-3">
          <div className="image4 py-5">
            <Spacer y={15} />
          </div>
        </div>
        <div className="col-md-8 border border-dark p-3">
          <div className="image2 py-5">
            <Spacer y={15} />
          </div>
        </div>
        <div className="col-md-6 border border-dark p-3">
          <div className="image6 py-5">
            <Spacer y={15} />
          </div>
        </div>
        <div className="col-md-6 border border-dark p-3">
          <div className="image5 py-5">
            <Spacer y={15} />
          </div>
        </div>
        <div className="col-md-4 border border-dark p-3">
          <video src="./videos/v1.mp4" width={"100%"} controls></video>
        </div>
        <div className="col-md-4 border border-dark p-3">
          <video src="./videos/v2.mp4" width={"100%"} controls></video>
        </div>
        <div className="col-md-4 border border-dark p-3">
          <video src="./videos/v3.mp4" width={"100%"} controls></video>
        </div>
      </div>
    </>
  );
}
