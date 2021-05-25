import React from 'react';
import CommonTableColumn from '../table/CommonTableColumn';
import CommonTableRow from '../table/CommonTableRow';
import { Link } from 'react-router-dom';

const Inquiry = ({ inquiry, handleRemove }) => {
  console.log('fsd,fsdf,.ds/f', inquiry);
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
        <button>답변대기</button>
        <button>답변완료</button>
      </CommonTableColumn>
      <CommonTableColumn>{inquiry.createdAt}</CommonTableColumn>
      <CommonTableColumn>
        <button>관리</button>
        <button onClick={() => handleRemove(inquiry.id)}>삭제</button>
      </CommonTableColumn>
    </CommonTableRow>
  );
};

const InquiryTable = ({ lnquireList, handleRemove }) => {
  console.log('REALLLY?????', lnquireList);
  return (
    <>
      {lnquireList.data.map((inquiry) => (
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
