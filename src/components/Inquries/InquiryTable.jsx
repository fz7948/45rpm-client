import React from 'react';
import CommonTableColumn from '../table/CommonTableColumn';
import CommonTableRow from '../table/CommonTableRow';
import { Link } from 'react-router-dom';

const Inquiry = ({ inquiry, handleRemove }) => {
  const handleDelete = () => {
    console.log('문의 리스트', inquiry);
    handleRemove(inquiry._id);
  };

  return (
    <CommonTableRow>
      <CommonTableColumn>{inquiry.userId}</CommonTableColumn>
      <CommonTableColumn>{inquiry.category}</CommonTableColumn>
      <CommonTableColumn>
        <Link
          to={`/InquiryView/${inquiry._id}`}
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
        <button onClick={handleDelete}>삭제</button>
      </CommonTableColumn>
    </CommonTableRow>
  );
};

const InquiryTable = ({ lnquireList, handleRemove }) => {
  console.log('랜더링 확인', lnquireList);
  return (
    <>
      {lnquireList.data &&
        lnquireList.data.map((inquiry) => (
          <Inquiry
            key={inquiry._id}
            inquiry={inquiry}
            handleRemove={handleRemove}
          />
        ))}
    </>
  );
};

export default InquiryTable;
