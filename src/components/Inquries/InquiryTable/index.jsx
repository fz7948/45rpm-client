import React from 'react';
import CommonTableColumn from '../../table/CommonTableColumn';
import CommonTableRow from '../../table/CommonTableRow';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  alertAnswerModal,
  alertAnswerFalseModal,
} from '../../../modules/modal';

const Inquiry = ({ inquiry, handleRemove }) => {
  const dispatch = useDispatch();
  const { admin } = useSelector(({ user }) => ({
    admin: user.admin,
  }));

  const handleDelete = () => {
    handleRemove(inquiry._id);
  };

  const handleAnswer = () => {
    if (!admin) {
      dispatch(alertAnswerModal());
      return;
    }
    if (admin && inquiry.replyCheck === false) {
      dispatch(alertAnswerFalseModal());
    }
  };

  return (
    <>
      <CommonTableRow>
        <CommonTableColumn>{inquiry.userId}</CommonTableColumn>
        <CommonTableColumn>{inquiry.category}</CommonTableColumn>
        <CommonTableColumn>
          <Link
            className="title"
            to={`/InquiryView/${inquiry._id}`}
            style={{
              textDecoration: 'none',
              color: '#000',
              fontWeight: 'bold',
            }}
          >
            {inquiry.title}
          </Link>
        </CommonTableColumn>
        <CommonTableColumn>
          {inquiry.replyCheck ? (
            <>
              <button onClick={handleAnswer} className="complete">
                답변완료
              </button>
            </>
          ) : (
            <>
              <button onClick={handleAnswer} className="ready">
                답변대기
              </button>
            </>
          )}
        </CommonTableColumn>
        <CommonTableColumn>{inquiry.createdAt}</CommonTableColumn>
        <CommonTableColumn>
          <button className="delete" onClick={handleDelete}>
            삭제
          </button>
        </CommonTableColumn>
      </CommonTableRow>
    </>
  );
};

const InquiryTable = ({ lnquireList, handleRemove }) => {
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
