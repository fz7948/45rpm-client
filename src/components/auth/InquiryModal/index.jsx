import React, { useState, useEffect, useCallback } from 'react';
import { ModalBack, ModalBox } from '../../common/Modal/InquiryModalStyle';
import AsyncCreatableSelect from 'react-select/creatable';
import './CkEditor.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { questionListReq } from '../../../modules/question';
import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from 'react-icons/gr';
import {
  InquiryCloseBtn,
  InquiryContent,
  InquiryInput,
  InquirySubmitBtn,
  InquiryTitle,
  InquiryWrapper,
} from './styles';

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
