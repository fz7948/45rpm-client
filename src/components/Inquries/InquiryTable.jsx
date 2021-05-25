import React, { useState } from 'react';
import CommonTableColumn from '../table/CommonTableColumn';
import CommonTableRow from '../table/CommonTableRow';
import { Link } from 'react-router-dom';

const Inquiry = ({ inquiry, handleRemove }) => {
  const [color, setColor] = useState('');
  const [color1, setColor1] = useState('');

  const StbyEvent = () => {
    setColor('red');
  };

  const CompletedEvent = () => {
    setColor1('lightgray');
  };

  return (
    <CommonTableRow>
      <CommonTableColumn>{inquiry.id}</CommonTableColumn>
      <CommonTableColumn>{inquiry.category}</CommonTableColumn>
      <CommonTableColumn>
        <Link
          to={`/InquiryView/${inquiry.id}`}
          style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}
        >
          {inquiry.title}
        </Link>
      </CommonTableColumn>
      <CommonTableColumn>
        <button style={{ background: color }} onClick={StbyEvent}>
          답변대기
        </button>
        <button style={{ background: color1 }} onClick={CompletedEvent}>
          답변완료
        </button>
      </CommonTableColumn>
      <CommonTableColumn>{inquiry.createdAt}</CommonTableColumn>
      <CommonTableColumn>
        <button>관리</button>
        <button onClick={() => handleRemove(inquiry.id)}>삭제</button>
      </CommonTableColumn>
    </CommonTableRow>
  );
};

const InquiryTable = ({ dataGroup, handleRemove }) => {
  console.log(dataGroup);
  return (
    <>
      {dataGroup.map((inquiry) => (
        <Inquiry
          inquiry={inquiry}
          key={inquiry.id}
          handleRemove={handleRemove}
        />
      ))}
    </>
  );
};

export default InquiryTable;
