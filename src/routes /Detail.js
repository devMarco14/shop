import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail({ shoes }) {
  let [alert, setAlert] = useState(true);

  let { id } = useParams();
  let shoesData = shoes.find((i) => i.id == id);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {}; //clean up function
  }, []);

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
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
