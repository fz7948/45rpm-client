import React, { useState, useEffect, useCallback } from 'react';
import { ModalBack, ModalBox } from '../common/InquiryModalStyle';
import styled from 'styled-components';
import AsyncCreatableSelect from 'react-select/creatable';

// import axios from 'axios';
import '../common/CkEditor.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const InquiryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  h2 {
    color: #191919;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 1.2rem;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    margin-bottom: 0.5rem;
  }
`;

const InquiryTitle = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #707174;
  margin: 0;
  margin-bottom: 4px;
`;

const InquiryInput = styled.input`
  height: 1.2rem;
  width: 100%;
  padding: 1rem;
  border: 1px solid #9b9b9c;
  border-radius: 3px;
  font-size: 1rem;
  color: #5f6063;
  &:focus {
    outline: none;
    border: 1px solid #f73d5c;
    transition: all ease 0.3s;
  }
`;

const InquiryCloseBtn = styled.button`
  position: fixed;
  top: 1rem;
  left: 38rem;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: #f73d5c;
    transition: all ease 0.2s;
  }
  @media screen and (max-width: 768px) {
    top: 1rem;
    left: 23rem;
  }
`;

const InquiryContent = styled.div`
  width: 150%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InquirySubmitBtn = styled.button`
  height: 2.2rem;
  width: 14rem;

  border-radius: 3px;
  border: 0;
  outline: 0;
  margin: 1rem 0rem;
  background-color: #f73d5c;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #b3535b;
    transition: all ease 0.3s;
  }
`;

const InquiryModal = ({ open, close, onSubmitHand }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(open);

  const [inquiryContent, setInquiryContent] = useState({
    title: '',
    content: '',
  });

  const [value, setValue] = useState();

  const [options, setOptions] = useState([
    { value: 'genre', label: 'Genre' },
    { value: 'song', label: 'Song' },
    { value: 'name', label: 'Name' },
    { value: 'LP', label: 'lp' },
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitHand(inquiryContent, value);
  };
  //    // submit button click ==> sending data
  //   const submitInquiry = () => {
  //     axios
  //       .post('http://localhost:5000/', {
  //         title: inquiryContent.title,
  //         content: inquiryContent.content,
  //       })
  //       .then(() => {
  //         alert('등록 완료!!');
  //       });
  //   };

  // Input get Value
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
        <ModalBox disappear={!open}>
          <form onSubmit={onSubmitHandler}>
            <InquiryCloseBtn onClick={close}> X </InquiryCloseBtn>
            <InquiryWrapper>
              <InquiryContent>
                <h2> 문의 사항 </h2>
                <ul>
                  <li>
                    <InquiryTitle>
                      <div> TITLE </div>
                    </InquiryTitle>
                    <InquiryInput
                      type="text"
                      name="title"
                      placeholder="title"
                      onChange={getValue}
                    />
                  </li>
                  <li>
                    <InquiryTitle>
                      <div> CATEGORY </div>
                    </InquiryTitle>
                    <AsyncCreatableSelect
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
                      <div> 문의 내용 </div>
                    </InquiryTitle>
                    <CKEditor
                      editor={ClassicEditor}
                      onReady={(editor) => {}}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setInquiryContent({
                          ...inquiryContent,
                          content: data,
                        });
                      }}
                      onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                      }}
                    />
                  </li>
                </ul>
              </InquiryContent>
              {/* onClick = {submitInquiry} */}
              <InquirySubmitBtn> 제출하기 </InquirySubmitBtn>
            </InquiryWrapper>
          </form>
        </ModalBox>
      </ModalBack>
    </>
  );
};

export default InquiryModal;
