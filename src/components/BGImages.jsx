import BGImage1 from "../bons/bg_1.jpg";
import BGImage2 from "../bons/bg_2.jpg";

export default function BGImages() {
    return (
      <>
        <div className="bg-elems l">
          <img alt="bg_1.jpg" src={BGImage1}></img>
        </div>
        <div className="bg-elems r">
          <img alt="bg_2.jpg" src={BGImage2}></img>
        </div>
      </>
    );
}