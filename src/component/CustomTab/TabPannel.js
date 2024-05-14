import React, { useState } from "react";

const TabsPanel = (props) => {
  const [selected, setSelected] = useState(props.selected || 0);

  const renderTab = (index) => {
    setSelected(index);
  };

  const renderMenu = () => {
    const panels = props.children;
    return panels.map((elem, index) => {
      let selectedStyle = index === selected ? " selected" : " ";
      let icon = elem.props.icon;
      let display = elem.props.hide;
      return display ? null : (
        <li style={{margin:"auto"}}
          key={index}
          className={"tab" + selectedStyle}
          onClick={() => renderTab(index)}
        >
          <span> {elem.props.title}</span>
          {icon ? <i className={icon + " tab__icon"} /> : null}
        </li>
      );
    });
  };

  const getSubtitle = () => {
    const subtitle = props.children[selected].props.subtitle;
    if (!subtitle) return null;

    return <h2 className="subtitle">{subtitle}</h2>;
  };

  return (
    <div className="flex-col justify-center items-center text-center px-[auto] md:mx-20 ">
      <ul className="tabs xxs:flex-col sm:flex-row">
        {renderMenu()}
        <a href="/booking" className="md:ml-[47%] md:pt-2 pb-5 pt-2 md:mb-1 text-[gray] hover:bg-[#636363] rounded-tl-lg rounded-tr-lg hover:text-[#cbb771] px-5">
          <li className="mt-5">Book Now</li>
        </a>
      </ul>
      <div className="tab__content ">
        {getSubtitle()}
        {props.children[selected]}
      </div>
    </div>
  );
};

export default TabsPanel;
