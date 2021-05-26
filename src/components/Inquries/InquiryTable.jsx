import React from 'react';
import CommonTableColumn from '../table/CommonTableColumn';
import CommonTableRow from '../table/CommonTableRow';
import { Link } from 'react-router-dom';

const Inquiry = ({ inquiry, handleRemove }) => {
  const handleDelete = () => {
    console.log(inquiry);
    handleRemove(inquiry._id);
  };

  return (
    <CommonTableRow>
      <CommonTableColumn>{inquiry.userId}</CommonTableColumn>
      <CommonTableColumn>{inquiry.category}</CommonTableColumn>
      <CommonTableColumn>
        <Link
          to={`/InquiryView/${inquiry.userId}`}
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
  return (
    <>
      {lnquireList.data &&
        lnquireList.data.map((inquiry) => (
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
