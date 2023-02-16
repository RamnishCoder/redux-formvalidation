import React from "react";
import { connect } from "react-redux";
import { helloRedux } from "./Action";
const Home = () => {
  return (
    <div>
      <button onClick={() =>helloRedux()}>Click</button>
    </div>
  );
};

const MapDispatchToProps = dispatch => ({
  helloRedux: () => dispatch(helloRedux()),
});
const mapStateToProps = state => ({});

const HomeCmp = connect(mapStateToProps, MapDispatchToProps)(Home);
export default HomeCmp;
