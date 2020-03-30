import React from 'react';

export function InfoTable(props) {
  const { data } = props;
  const list = structureInfoTableData(data);

  return (
    <div className="info__table">
      { list }
    </div>
  );
}

const InfoTableItem = (props) => (
  <div className="info__item">
    <div className="info__item__title">{props.title}</div>
    <div className="info__item__value">{props.value}</div>
  </div>
)

function structureInfoTableData(data) {
  let i = 0;
  const infoList = data.map(d => {
    return <InfoTableItem key={i++} {...d} />
  });

  return infoList;
}