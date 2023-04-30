import React from "react";
import "../Home/home.scss";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData.js";
import WidgetLeft from "../../components/WidgetLeft/WidgetLeft";
import WidgetRight from "../../components/WidgetRight/WidgetRight";

function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='User Analytics'
        grid
        dataKey='Active User'
      />
      <div className='homeWidgets'>
        <WidgetRight />
        <WidgetLeft />
      </div>
    </div>
  );
}

export default Home;
