import React from "react";
import "../WidgetRight/WidgetRight.scss";
import { Visibility } from "@mui/icons-material";

function WidgetRight() {
  return (
    <div className='widgetRight'>
      <span className='widgetRightTitle'>New Join Members</span>
      <ul className='widgetRightList'>
        <li className='widgetRightListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetRightImg'
          />
          <div className='widgetRightUser'>
            <span className='widgetRightUsername'>Anna Keller</span>
            <span className='widgetRightUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetRightButton'>
            <Visibility className='widgetRightIcon' />
            Display
          </button>
        </li>
      </ul>
      <ul className='widgetRightList'>
        <li className='widgetRightListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetRightImg'
          />
          <div className='widgetRightUser'>
            <span className='widgetRightUsername'>Anna Keller</span>
            <span className='widgetRightUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetRightButton'>
            <Visibility className='widgetRightIcon' />
            Display
          </button>
        </li>
      </ul>
      <ul className='widgetRightList'>
        <li className='widgetRightListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetRightImg'
          />
          <div className='widgetRightUser'>
            <span className='widgetRightUsername'>Anna Keller</span>
            <span className='widgetRightUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetRightButton'>
            <Visibility className='widgetRightIcon' />
            Display
          </button>
        </li>
      </ul>
      <ul className='widgetRightList'>
        <li className='widgetRightListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetRightImg'
          />
          <div className='widgetRightUser'>
            <span className='widgetRightUsername'>Anna Keller</span>
            <span className='widgetRightUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetRightButton'>
            <Visibility className='widgetRightIcon' />
            Display
          </button>
        </li>
      </ul>
      <ul className='widgetRightList'>
        <li className='widgetRightListItem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetRightImg'
          />
          <div className='widgetRightUser'>
            <span className='widgetRightUsername'>Anna Keller</span>
            <span className='widgetRightUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetRightButton'>
            <Visibility className='widgetRightIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetRight;
