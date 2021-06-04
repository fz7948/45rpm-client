import React, { useState, useEffect, useCallback } from 'react';
import { ModalBack, ModalBox } from '../common/InquiryModalStyle';
import styled from 'styled-components';
import AsyncCreatableSelect from 'react-select/creatable';
import '../common/CkEditor.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { questionListReq } from '../../modules/question';
import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from 'react-icons/gr';
import palette from '../../lib/styles/palette';

const InquiryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  h2 {
    color: #191919;
    font-weight: 700;
    font-size: 2.1rem;
    text-align: center;
    margin-bottom: 2.6rem;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    margin-bottom: 0.8rem;
  }
`;

const InquiryTitle = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  color: #707174;
  margin: 1rem 0rem;
  margin-bottom: 4px;
  .space {
    margin-bottom: 0.3rem;
    z-index: 0;
  }
  .spaceGory {
    z-index: 10;
    margin-bottom: 0.3rem;
  }
`;

const InquiryInput = styled.input`
  height: 1.2rem;
  width: 100%;
  padding: 1.4rem;
  border: 1px solid #9b9b9c;
  border-radius: 3px;
  font-size: 1.3rem;
  color: #5f6063;
  margin-top: 0.3rem;
  &:focus {
    outline: none;
    border: 1px solid ${palette.mainRed};
    transition: all ease 0.3s;
  }
`;

const InquiryCloseBtn = styled.button`
  position: fixed;
  top: 1rem;
  left: 47rem;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 2.1rem;
  cursor: pointer;
  &:hover {
    color: ${palette.mainRed};
    transition: all ease 0.2s;
  }
  @media screen and (max-width: 768px) {
    top: 1rem;
    left: 33rem;
  }
`;

const InquiryContent = styled.div`
  width: 150%;
  display: flex;
  flex-direction: column;
  margin-top: 0.3rem;
  .goryList {
    z-index: 10;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InquirySubmitBtn = styled.button`
  height: 3rem;
  width: 36.5rem;

  border-radius: 3px;
  border: 0;
  outline: 0;
  margin: 1.5rem 0rem 0rem 0rem;
  background-color: ${palette.main};
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: ${palette.mainHover};
    transition: all ease 0.3s;
  }
  @media screen and (max-width: 768px) {
    width: 24.5rem;
  }
`;

const InquiryModal = ({ open, close, onSubmitHand }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(({ user }) => ({
    token: user.token,
  }));

  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(open);

  const [inquiryContent, setInquiryContent] = useState({
    title: '',
    content: '',
  });

  const [value, setValue] = useState('');

  const [options, setOptions] = useState([
    { value: '일반문의', label: '일반문의' },
    { value: '커스텀제작', label: '커스텀제작' },
    { value: '공유관련', label: '공유관련' },
    { value: '서비스이용', label: '서비스이용' },
    { value: '결제관련', label: '결제관련' },
  ]);

  const handleChange = useCallback((inputValue) => setValue(inputValue), []);

  const handleCreate = useCallback(
    (inputValue) => {
      const newValue = { value: inputValue.toLowerCase(), label: inputValue };
      setOptions([...options, newValue]);
      setValue(newValue);
    },
    [options],
  );

  useEffect(() => {
    if (localVisible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(open);
  }, [localVisible, open]);

  if (!animate && !localVisible) return null;

  const onDispatchHandler = () => {
    dispatch(questionListReq(token));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitHand(inquiryContent, value);
    setTimeout(onDispatchHandler, 100);
  };

  const getValue = (e) => {
    const { name, value } = e.target;
    setInquiryContent({ ...inquiryContent, [name]: value });
  };

  const loadOptions = (inputValue, callback) =>
    setTimeout(() => {
      callback(
        options.filter((item) =>
          item.label.toLowerCase().includes(inputValue.toLowerCase()),
        ),
      );
    }, 3000);

  return (
    <>
      <ModalBack disappear={!open}>
        <div className="modal_outsider" onClick={close}></div>
        <ModalBox disappear={!open} question>
          <form onSubmit={onSubmitHandler}>
            <InquiryCloseBtn onClick={close}>
              <GrFormClose />
            </InquiryCloseBtn>
            <InquiryWrapper>
              <InquiryContent>
                <h2> 문의 사항 </h2>
                <ul>
                  <li>
                    <InquiryTitle>
                      <div> 제목 </div>
                    </InquiryTitle>
                    <InquiryInput
                      type="text"
                      name="title"
                      onChange={getValue}
                      required
                    />
                  </li>
                  <li>
                    <InquiryTitle>
                      <div className="spaceGory"> 카테고리 </div>
                    </InquiryTitle>
                    <AsyncCreatableSelect
                      className="goryList"
                      isClearable
                      value={value}
                      options={options}
                      onChange={handleChange}
                      onCreateOption={handleCreate}
                      cacheOptions
                      loadOptions={loadOptions}
                    />
                  </li>
                  <li>
                    <InquiryTitle>
                      <div className="space"> 문의 내용 </div>
                    </InquiryTitle>
                    <CKEditor
                      editor={ClassicEditor}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setInquiryContent({
                          ...inquiryContent,
                          content: data,
                        });
                      }}
                    />
                  </li>
                </ul>
              </InquiryContent>
              <InquirySubmitBtn> 제출하기 </InquirySubmitBtn>
            </InquiryWrapper>
          </form>
        </ModalBox>
      </ModalBack>
    </>
  );
};

export default InquiryModal;
