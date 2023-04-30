import React from "react";
import "../WidgetLeft/WidgetLeft.scss";

function WidgetLeft() {
  const Button = ({ type }) => {
    return <button className={"widgetLeftButton " + type}>{type}</button>;
  };
  return (
    <div className='WidgetLeft'>
      <span className='widgetLeftTitle'>Latest transactions</span>
      <table className='  widgetLeftTable '>
        <tr className='widgetLargeTr'>
          <th className='widgetLeftTh'>Customer</th>
          <th className='widgetLeftTh'>Data</th>
          <th className='widgetLeftTh'>Amount</th>
          <th className='widgetLeftTh'>Status</th>
        </tr>
        <tr className='widgetLeftTr'>
          <td className='widgetLefteUser'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='widgetLeftImg'
            />
            <span className='widgetLeftName'>Susan Carol</span>
          </td>
          <td className='widgetLeftDate'>2 Jun 2021</td>
          <td className='widgetLeftAmount'>$122.00</td>
          <td className='widgetLeftStatus'>
            <Button type='Approved' />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLeft;
