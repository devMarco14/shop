import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail({ shoes }) {
  let { id } = useParams();
  let shoesData = shoes.find((i) => i.id == id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
            alt="shoes"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoesData.title}</h4>
          <p>{shoesData.content}</p>
          <p>{shoesData.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
